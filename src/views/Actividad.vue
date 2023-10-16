<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/1.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Aplicación de herramientas estadísticas en la presentación de datos
        p.mb-4 Aprendiz, a continuación, encontrará una actividad didáctica para afianzar los conceptos y aprendizajes del componente formativo.

        p Esta es una actividad de “completar la frase”. Como su nombre lo indica, encontrará una frase incompleta a la cual le debe incluir la palabra faltante, de acuerdo con las definiciones vistas a lo largo del componente.

        p Debe completar la frase con los conceptos correspondientes. 

        p ¡Adelante y mucho ánimo!

        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
