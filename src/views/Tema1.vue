<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas estadísticas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas estadísticas ofrecen muy buenas opciones para la solución de problemas que pueden presentarse en cualquier empresa. A través de ellas se logra obtener información precisa de un objetivo específico establecido con fines de identificar un comportamiento, tendencia, preferencia, entre otros, de los clientes en cualquier estudio de mercado. Además, también son útiles para interpretar y controlar las variables en los diferentes procesos de una empresa, por ejemplo, para controlar la calidad. Las herramientas estadísticas tienen sus propias características, de tal manera que están diseñadas para representar diferentes tipos de datos, dependiendo del problema que se aborde. La utilización de herramientas estadísticas a través de gráficos constituye una importante herramienta para la interpretación de los datos, dado que permite una comprensión rápida y completa de la información al representar visualmente en forma conjunta los resultados más importantes.

    .row.justify-content-center.align-items-center.mb-5.background-img.mt-5.ajuste-recuadro       
      .col-lg-8.p-4
        p El origen de los datos empleados en el análisis depende de la disponibilidad de información que exista, la cual puede provenir de fuentes primarias o secundarias. La información cuantitativa vendría siendo, quizás, de mayor precisión, debido a que es medible y cuantificable. 

        p Las herramientas estadísticas deben ser identificadas con ciertos parámetros que las caracterizan; por ejemplo, deben tener código o número, título y cuerpo. 

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg').imgdimensioncaj3

    .row.mt-5
      p Los elementos generales de los gráficos estadísticos son:

    .tarjeta.tarjeta--azul.p-4.bgr1-tema1
      SlyderA(tipo="b")
        .row
          .col-md-8.mb-4.mb-md-0
            p #[b Código o número de gráfico:]
            p Permite identificar al gráfico o imagen estadística. Está representado por un elemento numérico. 
            p Ejemplo:
            p #[b #[u Título]]
            p Su ubicación es posterior al número de gráfico. Tiene como finalidad dar a conocer las variables y la naturaleza de los resultados, es decir, expresa el contenido del gráfico en forma clara, breve y ordenada. En términos generales, describe el contenido conceptual del gráfico. Debe indicar la fecha o periodo en el cual se obtuvo la información. En algunas ocasiones es necesario especificar la unidad de medida en la que se cuantificaron las cifras. Además, es importante incluir la ubicación geográfica a la que corresponde la información. En la construcción del título es recomendable dar respuesta a los siguientes interrogantes: ¿Dónde? ¿Qué? ¿Cómo? ¿Cuándo?

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-8.mb-4.mb-md-0
            p #[b Cuerpo del gráfico:]
            p Es la imagen que acompaña los datos que se están analizando. Se puede representar a través de conjuntos de líneas, figuras y barras, todas utilizadas en la representación de los datos. 

            p Ejemplo:

            ul.lista-ul.mb-4.lista-ul--color
              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b #[u Escala o eje de valores:]] representada por la línea recta segmentada en la cual se define una escala de medición correspondiente a los datos estadísticos del gráfico.

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b #[u Leyenda:]] describe la simbología empleada. Se pueden usar colores, densidades de color, sombreados o tipos de línea que permitan diferenciar conceptos de los valores estadísticos. De igual manera, se puede representar a través de rótulos. Generalmente, está precedida de una preposición.

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b #[u Eje de conceptos:]] expresa cada uno de los valores a los que se refieren los datos. 

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b #[u Pie de gráfico:]] representa la parte inferior del gráfico y puede expresar notas, llamadas y clases de fuente. Además, también se emplea para hacer aclaraciones particulares para una mejor interpretación. 
                

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

          
    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Selección de herramientas estadísticas

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg')

      .col-lg-8
        p.mt-3 La representación gráfica de los datos estadísticos puede mostrarse de diversas modalidades, de tal manera que pueden ser usados para diversos fines de consulta y análisis de la información. Sin embargo, en la presentación de reportes estadísticos, las opciones pueden reducirse de acuerdo con la necesidad que se tenga o con la facilidad de consulta para los usuarios. 
      
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-10
        p Existen diversos gráficos que facilitan el análisis de la información estadística, entre los cuales se tienen: gráfico de barras, gráfico de líneas, gráfico circular e histograma. 

        figure
          img(src='@/assets/curso/temas/tema1/img6.svg')
          figcaption.mt-3 Fuente: elaboración del experto

        p.mt-5 En la selección de herramientas estadísticas se pueden considerar los siguientes criterios: 
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-9.position-relative
        .avatar.justify-content-center.align-items-center.mb-5 
          figure
            img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img251
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img7.svg", alt="alt").img100
            .col
              p Los gráficos que incluyen columnas pueden ser recomendados para presentar información que implique tiempo. La diferencia con los de líneas es que son ideales para periodos cortos de tiempo.  

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img8.svg", alt="alt").img100
            .col
              p Los gráficos de barras horizontales representan algunas ventajas frente a los gráficos de barras verticales, debido a que son más fáciles de leer en los casos que tengan nombres largos. Los gráficos de barras facilitan el estudio de forma independiente en varias series de datos.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img9.svg", alt="alt").img100
            .col
              p Los gráficos rectangulares son utilizados para analizar la participación dada en porcentajes, de los elementos existentes respecto a un total.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100
            .col
              p Los gráficos de líneas son adecuados para comparar los datos en el tiempo. Generalmente, son usados cuando hay series de datos representados con muchos puntos. Son ideales para mostrar cambios en las tendencias.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100
            .col
              p Cuando la finalidad del estudio es obtener promedios, se recomienda el cálculo de la media, representada por una X. 

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100
            .col
              p Si la finalidad es revisar los números que más se repiten, se determina la moda, que puede ser unimodal, bimodal o multimodal.

        .crd.crd--avatarHorizontal2.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100
            .col
              p El diagrama de Pareto se recomienda cuando se busca determinar las causas que generan la mayor parte de los problemas de un proceso en una empresa.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Gráfico de barras

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-7
         .row.justify-content-center.align-items-center.mb-5
            .col-lg-2.col-xs-6
              figure
                img(src='@/assets/curso/temas/tema1/img15.svg').whith-azul

            .col-lg-10
              p.mt-3 Los gráficos de barras representan tantas barras como categorías tenga definida la variable, de tal manera que la altura de cada barra es proporcional a la frecuencia de cada clase. Estos gráficos también pueden utilizarse para describir variables numéricas discretas, por ejemplo: número de hijos, unidades, etc.

              p Se pueden tener en cuenta las siguientes recomendaciones en la construcción de este tipo de gráficos:
      
            ul.lista-ul.mb-4.lista-ul--color.mt-3
              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b El ancho utilizado en todas las barras debe ser uniforme.]

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b La longitud de cada barra deberá ser proporcional a la cantidad que representa.]

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b El espacio entre cada barra debe ser constante.]

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 #[b Las barras se pueden representar de forma vertical u horizontal.]


      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg')

    .row.mt-5
      p A continuación, se explicarán los gráficos de barras verticales y horizontales.

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Gráfico de barras verticales").bgr1-pasos-tema1
        .row.justify-content-center.align-items-center.mb-5.p-4 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p.mt-3 Es conocido como “gráfico de columnas”, en las cuales se representan los datos sobre ejes cartesianos: en el eje de las X se ubican los conceptos y en el eje de las Y, la escala de valores. Su principal función es comparar la magnitud de dos o más variables mediante barras.

      .py-3.py-md-4(titulo="Gráfico de barras horizontales").bgr1-pasos-tema1
        .row.justify-content-center.align-items-center.mb-5.p-4 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')

          .col-md-6
            p.mt-3 Es utilizado para representar valores discretos sobre una base horizontal, en la cual debe existir un espacio entre uno y otro. Es empleado, generalmente, cuando los textos de cada categoría son muy extensos. 

    .row.justify-content-center.align-items-center.mb-5.mt-5      
      .col-11
        h3 Partes de un gráfico de barras
        p El gráfico de barras se compone de las siguientes partes: 

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
        h3.text-center Ejes
        p.text-center Los gráficos de barras parten de la identificación de sus dos ejes. En el eje de las X se representan las categorías de los datos analizados a través de una o varias barras. En el eje de las Y se muestra la longitud o medida de la barra representada con base en la totalidad de los datos.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
        h3.text-center Títulos del eje
        p.text-center Para poder identificar las variables se debe asignar un título o nombre predeterminado, el cual se puede modificar en el gráfico de barras en Excel.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
        h3.text-center Título del gráfico
        p.text-center Está ubicado en la parte superior del gráfico de barras y representa la temática de análisis que se está mostrando. El título del gráfico debe ser descriptivo.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
        h3.text-center Etiquetas de datos
        p.text-center Las etiquetas de datos del gráfico de barras hacen referencia a las descripciones de los datos tomados para el estudio y se ubican en cada barra. Deben ser precisas e identificar claramente cada categoría.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
        h3.text-center Tabla de datos
        p.text-center Es la tabla sobre la cual se ha elaborado el gráfico de barras e incluye información estadística. Allí se definen las categorías y los respectivos valores.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
        h3.text-center Barras de error
        p.text-center Son utilizadas para representar la incertidumbre de un valor determinado, con base en sus variables.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
        h3.text-center Líneas de cuadrícula
        p.text-center Son las líneas ubicadas en el fondo de un gráfico, que se utilizan como referencia para comparar todos los valores establecidos. Además, las líneas de cuadrícula deben corresponder a los datos incluidos en el gráfico de barras.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')
        h3.text-center Leyenda
        p.text-center Es la descripción que permite identificar los diferentes elementos empleados en el gráfico de barras. Esto incluye la selección de los colores usados para mejorar la observación del gráfico. Excel es flexible en la activación de esta opción.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
        h3.text-center Línea de tendencia
        p.text-center Es la línea o curva que representa la media de los valores de un gráfico de barras. La línea de tendencia permite facilitar la observación en la comparación y, de esta manera, relacionar los datos observados.

    .row.justify-content-center.align-items-center.mb-5.mt-5      
      .col-10
        .row.justify-content-center.align-items-center.mb-5.mt-5      
          .col-lg-2.col-xs-6
            figure
              img(src="@/assets/curso/temas/tema1/img28.svg", alt="alt")
          .col-10
            p A continuación, se presenta un video, que sirve como orientación para la elaboración de los gráficos de barras.

    .row.mt-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Análisis de Pareto  

    .row.justify-content-center.align-items-center.mb-5.background-img2.mt-5.ajuste-recuadro         
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img29.svg').imgdimensioncaj4

      .col-lg-8
        p.mt-3 El gráfico de Pareto corresponde a un tipo de gráfico de barras verticales, en el cual se ordenan los datos por frecuencias y de manera descendente, según su prioridad. 

        p El análisis de Pareto es un gráfico ampliamente utilizado en el análisis de datos, específicamente cuando se busca encontrar las causas en donde hay que poner mayor atención para la solución de problemas. 

    .row.justify-content-center.align-items-center.mb-5.mt-5       
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg') 

    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-8.background-img.mt-5.p-4   
        p La regla 80-20 es reconocida como el #[b Principio de Pareto]. Se basa en afirmar que el 80 % de las situaciones son causadas generalmente por el 20 % de los factores. Este principio invita a generar mayor esfuerzo en analizar ese 20 % que podría ser más representativo para la solución de los problemas en los procesos de las empresas, como en la calidad, la producción, el mercadeo, etc. Esto implica centrar la atención en un número pequeño de factores que, en ocasiones, son de mayor relevancia.

    .row.justify-content-center.align-items-center.mb-5.mt-5       
      .col-lg-8
        p Los pasos para la realización son:

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4.bgr1-tema1
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.col-xs-8
                figure
                  img(src='@/assets/curso/temas/tema1/img31.svg', alt='')

              .col-lg-6.mb-4.mb-lg-0
                p Se selecciona el problema y se identifican sus variables.

            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.col-xs-8
                figure
                  img(src='@/assets/curso/temas/tema1/img32.svg', alt='')

              .col-lg-6.mb-4.mb-lg-0
                p Se investiga sobre las causas que generan el problema y, a su vez, se recolectan datos relacionados con las variables que se van a estudiar.

            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.col-xs-8
                figure
                  img(src='@/assets/curso/temas/tema1/img33.svg', alt='')

              .col-lg-6.mb-4.mb-lg-0
                p Se define la cantidad y la unidad de medida que se va a emplear.


            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.col-xs-8
                figure
                  img(src='@/assets/curso/temas/tema1/img34.svg', alt='')

              .col-lg-6.mb-4.mb-lg-0
                p Se ordenan los valores de mayor a menor, según la cantidad definida en el paso anterior.


            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Se calcula el porcentaje de cada factor, además del acumulado en cada ítem. Este se obtiene sumando el valor del porcentaje anterior con el valor del ítem actual y así sucesivamente. Ejemplo:        
          
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img35.svg', alt='')

            .row.justify-content-center.align-items-center.mb-5.mt-5.p-4(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Ahora se podrá construir el gráfico, en el cual se trazan dos líneas verticales y una horizontal. Las líneas verticales representan las columnas de los acumulados de la tabla. Ejemplo: en esta tabla en particular se observa que los materiales y medios son aproximadamente el 20 % que genera el 80 % del problema.

              .col-lg-6.col-xs-8
                figure
                  img(src='@/assets/curso/temas/tema1/img36.svg', alt='')

    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.4 Histogramas. Maestro de productos  

    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-10
        p El histograma es una herramienta estadística muy útil que permite resumir y analizar datos. Su naturaleza gráfica facilita la identificación e interpretación de pautas que, en algunos casos, son difíciles de comprender con simples tablas de números. Esta representación gráfica es también utilizada para observar y analizar la frecuencia en la que una variable puede tomar diferentes valores en un conjunto de datos. Los conceptos para tratar son:
            
    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img37.svg', alt='').whith-azul

      .col-lg-8
         ul.lista-ul.mb-4.lista-ul--color.mt-3
            li 
              i.fas.fa-angle-right.txt--orange
              p.mb-0 #[b recuencia:] corresponde al número de veces que puede producirse un suceso. 

            li 
              i.fas.fa-angle-right.txt--orange
              p.mb-0 #[b Variable:] es la característica cuantitativa de un suceso. Puede ser medida y representada por un valor numérico determinado, que estaría relacionado con una escala de medida.

    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-3
        p  #[b ¿Cuándo se utiliza el histograma? ]

        ul.lista-ul.mb-4.lista-ul--color
          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Para resumir a través de gráficos una variedad de información (población muy numerosa), resultado de una investigación de mercados.]  

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Para comparar los resultados generados de un proceso con sus especificaciones.] 

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Para identificar el número de productos que no cumplen con las condiciones específicas de calidad.]  

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Para divulgar los resultados al equipo de trabajo, a los coordinadores, a los supervisores, a los jefes, etc.] 

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Para colaborar en el proceso de toma de decisiones.] 

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img38.svg', alt='')

      .col-lg-3
        p  #[b ¿Cómo se utiliza?]

        p #[b En los casos en los que se utiliza esta herramienta, se recomienda tener en cuenta las siguientes recomendaciones para su diseño:]

        ul.lista-ul.mb-4.lista-ul--color
          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Evitar, en lo posible, el uso de barras que sean demasiado anchas que puedan ocultar algunos detalles importantes o, en caso contrario, tan estrechas que puedan generar distorsión de los datos.]  

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Usar, preferiblemente, números redondos que sean iguales para crear tamaños de barras.] 

          li 
            i.fas.fa-angle-right.txt--orange
            p.mb-0 #[b Utilizar colores y etiquetas en concordancia con el gráfico, de tal manera que se puedan identificar las relaciones más fácilmente.]  


    LineaTiempoD.color-acento-contenido
      .row(numero="1" titulo="Recoger los datos de X")
        .col-md-12.mb-4.mb-md-0

          p.text-small En este primer paso se reconocen los datos X que se van a analizar. Los datos deben ser representativos, es decir, no deben ser obsoletos o incompletos. 

          p.text-small #[u Ejemplo:]
          
          p.text-small Una empresa debe fabricar tapas con una longitud aproximada de 25±0,4 mm. Ahora, para revisar el número de piezas que presentan margen de tolerancia, se tomarán 30 muestras, como se ve en la siguiente tabla:    

          figure
            img(src='@/assets/curso/temas/tema1/img39.svg', alt='Texto que describa la imagen')


      .row(numero="2" titulo="Definir el rango")
        .col-md-12.mb-4.mb-md-0
          p.text-small Consiste en restar el valor máximo menos el mínimo.
          p.text-small Rango = Max - Min, es decir: 25,2 - 23,8 = 1,4

      .row(numero="3" titulo="Establecer las clases")
        .col-md-12.mb-4.mb-md-0
          p.text-small Corresponde a los intervalos en los que se deben dividir los valores de los datos. Se representa con la letra K.
          figure
            img(src='@/assets/curso/temas/tema1/img40.svg', alt='Texto que describa la imagen')
          p.text-small.mt-3 De acuerdo con la tabla anterior, deberían tomarse 6 clases, debido a que existen 30 muestras. Por lo tanto, K = 6

      .row(numero="4" titulo="Establecer la amplitud del intervalo de cada clase")
        .col-md-12.mb-4.mb-md-0
          p.text-small Se establece la amplitud del intervalo de cada clase identificado con la h. Todas deberán tener la misma amplitud. Para su cálculo, es necesario aplicar la fórmula: #[b h= R/K.] Remplazando tenemos que #[b h= 1,4/6 = 0,233.]

      .row(numero="5" titulo="Revisar el número de datos definido en cada clase")
        .col-md-12.mb-4.mb-md-0
          p.text-small Se revisa el número de datos definido en cada clase, es decir, la frecuencia de cada clase.

          figure
            img(src='@/assets/curso/temas/tema1/img41.svg', alt='Texto que describa la imagen')

      .row(numero="6" titulo="Representar gráficamente")
        .col-md-12.mb-4.mb-md-0
          p.text-small Representar gráficamente, con la ayuda de un programa para el desarrollo de gráficos, en el cual el eje de las X corresponde a las clases, es decir, la longitud, y el eje de las Y a las frecuencias, es decir, al número de tapas.
          p.text-small #[u Ejemplo:]

          figure
            img(src='@/assets/curso/temas/tema1/img42.svg', alt='Texto que describa la imagen')
         
    separador

    #t_1_5

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.5 Medidas de tendencia 

    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img43.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las medidas de tendencia son usadas para describir el comportamiento de un grupo de datos. Establecen el punto alrededor del cual se centran los datos obtenidos en un estudio. Además, las medidas de tendencia central sirven para indicar hacia dónde se inclinan o se agrupan generalmente los datos.


    .bg--img_03.mt-5
      .row.justify-content-center.align-items-center.mb-5  
        .col-lg-4
          p Las medidas de tendencia más utilizadas son: la media, la mediana y la moda.
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img44.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA").mt-3
            .row(titulo="La media")
              .col-12
                p.mb-0 La media, conocida como media aritmética, también es llamada “promedio” y se obtiene sumando todos los valores de los datos relacionados, que luego se deben dividir entre la cantidad de datos que existen. 

                p #[b Ventajas y desventajas:]

                ul.lista-ul.mb-4.lista-ul--color
                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 La media aritmética se expresa en las mismas unidades que la variable.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 En el cálculo se deben tener en cuenta todos los valores de la distribución. 

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Su principal desventaja es que puede verse afectada por los valores muy grandes o pequeños de la distribución.

            .row(titulo="La mediana")
              .col-12
                p.mb-0 La mediana en ocasiones es conocida como media posicional, debido a que queda exactamente en la mitad de un grupo de datos, luego de que estos han sido ordenados. Por lo tanto, la mitad (50%) de los datos estará por encima de la mediana y la otra mitad (50%) estará por debajo. La mediana también se interpreta como el valor intermedio cuando los valores de los datos se han ordenado.

                p #[b Ventajas y desventajas:]

                ul.lista-ul.mb-4.lista-ul--color
                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Es una medida de tendencia muy representativa en algunos casos.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Es sencilla de calcular.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Para el cálculo de la mediana, solo se requieren los valores centrales y no se ve afectada con valores extremos.

            .row(titulo="La moda")
              .col-12
                p.mb-0 La moda es el valor que más se repite o que ocurre con mayor frecuencia. Es posible que en un grupo de datos no exista moda o también que exista una moda (unimodal), dos modas (bimodal) o más de dos modas (multimodal).

                p #[u Ejemplos:]

                ul.lista-ul.mb-4.lista-ul--color
                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Se obtiene una muestra con los siguientes datos: 21, 25, 24, 24, 26 y 30. Mo = 24, se conoce como unimodal.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Se analiza una muestra con los siguientes datos: 21, 21, 20, 29, 25, 25, 27 y 40. Mo = 21 y 25, son bimodales.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Se establece una muestra con los siguientes datos: 21, 21, 24, 24, 25, 25, 30 y 31. Mo = 21, 24 y 25, se consideran multimodales.

                p #[b Ventajas y desventajas:]

                ul.lista-ul.mb-4.lista-ul--color
                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Su cálculo es fácil de hacer.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Es de fácil análisis.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    p.mb-0 Es la única medida que analiza la posición de los valores de tipo cuantitativo y cualitativo.

    .row.mt-3
      p Aprendiz, ha culminado satisfactoriamente el estudio de las temáticas del componente formativo. A continuación se presenta una síntesis donde recordará todo lo aprendido. También encontrará la actividad didáctica y los materiales complementarios para que fortalezca sus conocimientos en los temas vistos.                   

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
