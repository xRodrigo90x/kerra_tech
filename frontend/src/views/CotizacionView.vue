<script setup>
import { ref, computed } from 'vue'; // Añadir computed
import CotizacionMenu from '@/components/CotizacionMenu.vue';
import CotizacionPrev from '@/components/CotizacionPrev.vue';

const selectedServices = ref({}); 

const flatServices = computed(() => {
  const services = [];
  for (const category in selectedServices.value) {
    for (const subcat in selectedServices.value[category]) {
      for (const subsubcat in selectedServices.value[category][subcat]) {
        services.push(...selectedServices.value[category][subcat][subsubcat]);
      }
    }
  }
  return services;
});

const handleUpdate = (services) => {
  selectedServices.value = services;
};
</script>

<template>
    <main class="container my-5">
      <div class="row g-4">
        <div class="col-lg-6"> 
          <img 
            src="/kerratech.png" 
            alt="Logo KerraTech"
            class="img-fluid rounded-3 shadow mb-4"
          >
          <div class="mb-5">
            <h1 class="display-5 fw-bold mb-4">Descripción</h1> 
            <div class="text-body-secondary fs-5 lh-lg">
              <p>
                En KerraTech, creamos sitios web y e-commerce que reflejan tu marca con diseño atractivo, 
                tecnología avanzada y planes flexibles.
              </p>
              
              <ul class="list-unstyled"> 
                <li class="mb-2">✅ Hosting confiable y dominio personalizado</li>
                <li class="mb-2">✅ Seguridad SSL y correos corporativos</li>
                <li class="mb-2">✅ Diseño intuitivo conversional</li>
                <li class="mb-2">✅ Paquetes adaptables sin sorpresas</li>
                <li class="mb-2">✅ Soporte técnico continuo</li>
              </ul>
              
              <p class="fw-semibold">
                📌 Haz crecer tu negocio hoy mismo. Contáctanos para una propuesta 100% personalizada.
              </p>
            </div>
          </div>
        </div>  
        
        <div class="col-lg-6">
          <div class="sticky-top pt-3"> 
            <div class="mb-5">
              <h1 class="display-5 fw-bold mb-4">Cotizador Web</h1> 
              <p class="text-body-secondary fs-5">
                Selecciona los servicios necesarios para tu proyecto y obtén un presupuesto instantáneo.
              </p>
            </div>
            
            <div class="vstack gap-4"> 
              <CotizacionMenu 
                @update="handleUpdate" 
                class="bg-white p-4 rounded-3 shadow"
              />
              
              <CotizacionPrev 
                :services="flatServices" 
                class="bg-white p-4 rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<style scoped>
.sticky-top {
  top: 2rem; 
}

.list-unstyled li::before {
  content: '•';
  color: var(--bs-primary);
  margin-right: 0.5rem;
}

.img-fluid {
  max-height: 400px;
  object-fit: contain;
}
</style>