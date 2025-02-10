<script setup>
import { ref } from 'vue';
import CotizacionMenu from '@/components/CotizacionMenu.vue';
import CotizacionPrev from '@/components/CotizacionPrev.vue';

const selectedServices = ref([]);

const handleServiceUpdate = (services) => {
  selectedServices.value = services;
};
</script>

<template>
    <main class="container my-5">
      <div class="row g-4">
        <div class="col-md-6">
          <img 
            src="/kerratech.png" 
            alt="Descripción de la imagen"
            class="img-fluid rounded-3 shadow mb-5"
          >
          <div class="">
            <h2 class="h1 fw-bold mb-3">Descripción</h2>
            <span class="text-body-secundary">  <!-- texto con ia, se puede mejorar (? -->
                En KerraTech, creamos sitios web y e-commerce que reflejan tu marca con diseño atractivo, tecnología avanzada y planes flexibles.<br>

                ✅ Hosting confiable y dominio personalizado para una presencia profesional.<br>
                ✅ Seguridad SSL y correos corporativos para mayor confianza.<br>
                ✅ Diseño intuitivo que convierte visitantes en clientes.<br>
                ✅ Paquetes adaptables y precios sin sorpresas.<br>
                ✅ Soporte continuo para que tu web evolucione contigo.<br>

                📌 Haz crecer tu negocio hoy mismo. Contáctanos y recibe una propuesta 100% personalizada.<br>

                KerraTech: Innovación y funcionalidad para tu éxito en línea.<br>
            </span>
          </div>
        </div>  
        <div class="col-md-6">
          <div class="mb-5">
            <h2 class="h1 fw-bold mb-3">Cotizador Web</h2>
            <span class="text-body-secundary">
                Antes de cotizar, necesitamos conocer tu negocio. <br>
                Consulta las garantías del servicio antes de contratar.
            </span>
          </div>
          
          <div class="mb-4">
            <h3 class="h2 fw-bold mb-3">Servicios</h3>
            <CotizacionMenu 
              @update-service="handleServiceUpdate"
              class="bg-white p-4 rounded-3 shadow"
            />
          </div>
  
          <div>
            <h3 class="h2 fw-bold mb-3">Resumen</h3>
            <CotizacionPrev 
              :services="selectedServices"
              class="bg-white p-4 rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>

  </style>