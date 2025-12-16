import { AnalysisPoint, DocumentChapter, Sentiment, Infographic } from './types';

// Updated Infographics based on user provided images
export const infographics: Infographic[] = [
  {
    id: 'info-2',
    title: 'Análisis Crítico de la Reforma',
    src: '/infographics/slide-2.jpg',
    description: 'Portada del análisis crítico sobre la modernización vs retroceso.'
  },
  {
    id: 'info-3',
    title: 'Cambio de Paradigma',
    src: '/infographics/slide-3.jpg',
    description: 'Impacto económico, erosión del vínculo laboral y neutralización de la acción colectiva.'
  },
  {
    id: 'info-1',
    title: 'Legalización del Fraude Laboral',
    src: '/infographics/slide-1.jpg',
    description: 'Comparativa sobre la presunción de laboralidad y la carga de la prueba.'
  },
  {
    id: 'info-4',
    title: 'Eliminación de Multas',
    src: '/infographics/slide-4.jpg',
    description: 'Comparativa sobre la eliminación de multas por trabajo no registrado.'
  },
  {
    id: 'info-5',
    title: 'Reducción de Indemnización',
    src: '/infographics/slide-5.jpg',
    description: 'Reducción de la base de cálculo para la indemnización por despido.'
  },
  {
    id: 'info-6',
    title: 'Dilución de Responsabilidad',
    src: '/infographics/slide-6.jpg',
    description: 'Cambios en la responsabilidad solidaria en casos de tercerización.'
  },
  {
    id: 'info-7',
    title: 'Formalizando la Inestabilidad',
    src: '/infographics/slide-7.jpg',
    description: 'Extensión de períodos de prueba y trabajadores de plataformas.'
  },
  {
    id: 'info-8',
    title: 'Limitación del Derecho a Huelga',
    src: '/infographics/slide-8.jpg',
    description: 'Nuevas definiciones de servicios esenciales y trascendentales.'
  },
  {
    id: 'info-9',
    title: 'Bloqueos: Nueva Causal de Despido',
    src: '/infographics/slide-9.jpg',
    description: 'Los bloqueos y tomas pasan a ser causal objetiva de despido.'
  },
  {
    id: 'info-10',
    title: 'Panorama Completo: Desprotección',
    src: '/infographics/slide-10.jpg',
    description: 'Hacia un nuevo paradigma de desprotección laboral.'
  }
];

export const summaryInfographics: Infographic[] = [
  {
    id: 'sum-1',
    title: 'Modernización o Retroceso',
    src: '/infographics/summary-new-1.jpg',
    description: 'Comparativa visual del impacto general de la reforma en la relación laboral.'
  },
  {
    id: 'sum-2',
    title: 'Un Paso Atrás',
    src: '/infographics/summary-new-2.png',
    description: 'Resumen gráfico de los principales retrocesos en derechos laborales.'
  }
];

export const analysisPoints: AnalysisPoint[] = [
  {
    id: '1',
    title: 'Eliminación de Multas (Trabajo "En Negro")',
    reformDescription: 'Se eliminan las multas para el empleador que no registre. El trabajador NO recibe indemnización extra. El Estado condona la deuda.',
    currentLawDescription: 'Compensación económica directa al trabajador por no estar registrado. Indemnizaciones agravadas que duplican el monto.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Derogación Arts 8-15 Ley 24.013'
  },
  {
    id: '2',
    title: 'Reducción de Indemnización por Despido',
    reformDescription: 'Mejor remuneración mensual SIN aguinaldo ni bonos. Excluye explícitamente aguinaldo, premios y bonificaciones de la base de cálculo.',
    currentLawDescription: 'Base de cálculo amplia que a menudo incluye o prorratea el aguinaldo (SAC) y bonos anuales.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Art. 245 LCT (Base de cálculo)'
  },
  {
    id: '3',
    title: 'Extensión del Período de Prueba',
    reformDescription: 'Extensión a 6-8 meses (Agrario) y 6 meses (Doméstico). Despidos sin costo durante este lapso mayor.',
    currentLawDescription: 'Período de prueba general es de 3 meses. Mayor estabilidad laboral con períodos breves.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Art. 92 bis LCT'
  },
  {
    id: '4',
    title: 'Legalización del Fraude "Falso Autónomo"',
    reformDescription: 'Carga de la prueba en el trabajador. Debe demostrar ser empleado encubierto. Facilita encubrir relaciones laborales.',
    currentLawDescription: 'Presunción de laboralidad. Se asume que quien presta servicios es un empleado. El empleador debe probar lo contrario.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Art. 23 LCT Reformado'
  },
  {
    id: '5',
    title: 'Limitación Extrema del Derecho a Huelga',
    reformDescription: 'Guardias mínimas tan altas (50%-75%) que anulan la efectividad de la huelga en Educación, Transporte, Industria, etc.',
    currentLawDescription: 'Servicios esenciales limitados estrictamente (Salud, Agua, Control Aéreo).',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Servicios Esenciales'
  },
  {
    id: '6',
    title: 'Solidaridad de la Empresa Principal',
    reformDescription: 'Empresa principal eximida de responsabilidad si controló papeles básicos. Si la contratista quiebra, el trabajador pierde.',
    currentLawDescription: 'Empresa principal y contratista son "solidariamente responsables". El trabajador puede reclamar a la principal.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Art. 30 LCT'
  },
  {
    id: '7',
    title: 'Digitalización y Simplificación Registral',
    reformDescription: 'Sistema electrónico simplificado para la registración laboral. Facilita burocracia, pero no mejora derechos sustanciales.',
    currentLawDescription: 'Libros en papel y sistemas antiguos.',
    impact: Sentiment.NEUTRAL, // Changed to Neutral to trigger "No Favorites" message if filtered
    articleReference: 'Art. 52 LCT'
  },
  {
    id: '8',
    title: 'Desprotección en Plataformas (Apps)',
    reformDescription: 'Crea régimen de "prestadores independientes", negando relación de dependencia por ley.',
    currentLawDescription: 'Vacío legal, pero muchos jueces reconocen la relación laboral y derechos plenos (vacaciones, aguinaldo).',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Nuevo Título'
  },
  {
    id: '9',
    title: 'Bloqueos como Justa Causa',
    reformDescription: 'Bloquear un establecimiento es "injuria grave" que justifica automáticamente el despido sin indemnización.',
    currentLawDescription: 'Despido es litigioso y depende de la gravedad y pruebas en juicio.',
    impact: Sentiment.NEGATIVE,
    articleReference: 'Art. 242 LCT'
  },
  {
    id: '10',
    title: 'Fondo de Cese Laboral',
    reformDescription: 'Habilita sustituir la indemnización por despido por un fondo de cese o seguro privado (opcional por convenio).',
    currentLawDescription: 'Sistema de indemnización tarifada a cargo directo del empleador.',
    impact: Sentiment.WARNING,
    articleReference: 'Nuevo Sistema'
  },
  {
    id: '11',
    title: 'Trabajadores Independientes con Colaboradores',
    reformDescription: 'Permite a "independientes" contratar hasta 5 "colaboradores" sin vínculo laboral ni derechos de dependencia.',
    currentLawDescription: 'Rige la presunción de laboralidad: quien trabaja para otro se considera empleado.',
    impact: Sentiment.WARNING,
    articleReference: 'Nuevo Régimen'
  },
  {
    id: '12',
    title: 'Ultraactividad de Convenios',
    reformDescription: 'Limita la vigencia automática de cláusulas normativas al vencer el convenio, salvo acuerdo contrario.',
    currentLawDescription: 'Ultraactividad plena: el convenio sigue vigente íntegramente hasta ser reemplazado.',
    impact: Sentiment.WARNING,
    articleReference: 'Negociación Colectiva'
  }
];

export const documentContent: DocumentChapter[] = [
  {
    id: 'intro',
    title: 'Mensaje de Elevación',
    sections: [
      {
        id: 'msg-1',
        title: 'Fundamentos',
        content: `Tengo el agrado de dirigirme a Ud. a fin de remitirle adjunto al presente el Proyecto de Ley denominado "Ley de Modernización Laboral". \n\nLa iniciativa pretende actualizar el marco laboral vigente a fines de remover las distorsiones que afectan la creación de empleo formal... La combinación de crisis económica, incertidumbre jurídica y altos costos derivados de la litigiosidad ha generado un estancamiento del empleo formal.`,
        pageReference: 4
      }
    ]
  },
  {
    id: 'titulo-1',
    title: 'Título I: Modificaciones LCT',
    sections: [
      {
        id: 'art-1',
        title: 'Ámbito de Aplicación (Art. 2 LCT)',
        content: `ARTÍCULO 1°.- Sustitúyese el artículo 2° de la Ley de Contrato de Trabajo N° 20.744... \n\n"ARTÍCULO 2°.- Ámbito de aplicación. La vigencia de esta ley quedará condicionada a que la aplicación de sus disposiciones resulte compatible con la naturaleza y modalidades de la actividad... \n\n a. A los dependientes de la Administración Pública Nacional, provincial o municipal... \n b. Al personal de casas particulares... \n c. A los trabajadores agrarios..."`,
        pageReference: 15
      },
      {
        id: 'art-23',
        title: 'Presunción del Contrato (Art. 23 LCT)',
        content: `ARTÍCULO 13.- Sustitúyese el artículo 23 de la LCT... \n\n"ARTÍCULO 23.- Presunción de la existencia del contrato de trabajo. El hecho de la prestación de servicios hace presumir la existencia de un contrato de trabajo, salvo que, por las circunstancias, las relaciones o causas que lo motiven se demostrase lo contrario. \n\nLa presunción contenida en el presente artículo no será de aplicación cuando mediaren contrataciones de obras o de servicios profesionales o de oficios y se emitan los recibos o facturas correspondientes..."`,
        pageReference: 19
      }
    ]
  },
  {
    id: 'titulo-2',
    title: 'Título II: Fondo de Asistencia Laboral',
    sections: [
      {
        id: 'fondo-cese',
        title: 'Creación del Fondo',
        content: `ARTÍCULO 58.- Objeto. Créanse los Fondos de Asistencia Laboral... destinados a coadyuvar al cumplimiento de las obligaciones indemnizatorias reparadoras de preaviso y despido sin causa. \n\nEste sistema podrá sustituir el régimen indemnizatorio vigente mediante Convenio Colectivo de Trabajo.`,
        pageReference: 46
      }
    ]
  },
  {
    id: 'titulo-vii',
    title: 'Título VII: Conflictos Colectivos',
    sections: [
      {
        id: 'huelga',
        title: 'Servicios Esenciales',
        content: `ARTÍCULO 98.- Sustitúyese el artículo 24 de la Ley N° 25.877... \n\nEn el caso de los servicios esenciales, en ningún caso se podrá negociar o imponer a las partes una cobertura menor al SETENTA Y CINCO POR CIENTO (75%) de la prestación normal. \n\nEn el caso de actividades de importancia trascendental, la cobertura no podrá ser menor al CINCUENTA POR CIENTO (50%).`,
        pageReference: 63
      }
    ]
  },
  {
    id: 'titulo-xii',
    title: 'Título XII: Plataformas Tecnológicas',
    sections: [
      {
        id: 'plataformas',
        title: 'Régimen de Movilidad y Reparto',
        content: `ARTÍCULO 114.- Objeto. El presente régimen tiene por objeto establecer reglas adecuadas para promover el desarrollo de la economía de plataformas tecnológicas... \n\nARTÍCULO 116.- Libertad de conexión... El prestador independiente será libre de conectarse a cualquiera de las plataformas... no pudiendo exigirse exclusividad.`,
        pageReference: 76
      }
    ]
  }
];