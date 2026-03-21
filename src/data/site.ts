export const siteConfig = {
  name: "Techos Corporativos",
  legalName: "Techos Corporativos SpA",
  phoneDisplay: "+56 9 8834 2791",
  phoneRaw: "+56988342791",
  email: "contacto@techoscorporativos.cl",
  whatsapp: "https://wa.me/56988342791",
  address: "Santiago, Chile",
  serviceArea: "Chile",
  yearsExperience: "12+",
  siteUrl:
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.SITE_URL ||
    "https://techoscorporativos.cl"
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/planes-mantencion/", label: "Planes" },
  { href: "/sectores/", label: "Sectores" },
  { href: "/cobertura/", label: "Cobertura" },
  { href: "/proyectos/", label: "Proyectos" },
  { href: "/contacto/", label: "Contacto" }
];

export const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/proyectos/", label: "Proyectos" },
  { href: "/precios/", label: "Precios" },
  { href: "/planes-mantencion/", label: "Planes de Mantencion" },
  { href: "/sectores/", label: "Sectores" },
  { href: "/cobertura/", label: "Cobertura" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" }
];

export const serviceLinks = [
  {
    href: "/servicios/reparacion-techos-industriales/",
    title: "Reparacion de techos industriales",
    summary: "Correccion de filtraciones, fijaciones, uniones y puntos criticos."
  },
  {
    href: "/servicios/reparacion-goteras-filtraciones/",
    title: "Reparacion de goteras y filtraciones",
    summary: "Diagnostico de causa raiz y solucion tecnica durable."
  },
  {
    href: "/servicios/impermeabilizacion-techos/",
    title: "Impermeabilizacion de techos",
    summary: "Sistemas de sellado para techumbres metalicas y cubiertas mixtas."
  },
  {
    href: "/servicios/cambio-techumbres-industriales/",
    title: "Cambio de techos industriales",
    summary: "Cambio de techos (techumbres) con reemplazo parcial o total y continuidad operativa."
  }
];

export const serviceSubmenuLinks = [
  { href: "/servicios/reparacion-techos-industriales/", label: "Reparacion de techos industriales" },
  { href: "/servicios/reparacion-goteras-filtraciones/", label: "Reparacion de goteras y filtraciones" },
  { href: "/servicios/impermeabilizacion-techos/", label: "Impermeabilizacion de techos" },
  { href: "/servicios/cambio-techumbres-industriales/", label: "Cambio de techos industriales" },
  { href: "/servicios/cambio-cubiertas-techos/", label: "Cambio de cubiertas y techos" },
  { href: "/servicios/reparacion-por-tipo-de-cubierta/", label: "Reparacion por tipo de cubierta" },
  { href: "/servicios/reparacion-cubiertas-naves-industriales/", label: "Cubiertas de naves industriales" },
  { href: "/servicios/limpieza-reparacion-canaletas/", label: "Limpieza y reparacion de canaletas" },
  { href: "/servicios/sellado-juntas-cumbreras/", label: "Sellado de juntas y cumbreras" },
  { href: "/servicios/inspeccion-tecnica-techos/", label: "Inspeccion tecnica de techos" },
  { href: "/servicios/mantencion-techumbres-empresas/", label: "Mantencion de techumbres empresas" },
  { href: "/servicios/cotizacion-reparacion-techos/", label: "Cotizacion de reparacion de techos" }
];

export const sectorCards = [
  "Bancos y edificios corporativos",
  "Supermercados y retail",
  "Colegios, institutos y universidades",
  "Clinicas e instituciones de salud",
  "Centros logisticos y bodegas",
  "Empresas con casa matriz y sucursales"
];

export const sectorSubmenuLinks = [
  { href: "/sectores/#bancos-corporativos", label: "Bancos y corporativos" },
  { href: "/sectores/#supermercados-retail", label: "Supermercados y retail" },
  { href: "/sectores/#educacion", label: "Educacion" },
  { href: "/sectores/#salud", label: "Instituciones de salud" },
  { href: "/sectores/#logistica-bodegas", label: "Logistica y bodegas" },
  { href: "/sectores/#matriz-sucursales", label: "Casa matriz y sucursales" }
];

export const planSubmenuLinks = [
  { href: "/planes-mantencion/#plan-preventivo", label: "Plan Preventivo" },
  { href: "/planes-mantencion/#plan-operacional", label: "Plan Operacional" },
  { href: "/planes-mantencion/#plan-critico", label: "Plan Critico" }
];

export interface CoveragePage {
  slug: string;
  name: string;
  title: string;
  description: string;
  responseWindow: string;
  intro: string;
  localFocus: string[];
  commonIssues: string[];
  faq: { question: string; answer: string }[];
}

export const coveragePages: CoveragePage[] = [
  {
    slug: "lampa",
    name: "Lampa",
    title: "Reparacion de techos en Lampa | Techos Corporativos",
    description:
      "Reparacion de techos en Lampa para bodegas, centros logisticos y naves industriales. Soluciones para goteras, filtraciones e impermeabilizacion.",
    responseWindow: "24 a 48 horas para evaluacion inicial",
    intro:
      "En Lampa atendemos infraestructura con alta demanda operativa y grandes superficies de cubierta.",
    localFocus: [
      "Parques logisticos y bodegas de distribucion",
      "Centros de almacenamiento con operacion continua",
      "Naves industriales con techumbre metalica"
    ],
    commonIssues: [
      "Filtraciones en uniones y traslapos por desgaste",
      "Acumulacion de agua en sectores de escurrimiento lento",
      "Deterioro de sellos en zonas expuestas al sol"
    ],
    faq: [
      {
        question: "Trabajan por sectores para no detener operacion en Lampa?",
        answer:
          "Si. Se planifica una ejecucion por panos para mantener continuidad operacional en centros logisticos."
      },
      {
        question: "Que servicio es mas solicitado en Lampa?",
        answer:
          "La reparacion de filtraciones y mantencion de techumbres metalicas en bodegas de gran superficie."
      }
    ]
  },
  {
    slug: "quilicura",
    name: "Quilicura",
    title: "Reparacion de techos en Quilicura | Techos Corporativos",
    description:
      "Reparacion de techos en Quilicura para empresas, centros logisticos y sucursales. Mantenimiento preventivo y correccion de goteras.",
    responseWindow: "24 a 48 horas para evaluacion inicial",
    intro:
      "Quilicura concentra operaciones logisticas de alta rotacion, por eso priorizamos rapidez de diagnostico y ejecucion por etapas.",
    localFocus: [
      "Centros de distribucion y cross-docking",
      "Bodegas con turnos extendidos",
      "Instalaciones comerciales de gran formato"
    ],
    commonIssues: [
      "Filtraciones en canaletas y bajadas con alta carga de agua",
      "Goteras sobre sectores de picking y almacenamiento",
      "Fallas de fijaciones en cubiertas metalicas"
    ],
    faq: [
      {
        question: "Pueden trabajar fuera de horario en Quilicura?",
        answer:
          "Si. Coordinamos ventanas de trabajo para reducir impacto en operaciones de despacho."
      },
      {
        question: "Incluyen planes de mantencion para sedes en Quilicura?",
        answer:
          "Si. Disenamos planes trimestrales, semestrales o anuales con informe tecnico y seguimiento."
      }
    ]
  },
  {
    slug: "huechuraba",
    name: "Huechuraba",
    title: "Reparacion de techos en Huechuraba | Techos Corporativos",
    description:
      "Reparacion de techos en Huechuraba para edificios corporativos y centros operativos. Soluciones de filtraciones e impermeabilizacion.",
    responseWindow: "24 a 72 horas segun tipo de edificio",
    intro:
      "En Huechuraba atendemos tanto edificios corporativos como centros de soporte operacional con protocolos de acceso y seguridad.",
    localFocus: [
      "Edificios corporativos y oficinas centrales",
      "Centros de servicio con areas tecnicas",
      "Instalaciones mixtas administrativas y operativas"
    ],
    commonIssues: [
      "Filtraciones en encuentros de cubierta con muros",
      "Humedad en zonas de equipos tecnicos",
      "Desgaste de sellos en ductos y pasos de instalaciones"
    ],
    faq: [
      {
        question: "Pueden intervenir techos de edificios corporativos en Huechuraba?",
        answer:
          "Si. Ejecutamos intervenciones con protocolos de seguridad y coordinacion con administracion del edificio."
      },
      {
        question: "Entregan reporte para areas de mantenimiento?",
        answer:
          "Si. Cada visita termina con informe tecnico y priorizacion de mejoras."
      }
    ]
  },
  {
    slug: "recoleta",
    name: "Recoleta",
    title: "Reparacion de techos en Recoleta | Techos Corporativos",
    description:
      "Reparacion de techos en Recoleta para comercio, instituciones y bodegas urbanas. Correccion de goteras y sellado de filtraciones.",
    responseWindow: "24 a 72 horas segun criticidad",
    intro:
      "Recoleta combina edificios institucionales y comercio urbano, por lo que priorizamos intervenciones acotadas y de rapida respuesta.",
    localFocus: [
      "Edificios institucionales y oficinas",
      "Comercio con bodegaje urbano",
      "Centros de atencion con flujo permanente"
    ],
    commonIssues: [
      "Filtraciones puntuales en cubiertas antiguas",
      "Canaletas saturadas por residuos urbanos",
      "Ingreso de agua en encuentros y claraboyas"
    ],
    faq: [
      {
        question: "Atienden reparaciones urgentes en Recoleta?",
        answer:
          "Si. Priorizamos urgencias por riesgo operativo y disponibilidad de acceso."
      },
      {
        question: "Pueden combinar reparacion y mantencion preventiva?",
        answer:
          "Si. Se puede intervenir la falla actual y dejar plan de seguimiento semestral."
      }
    ]
  },
  {
    slug: "independencia",
    name: "Independencia",
    title: "Reparacion de techos en Independencia | Techos Corporativos",
    description:
      "Servicio de reparacion de techos en Independencia para empresas, salud y educacion. Soluciones para goteras y filtraciones recurrentes.",
    responseWindow: "24 a 72 horas segun prioridad",
    intro:
      "En Independencia trabajamos con instalaciones de uso intensivo, donde la continuidad operativa y la seguridad son factores clave.",
    localFocus: [
      "Instituciones de salud y servicios",
      "Edificios de educacion y administracion",
      "Comercio y bodegaje en zona urbana"
    ],
    commonIssues: [
      "Goteras en zonas de alto transito",
      "Filtraciones sobre cielos y pasillos tecnicos",
      "Desgaste acelerado de sellos en cubiertas antiguas"
    ],
    faq: [
      {
        question: "Pueden ejecutar trabajos por fases en Independencia?",
        answer:
          "Si. Planificamos por sectores para mantener las areas criticas en funcionamiento."
      },
      {
        question: "Ofrecen plan anual para instituciones?",
        answer:
          "Si. Implementamos programas de mantencion con reporte tecnico por visita."
      }
    ]
  },
  {
    slug: "pudahuel",
    name: "Pudahuel",
    title: "Reparacion de techos en Pudahuel | Techos Corporativos",
    description:
      "Reparacion de techos en Pudahuel para centros logisticos, bodegas y operaciones de alto flujo. Impermeabilizacion y control de filtraciones.",
    responseWindow: "24 a 48 horas para diagnostico inicial",
    intro:
      "Pudahuel exige soluciones rapidas para instalaciones de gran escala y movimientos continuos de carga.",
    localFocus: [
      "Centros logisticos de gran superficie",
      "Bodegas de transporte y distribucion",
      "Instalaciones industriales cercanas a vias troncales"
    ],
    commonIssues: [
      "Filtraciones por desgaste de uniones longitudinales",
      "Sobrecarga de canaletas en eventos de lluvia intensa",
      "Puntos de gotera sobre zonas de picking"
    ],
    faq: [
      {
        question: "Atienden bodegas de gran formato en Pudahuel?",
        answer:
          "Si. Tenemos metodologia para cubiertas de gran metraje con ejecucion por panos."
      },
      {
        question: "Realizan impermeabilizacion preventiva?",
        answer:
          "Si. Ejecutamos impermeabilizacion y controles periodicos para evitar reincidencia."
      }
    ]
  },
  {
    slug: "maipu",
    name: "Maipu",
    title: "Reparacion de techos en Maipu | Techos Corporativos",
    description:
      "Reparacion de techos en Maipu para empresas, comercio y centros de servicio. Soluciones en goteras, filtraciones y mantencion programada.",
    responseWindow: "24 a 72 horas segun ubicacion de la sede",
    intro:
      "En Maipu atendemos instalaciones comerciales, educacionales y operativas con enfoque en reparacion programada y prevencion.",
    localFocus: [
      "Locales de retail y supermercados",
      "Colegios e instituciones educacionales",
      "Centros de servicio y almacenamiento"
    ],
    commonIssues: [
      "Filtraciones en cubiertas mixtas metalicas y livianas",
      "Canaletas obstruidas en periodos de lluvia",
      "Fallas de sellado en uniones de cubierta"
    ],
    faq: [
      {
        question: "Pueden programar trabajos fuera de horario comercial en Maipu?",
        answer:
          "Si. Ajustamos la planificacion para intervenir con minima afectacion al flujo de clientes."
      },
      {
        question: "Ofrecen contrato de mantencion en Maipu?",
        answer:
          "Si. Incluye inspecciones, ajustes preventivos e informe tecnico por visita con periodicidad flexible."
      }
    ]
  },
  {
    slug: "pedro-aguirre-cerda",
    name: "Pedro Aguirre Cerda",
    title: "Reparacion de techos en Pedro Aguirre Cerda | Techos Corporativos",
    description:
      "Reparacion de techos en Pedro Aguirre Cerda para instalaciones comerciales e institucionales. Correccion de filtraciones y goteras.",
    responseWindow: "24 a 72 horas segun demanda",
    intro:
      "En Pedro Aguirre Cerda ejecutamos reparaciones de cubierta en entornos urbanos con alta ocupacion y necesidad de respuesta ordenada.",
    localFocus: [
      "Centros comerciales de barrio",
      "Instituciones y edificios de servicio",
      "Bodegas urbanas de soporte operativo"
    ],
    commonIssues: [
      "Filtraciones en encuentros de cubierta y medianeros",
      "Goteras en sectores con techumbres antiguas",
      "Mantenimiento insuficiente en canaletas"
    ],
    faq: [
      {
        question: "Pueden intervenir techumbres antiguas en Pedro Aguirre Cerda?",
        answer:
          "Si. Evaluamos si conviene reparar por sectores o planificar cambio parcial de cubierta."
      },
      {
        question: "Entregan presupuesto priorizado?",
        answer:
          "Si. Se propone una ruta de intervencion por criticidad y presupuesto disponible."
      }
    ]
  },
  {
    slug: "cerrillos",
    name: "Cerrillos",
    title: "Reparacion de techos en Cerrillos | Techos Corporativos",
    description:
      "Reparacion de techos en Cerrillos para empresas, bodegas y sucursales. Servicio tecnico en filtraciones, impermeabilizacion y mantencion.",
    responseWindow: "24 a 72 horas para visita tecnica",
    intro:
      "Cerrillos combina actividad comercial e industrial, por eso aplicamos planes de reparacion con foco en continuidad de uso.",
    localFocus: [
      "Bodegas y centros de apoyo operativo",
      "Locales comerciales de alto flujo",
      "Instalaciones institucionales y de servicio"
    ],
    commonIssues: [
      "Filtraciones en canaletas y encuentros con muros",
      "Deterioro de sellos en cubiertas metalicas",
      "Goteras recurrentes en sectores de atencion"
    ],
    faq: [
      {
        question: "Atienden mantencion preventiva en Cerrillos?",
        answer:
          "Si. Implementamos planes programados para disminuir fallas durante invierno."
      },
      {
        question: "Pueden trabajar en varias sedes de Cerrillos?",
        answer:
          "Si. Coordinamos una sola metodologia para multiples sucursales."
      }
    ]
  },
  {
    slug: "lo-espejo",
    name: "Lo Espejo",
    title: "Reparacion de techos en Lo Espejo | Techos Corporativos",
    description:
      "Reparacion de techos en Lo Espejo para centros logisticos y operaciones industriales. Solucion de goteras y filtraciones en techumbres.",
    responseWindow: "24 a 72 horas segun criticidad de la falla",
    intro:
      "En Lo Espejo atendemos instalaciones productivas y de distribucion con intervenciones focalizadas por sector.",
    localFocus: [
      "Naves industriales y talleres",
      "Bodegas de soporte logistico",
      "Operaciones con carga y descarga constante"
    ],
    commonIssues: [
      "Filtraciones en panos con alto desgaste",
      "Goteras en zonas de transferencia de carga",
      "Canaletas con mantenimiento insuficiente"
    ],
    faq: [
      {
        question: "Realizan diagnostico de filtraciones en Lo Espejo?",
        answer:
          "Si. Identificamos causa raiz y proponemos solucion por prioridad de riesgo."
      },
      {
        question: "Pueden incluir plan de mantencion programada?",
        answer:
          "Si. Se puede contratar seguimiento mensual, trimestral, semestral o anual segun necesidad."
      }
    ]
  },
  {
    slug: "san-bernardo",
    name: "San Bernardo",
    title: "Reparacion de techos en San Bernardo | Techos Corporativos",
    description:
      "Reparacion de techos en San Bernardo para industrias, bodegas y centros de distribucion. Impermeabilizacion y cambio de techumbres.",
    responseWindow: "24 a 48 horas en zonas de cobertura directa",
    intro:
      "San Bernardo tiene alto componente industrial y logistico; trabajamos con metodologia por etapas para no interrumpir la operacion.",
    localFocus: [
      "Plantas y naves industriales",
      "Centros de distribucion regional",
      "Bodegas con operacion 24/7"
    ],
    commonIssues: [
      "Filtraciones extensas en cubiertas de gran metraje",
      "Desgaste de fijaciones en zonas de viento",
      "Necesidad de cambio parcial de techumbre"
    ],
    faq: [
      {
        question: "Atienden cambios parciales de techumbre en San Bernardo?",
        answer:
          "Si. Evaluamos sector por sector y ejecutamos reemplazos parciales o totales."
      },
      {
        question: "Pueden gestionar sedes multiples en San Bernardo?",
        answer:
          "Si. Centralizamos la gestion con reportes unificados para casa matriz."
      }
    ]
  }
];

export const coverageCommunes = coveragePages.map((item) => item.name);
