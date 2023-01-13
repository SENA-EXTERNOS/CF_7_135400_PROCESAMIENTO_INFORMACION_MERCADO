<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5.background-img.p-4           
      .col-lg-9
        p Estimado aprendiz, este componente se encuentra enfocado en presentar resultados del procesamiento de datos, de acuerdo con normas de archivo y control de documentación. Esta tarea implica representar los datos a través de herramientas estadísticas que facilitan el análisis de la información.  

        p Los resultados de una investigación de mercados pueden presentarse en dos opciones de formato: la tabulación y los gráficos. La tabulación consiste en la organización de los datos seleccionados mediante filas y columnas, a lo que se le denomina tabla estadística. Los gráficos consisten en la aplicación de puntos, líneas y figuras, que permiten demostrar magnitudes relacionadas a una escala de medición, con el fin de facilitar la interpretación de los datos estadísticos. Los gráficos estadísticos se estructuran, de acuerdo con la utilidad que representan, y cada uno de estos es específico en su utilidad; además, existen normas generales para presentarlos con criterio.

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg').imgdimensioncaj.imagen-decora

    p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.mb-5.mt-5 
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/introduccion/img2.svg').imgdimensioncaj.imagen-decora
      
      .col-lg-8
        p #[b A partir de este momento, puede comenzar a ampliar sus conocimientos, visualizando el video introductorio que se presenta a continuación. Este material se convertirá en un insumo fundamental para que analice la información recolectada de manera adecuada y precisa en los procesos de investigación de mercados que emprenda una empresa, en aras de fortalecer la comercialización de sus productos.]
    
    .row.mt-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
