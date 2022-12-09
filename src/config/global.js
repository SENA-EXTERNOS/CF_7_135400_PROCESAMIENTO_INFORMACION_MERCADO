export default {
  global: {
    componenteFormativo:
      'Aplicación de herramientas estadísticas en la presentación de datos',
    descripcionCurso:
      'El presente componente formativo será un gran aporte para el aprendizaje de herramientas que ayuden a interpretar la información recolectada, de manera adecuada y precisa, en los procesos de investigación de mercados que emprende una empresa, en aras de fortalecer la comercialización de sus productos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas estadísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Selección de herramientas estadísticas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Gráfico de barras',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis de Pareto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Histogramas. Maestro de productos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Medidas de tendencia',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Codificación y tabulación de datos e información de mercados	Tutor formación. (s,f). Codificación y tabulación de datos e información de mercados. Editorial tutor formación',
      referencia:
        'Tutor formación. (s,f). <em>Codificación y tabulación de datos e información de mercados</em>. Editorial tutor formación',
      tipo: 'PDF',
      link:
        'https://editorial.tutorformacion.es/es/index.php?controller=attachment&id_attachment=151://www.google.com/',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Margarita Aida Cruz García(2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA.</em>',
      tipo: 'Artículo',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748',
    },
    {
      tema: 'Guía para la presentación de gráficos estadísticos',
      referencia:
        'ISO 27001. (2013). Sistema de Gestión de Seguridad en la Información.',
      tipo: 'Norma',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      tema: 'Guía de implementación para la seguridad de la información ',
      referencia:
        'ISO 27001. (2013). <em>Guía de implementación para la seguridad de la información.</em>',
      tipo: 'Norma',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'descomposición de elementos que conforman la totalidad de datos, cuyo fin es clasificar y reclasificar el material recogido desde diferentes puntos de vista hasta optar por el más preciso y representativo.',
    },
    {
      termino: 'Concepto',
      significado:
        'símbolo que representa las semejanzas de fenómenos por demás diversos.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'representan la síntesis de los resultados obtenidos a lo largo del proceso de investigación.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'indica la estabilidad, consistencia y exactitud de los resultados.',
    },
    {
      termino: 'Cuadro o tabla',
      significado:
        'ordenamiento de datos numéricos en renglones y columnas que especifican la naturaleza de estos.',
    },
    {
      termino: 'Dato primario',
      significado:
        'información reunida por el investigador directamente de la fuente.',
    },
    {
      termino: 'Dato secundario',
      significado:
        'información reunida por una persona diferente al investigador.',
    },
    {
      termino: 'Descripción',
      significado:
        'Resumen muy breve que contiene la información más relevante contenida en un trabajo escrito, informe, etc.',
    },
    {
      termino: 'Entrevista',
      significado:
        'se efectúa con base en un cuestionario y con una cédula que se debe llenar a medida que se desarrolla.',
    },
    {
      termino: 'Estudio de campo',
      significado:
        'son investigaciones que se realizan en el medio ambiente donde se desarrolla el problema que se va a investigar.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'es la respuesta tentativa a un problema; es una proposición que se pone a prueba para determinar su validez.',
    },
    {
      termino: 'Muestreo',
      significado:
        'conjunto de operaciones que se realizan para estudiar la distribución de determinadas características en la totalidad de una población denominada muestra.',
    },
    {
      termino: 'Observación de campo',
      significado: 'se realiza en el lugar donde se da el fenómeno observado.',
    },
    {
      termino: 'Preparación',
      significado:
        'Proceso realizado previamente a la ejecución de una actividad que requiere de elementos o conocimientos específicos.',
    },
    {
      termino: 'Recolección',
      significado:
        'recoger, reunir o agrupar diferentes elementos o información que cumpla con características especiales y con propósitos específicos. ',
    },
    {
      termino: 'Repositorio',
      significado:
        'lugar o ubicación donde se guarda información, en su mayoría, con características específicas o representativas.',
    },
    {
      termino: 'Tabulación',
      significado:
        'consiste en determinar grupos, subgrupos, clases o categorías en los que puedan ser clasificadas las respuestas del cuestionario aplicado en la investigación, resumiendo los datos en tablas estadísticas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Artículo	Alfredo Baronio, S. C. (2018). <em>Saber y Saber Hacer con Estadística</em>. Córdoba, Argentina: UniRio.',
      link: '',
    },
    {
      referencia:
        'ISO 27001. (2013). Sistema de Gestión de Seguridad en la Información.',
      link: '',
    },
    {
      referencia:
        'Margarita Aida Cruz García. (2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA</em>. Obtenido de',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748',
    },
    {
      referencia:
        'Margarita Aida Cruz García. (2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA</em>. Obtenido de ',
      link: '',
    },
    {
      referencia:
        'Mariela Torres, K. P. (s.f.). MÉTODOS DE RECOLECCIÓN DE DATOS PARA UNA INVESTIGACIÓN. <em>Boletín electrónico No. 03</em>. Facultad de Ingeniería, Universidad Rafael Landívar.',
      link: '',
    },
    {
      referencia:
        'Roberto Hernandez Sampieri, C. F. (2016). <em>Metodología de la Investigación</em>. Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Universidad Autónoma del estado de Hidalgo. (2018). Fuentes de información. Obtenido de Sistema de Universidad Virtual:',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
