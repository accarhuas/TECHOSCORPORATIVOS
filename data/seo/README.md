# Base de keywords SEO - Techos Corporativos

Este archivo guarda la data exportada desde Google Keyword Planner para usarla como base de decisiones SEO.

## Archivos base
- `data/seo/keyword_planner_base.csv`
- `data/seo/keyword_reparacion_de_techos.xlsx` (fuente original)
- `data/seo/keyword_clusters.csv` (keywords agrupadas)
- `data/seo/keyword_clusters_summary.md` (resumen por cluster)

## Columnas actuales (export Google Keyword Planner)
- `Keyword`
- `Currency`
- `Avg. monthly searches`
- `Cambio en los últimos tres meses`
- `Cambio interanual`
- `Competition`
- `Competition (indexed value)`
- `Top of page bid (low range)`
- `Top of page bid (high range)`

## Script de agrupacion
- `scripts/cluster_keywords.ps1`
- Ejecutar con: `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/cluster_keywords.ps1`

## Estado
- Plantilla creada el 2026-03-05.
- Data real importada el 2026-03-05 desde `c:/Users/soled/Downloads/keyword reparacion de techos.xlsx`.
- CSV actualizado exportando la primera hoja del Excel.
- Clustering inicial generado el 2026-03-05.
