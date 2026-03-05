param(
    [string]$InputPath = "data/seo/keyword_planner_base.csv",
    [string]$OutputPath = "data/seo/keyword_clusters.csv",
    [string]$SummaryPath = "data/seo/keyword_clusters_summary.md"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Normalize-Text([string]$text) {
    if ([string]::IsNullOrWhiteSpace($text)) { return "" }
    $t = $text.ToLowerInvariant()
    $t = $t.Replace("á", "a").Replace("é", "e").Replace("í", "i").Replace("ó", "o").Replace("ú", "u").Replace("ü", "u").Replace("ñ", "n")
    $t = [regex]::Replace($t, "[^a-z0-9 ]", " ")
    $t = [regex]::Replace($t, "\s+", " ").Trim()
    return $t
}

function To-Int([string]$value) {
    if ([string]::IsNullOrWhiteSpace($value)) { return 0 }
    $clean = [regex]::Replace($value, "[^0-9]", "")
    if ([string]::IsNullOrWhiteSpace($clean)) { return 0 }
    return [int]$clean
}

function Matches-Any([string]$text, [string[]]$terms) {
    foreach ($term in $terms) {
        if ($text -match $term) { return $true }
    }
    return $false
}

$rows = Import-Csv -Encoding Default $InputPath

$pageByCluster = @{
    "B2B_Industrial" = "/reparacion-techos-industriales"
    "Core_Reparacion_Techos" = "/"
    "Goteras_Filtraciones_Humedad" = "/reparacion-goteras-filtraciones"
    "Impermeabilizacion_Sellado" = "/impermeabilizacion-techos"
    "Canaletas_Drenaje" = "/limpieza-reparacion-canaletas"
    "Limpieza_Mantencion" = "/mantencion-techos-empresas"
    "Instalacion_Cambio_Cubierta" = "/cambio-cubiertas-techos"
    "Precios_Cotizacion" = "/cotizacion-reparacion-techos"
    "Material_Tipo_Cubierta" = "/reparacion-por-tipo-de-cubierta"
    "Informacional_DIY" = "/blog/guia-reparacion-techos"
    "No_Relevante" = "/"
    "Otros" = "/servicios-techos"
}

$noRelevantTerms = @(
    "\bventilador(es)?\b", "\bfalso techo\b", "\bpladur\b", "\btablaroca\b", "\bescayola\b", "\bplafon\b",
    "\bporcelanato\b", "\bbovedilla\b", "\bhampton bay\b", "\bhalux\b", "\bpunto luz\b"
)

$clustered = foreach ($row in $rows) {
    $keyword = $row.Keyword
    $norm = Normalize-Text $keyword

    $isNoRelevant = Matches-Any $norm $noRelevantTerms
    $isB2B = Matches-Any $norm @(
        "\bindustrial(es)?\b", "\bempresa(s)?\b", "\bcomercial(es)?\b", "\bnave(s)?\b", "\bbodega(s)?\b",
        "\bgalpon(es)?\b", "\bplanta(s)?\b", "\bfabrica(s)?\b", "\bcolegio(s)?\b", "\bsucursal(es)?\b", "\boficina(s)?\b"
    )
    $isPrice = Matches-Any $norm @("\bprecio(s)?\b", "\bcosto(s)?\b", "\bpresupuesto(s)?\b", "\bcotizacion(es)?\b", "\bcuanto cuesta\b", "\bcuanto cobra\b")
    $isInformational = Matches-Any $norm @("^como\b", "\bsoluciones\b", "\butensilios\b", "\bguia\b", "\btutorial\b", "\bpaso a paso\b")
    $isCanaletas = Matches-Any $norm @("\bcanaleta(s)?\b", "\bdesague\b", "\bbajante(s)?\b")
    $isImpermeabilizacion = Matches-Any $norm @("\bimpermeabiliz", "\bsellad", "\bmembrana\b", "\baisla")
    $isGoteras = Matches-Any $norm @("\bgotera(s)?\b", "\bfiltracion(es)?\b", "\bhumedad(es)?\b", "\binfiltracion(es)?\b")
    $isLimpieza = Matches-Any $norm @("\blimpieza\b", "\blimpiar\b", "\bmantencion\b", "\bmantenimiento\b")
    $isInstalacionCambio = Matches-Any $norm @("\binstalacion\b", "\binstalar\b", "\bcambio\b", "\bcambiar\b", "\bcolocacion\b", "\bmontaje\b")
    $isCore = (Matches-Any $norm @("\breparacion\b", "\breparar\b", "\barreglo\b", "\barreglar\b")) -and (Matches-Any $norm @("\btecho(s)?\b", "\btechumbre(s)?\b", "\btejado(s)?\b", "\bcubierta(s)?\b"))
    $isMaterial = Matches-Any $norm @("\bteja(s)?\b", "\bpolicarbonato\b", "\bchapa\b", "\bpvc\b", "\blamina\b", "\blosa\b", "\buralita\b", "\bpanel sandwich\b", "\bfibrocemento\b", "\bmadera\b")

    $cluster = "Otros"
    if ($isNoRelevant) { $cluster = "No_Relevante" }
    elseif ($isB2B) { $cluster = "B2B_Industrial" }
    elseif ($isPrice) { $cluster = "Precios_Cotizacion" }
    elseif ($isImpermeabilizacion) { $cluster = "Impermeabilizacion_Sellado" }
    elseif ($isGoteras) { $cluster = "Goteras_Filtraciones_Humedad" }
    elseif ($isCanaletas) { $cluster = "Canaletas_Drenaje" }
    elseif ($isLimpieza) { $cluster = "Limpieza_Mantencion" }
    elseif ($isCore) { $cluster = "Core_Reparacion_Techos" }
    elseif ($isInstalacionCambio) { $cluster = "Instalacion_Cambio_Cubierta" }
    elseif ($isMaterial) { $cluster = "Material_Tipo_Cubierta" }
    elseif ($isInformational) { $cluster = "Informacional_DIY" }

    $intent = "Transaccional"
    if ($isInformational) { $intent = "Informacional" }
    elseif ($isPrice) { $intent = "Comercial" }

    $fitB2B = "Media"
    if ($cluster -eq "B2B_Industrial") { $fitB2B = "Alta" }
    elseif ($cluster -in @("No_Relevante", "Informacional_DIY", "Otros")) { $fitB2B = "Baja" }

    $priority = "P2"
    if ($cluster -in @("B2B_Industrial", "Core_Reparacion_Techos", "Goteras_Filtraciones_Humedad", "Impermeabilizacion_Sellado")) { $priority = "P1" }
    elseif ($cluster -in @("No_Relevante", "Material_Tipo_Cubierta", "Informacional_DIY", "Otros")) { $priority = "P3" }

    [pscustomobject]@{
        Keyword = $keyword
        Cluster = $cluster
        Intent = $intent
        Fit_B2B = $fitB2B
        Priority = $priority
        Recommended_Page = $pageByCluster[$cluster]
        Avg_Monthly_Searches = To-Int($row."Avg. monthly searches")
        Competition = $row.Competition
        Competition_Indexed = To-Int($row."Competition (indexed value)")
        Top_Bid_Low_CLP = To-Int($row."Top of page bid (low range)")
        Top_Bid_High_CLP = To-Int($row."Top of page bid (high range)")
    }
}

$clustered | Export-Csv -NoTypeInformation -Encoding UTF8 $OutputPath

$summary = $clustered |
    Group-Object Cluster |
    ForEach-Object {
        $items = $_.Group
        [pscustomobject]@{
            Cluster = $_.Name
            Keywords = $items.Count
            Total_Search_Volume = ($items | Measure-Object Avg_Monthly_Searches -Sum).Sum
            Avg_Competition_Index = [math]::Round((($items | Measure-Object Competition_Indexed -Average).Average), 1)
            Avg_High_Bid_CLP = [math]::Round((($items | Measure-Object Top_Bid_High_CLP -Average).Average), 0)
            Priority_Mix = (($items | Group-Object Priority | Sort-Object Name | ForEach-Object { "$($_.Name):$($_.Count)" }) -join ", ")
            Recommended_Page = $pageByCluster[$_.Name]
        }
    } |
    Sort-Object Total_Search_Volume -Descending

$topByCluster = @{}
foreach ($c in $summary.Cluster) {
    $topByCluster[$c] = $clustered |
        Where-Object { $_.Cluster -eq $c } |
        Sort-Object -Property @{Expression = "Avg_Monthly_Searches"; Descending = $true}, @{Expression = "Top_Bid_High_CLP"; Descending = $true} |
        Select-Object -First 8 Keyword, Avg_Monthly_Searches
}

$lines = @()
$lines += "# Keyword Clusters"
$lines += ""
$lines += "Generado: 2026-03-05"
$lines += ""
$lines += "## Resumen"
$lines += ""
$lines += "| Cluster | Keywords | Volumen total | Competencia idx prom. | Bid alto prom. (CLP) | Prioridades | Pagina recomendada |"
$lines += "|---|---:|---:|---:|---:|---|---|"
foreach ($s in $summary) {
    $lines += "| $($s.Cluster) | $($s.Keywords) | $($s.Total_Search_Volume) | $($s.Avg_Competition_Index) | $($s.Avg_High_Bid_CLP) | $($s.Priority_Mix) | $($s.Recommended_Page) |"
}
$lines += ""
$lines += "## Top Keywords por Cluster"
$lines += ""
foreach ($c in $summary.Cluster) {
    $lines += "### $c"
    foreach ($k in $topByCluster[$c]) {
        $lines += "- $($k.Keyword) ($($k.Avg_Monthly_Searches))"
    }
    $lines += ""
}

$lines | Set-Content -Encoding UTF8 $SummaryPath

Write-Output "Cluster files updated:"
Write-Output "- $OutputPath"
Write-Output "- $SummaryPath"
