<script setup>
    import {ref, defineEmits} from "vue" //defineEmits -> props padre hijo en react

const emit = defineEmits(["update-service"]) // aqui paso update-service a CotizacionView

const services = ref({   //todos los servicios que se ofrecen agrupados segun la categoría, falta refactorizar para facilitar la creación de checkboxes y radios
  "Tipo": [
    { id:1, name:"Página informativa", price: 10000,status:false }, // faltaria agregar algún método para cambiar los valores dependiendo de otros seleccionados, ie si se escoge suban mis productos, el valor cambiara dependiendo de la cantidad de seccioens. 
    { id:2, name:"Landing Page", price: 10000, status:false },
    { id:3, name:"E-commerce", price: 10000, status:false },
  ],
  "Productos": [
    { id:4, name:"Yo subiré mis productos", price: 10000, status:false },
    { id:5, name:"Suban mis productos", price: 10000, status:false },
  ],
  "Servicios": [
    { id:6, name:"4 secciones", price: 10000, status:false },
    { id:7, name:"6 secciones", price: 10000, status:false },
    { id:8, name:"8 secciones", price: 10000, status:false },
  ],
  "Extras":[
    { id:9, name:"Sin servicios extra", price: 10000, status:false},
    { id:10, name:"Chatbots", price: 10000, status:false },
    { id:11, name:"Marketing digital", price: 10000, status:false},
  ],
  "Adicionals":[
    { id:12, name:"Sin modificaciones", price: 10000, status:false},
    { id:13, name:"Modificaciones futuras", price: 10000, status:false},
    { id:14, name:"Seguro",price: 10000, status:false},
    { id:15, name:"Copia de seguridad", price: 10000, status:false},
    { id:16, name:"Cotizador" ,price: 10000, status:false},
  ],
  "Tiempo":[
  { id:17, name:"1 día" ,price: 10000, status:false},
  { id:18, name:"3 días" ,price: 10000, status:false},
  { id:19, name:"7 días" ,price: 10000, status:false},
  ]
})

const selectedRadio = ref({}); // Objeto para radios por categoría
const selectedCheckboxes = ref([]); //

const toggleService = () => {
  const selectedServices = [];

  // todos los radios seleccionados de cada categoría
  const radioIds = Object.values(selectedRadio.value).filter(id => id !== undefined);
  radioIds.forEach(id => {
    const radioService = Object.values(services.value)
      .flat()
      .find(service => service.id === id);
    if (radioService) selectedServices.push(radioService);
  });

  // checkboxes
  selectedCheckboxes.value.forEach(id => {
    const checkboxService = Object.values(services.value)
      .flat()
      .find(service => service.id === id);
    if (checkboxService) selectedServices.push(checkboxService);
  });
  //aqui se emite hacia ajuera
  emit("update-service", selectedServices);
};
</script>

<template>
    <section class="service-selector">
  
      <div class="accordion" id="servicesAccordion">
        <div 
          v-for="(serviceGroup, categoryName) in services" 
          :key="categoryName" 
          class="accordion-item"
        >
          <h2 class="accordion-header" :id="`heading-${categoryName}`">
            <button 
              class="accordion-button" 
              type="button" 
              data-bs-toggle="collapse" 
              :data-bs-target="`#collapse-${categoryName}`" 
              aria-expanded="true" 
              :aria-controls="`collapse-${categoryName}`"
            >
              {{ categoryName }}
            </button>
          </h2>
          
          <div 
            :id="`collapse-${categoryName}`" 
            class="accordion-collapse collapse" 
            :aria-labelledby="`heading-${categoryName}`" 
            data-bs-parent="#servicesAccordion"
          >
            <div class="accordion-body">
              <div 
                v-for="service in serviceGroup" 
                :key="service.id" 
                class="form-check"
              >
                <!-- Checkboxes para servicios múltiples -->
                <template v-if="service.id >= 9 && service.id <= 16">
                  <input
                    type="checkbox"
                    :id="`service-${service.id}`"
                    :value="service.id"
                    v-model="selectedCheckboxes"
                    class="form-check-input"
                    @change="toggleService"
                  />
                  <label :for="`service-${service.id}`" class="form-check-label">
                    <span class="h6"> {{ service.name }} - ${{ service.price.toLocaleString() }} </span>
                  </label>
                </template>
  
                <!-- Radios para servicios únicos -->
                <template v-else>
                  <input
                    type="radio"
                    :id="`service-${service.id}`"
                    :value="service.id"
                    v-model="selectedRadio[categoryName]"
                    class="form-check-input"
                    @change="toggleService"
                  />
                  <label :for="`service-${service.id}`" class="form-check-label">
                    <span class="h6">{{ service.name }} - ${{ service.price.toLocaleString() }} </span>
                  </label>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
<style  scoped>
    
</style>