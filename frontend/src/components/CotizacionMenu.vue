<script setup>
import { reactive, onMounted } from 'vue';
const emit = defineEmits(['update', 'export']);



const serviceStructure = reactive({
  categories: [
    {
      id: 'desarrollo',
      name: 'Desarrollo de Software a Medida',
      subcategories: [
        {
          id: 'erp-crm',
          name: 'Sistemas ERP y CRM',
          subsubcategories: [
            {
              id: 'erp',
              name: 'ERP Empresarial',
              services: [
                { 
                  id: 'erp1', 
                  name: 'ERP Básico', 
                  price: 2500000,
                  tooltip: 'Gestión de inventario, compras y ventas básicas'
                },
                { 
                  id: 'erp2', 
                  name: 'ERP Avanzado', 
                  price: 4500000,
                  tooltip: 'Incluye módulos de BI y movilidad empresarial'
                }
              ]
            },
            {
              id: 'crm',
              name: 'Soluciones CRM',
              services: [
                { 
                  id: 'crm1', 
                  name: 'CRM Básico', 
                  price: 1200000,
                  tooltip: 'Gestión de clientes y pipeline de ventas'
                },
                { 
                  id: 'crm2', 
                  name: 'CRM Empresarial', 
                  price: 2800000,
                  tooltip: 'Automatización de marketing y analítica avanzada'
                }
              ]
            }
          ]
        },
        {
          id: 'automatizacion',
          name: 'Automatización de Procesos',
          subsubcategories: [
            {
              id: 'rpa',
              name: 'RPA (Automatización Robótica)',
              services: [
                { 
                  id: 'rpa1', 
                  name: 'Automatización Básica', 
                  price: 850000,
                  tooltip: 'Automatización de hasta 5 procesos repetitivos'
                },
                { 
                  id: 'rpa2', 
                  name: 'Flujos Inteligentes', 
                  price: 1500000,
                  tooltip: 'Integración con IA y sistemas legacy'
                }
              ]
            }
          ]
        },
        {
          id: 'ecommerce',
          name: 'Plataformas E-commerce',
          subsubcategories: [
            {
              id: 'tiendas',
              name: 'Desarrollo de Tiendas',
              services: [
                { 
                  id: 'eco1', 
                  name: 'Marketplace B2B', 
                  price: 3200000,
                  tooltip: 'Plataforma multi-vendedor con gestión de pedidos'
                },
                { 
                  id: 'eco2', 
                  name: 'Tienda Personalizada', 
                  price: 1800000,
                  tooltip: 'Diseño responsive y carrito inteligente'
                }
              ]
            }
          ]
        },
          {
            id: 'web',
          name: 'Desarrollo Web',
          subsubcategories: [
            {
              id: 'sitios',
              name: 'Sitios Web',
              services: [
                { 
                  id: 'web1', 
                  name: 'Web Básica', 
                  price: 850000,
                  tooltip: 'Diseño responsive y SEO básico'
                },
                { 
                  id: 'web2', 
                  name: 'Web Avanzada', 
                  price: 1500000,
                  tooltip: 'Incluye integración con redes sociales y CMS'
                }
              ]
            }
          ]
          }
      ]
    },
    {
      id: 'transformacion',
      name: 'Asesoría en Transformación Digital',
      subcategories: [
        {
          id: 'diagnostico',
          name: 'Diagnóstico Estratégico',
          subsubcategories: [
            {
              id: 'auditoria',
              name: 'Auditoría Tecnológica',
              services: [
                { 
                  id: 'audit1', 
                  name: 'Evaluación Completa', 
                  price: 750000,
                  tooltip: 'Análisis de infraestructura y procesos actuales'
                }
              ]
            }
          ]
        },
        {
          id: 'modernizacion',
          name: 'Modernización Operacional',
          subsubcategories: [
            {
              id: 'cloud',
              name: 'Migración a Cloud',
              services: [
                { 
                  id: 'cloud1', 
                  name: 'Estrategia Cloud', 
                  price: 950000,
                  tooltip: 'Plan de migración y arquitectura recomendada'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ia',
      name: 'Inteligencia Artificial',
      subcategories: [
        {
          id: 'chatbots',
          name: 'Chatbots Inteligentes',
          subsubcategories: [
            {
              id: 'asistentes',
              name: 'Asistentes Virtuales',
              services: [
                { 
                  id: 'chat1', 
                  name: 'Chatbot Básico', 
                  price: 450000,
                  tooltip: 'Flujos conversacionales predefinidos'
                },
                { 
                  id: 'chat2', 
                  name: 'Chatbot AI', 
                  price: 1200000,
                  tooltip: 'Procesamiento de lenguaje natural (NLP)'
                }
              ]
            }
          ]
        },
        {
          id: 'vision',
          name: 'Visión Computacional',
          subsubcategories: [
            {
              id: 'imagenes',
              name: 'Análisis de Imágenes',
              services: [
                { 
                  id: 'vis1', 
                  name: 'Reconocimiento', 
                  price: 950000,
                  tooltip: 'Detección de objetos y patrones visuales'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'datos',
      name: 'Ciencia de Datos',
      subcategories: [
        {
          id: 'analitica',
          name: 'Analítica Avanzada',
          subsubcategories: [
            {
              id: 'modelado',
              name: 'Modelos Predictivos',
              services: [
                { 
                  id: 'model1', 
                  name: 'Modelo Básico', 
                  price: 850000,
                  tooltip: 'Predicciones basadas en datos históricos'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

const selectedServices = reactive({});
const openSections = reactive({});

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

const toggleSection = (sectionPath) => {
  openSections[sectionPath] = !openSections[sectionPath];
};

const handleSelection = (servicePath, service) => {
  const [category, subcat, subsubcat] = servicePath.split('-');
  
  if (!selectedServices[category]) selectedServices[category] = {};
  if (!selectedServices[category][subcat]) selectedServices[category][subcat] = {};
  if (!selectedServices[category][subcat][subsubcat]) selectedServices[category][subcat][subsubcat] = [];

  const index = selectedServices[category][subcat][subsubcat].findIndex(s => s.id === service.id);
  if (index > -1) {
    selectedServices[category][subcat][subsubcat].splice(index, 1);
  } else {
    selectedServices[category][subcat][subsubcat].push(service);
  }
  
  emit('update', selectedServices);
};

const handleExport = (type) => {
  emit('export', { type, data: selectedServices });
};
</script>

<template>
  <div class="container-fluid p-4">
    <div class="d-flex gap-2 mb-4">
      <button 
        class="btn btn-primary"
        @click="handleExport('email')"
        data-bs-toggle="tooltip"
        data-bs-title="Enviar cotización por correo"
      >
        <i class="bi bi-envelope"></i> Enviar
      </button>
      
      <div class="dropdown">
        <button 
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-title="Exportar en diferentes formatos"
        >
          <i class="bi bi-download"></i> Exportar
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" @click="handleExport('pdf')">
              PDF
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="handleExport('csv')">
              CSV
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="accordion" id="servicesAccordion">
      <div 
        v-for="category in serviceStructure.categories" 
        :key="category.id"
        class="accordion-item"
      >
        <h2 class="accordion-header">
          <button 
            class="accordion-button" 
            type="button"
            @click="toggleSection(category.id)"
            :class="{ 'collapsed': !openSections[category.id] }"
          >
            {{ category.name }}
          </button>
        </h2>
        
        <div 
          class="accordion-collapse collapse"
          :class="{ 'show': openSections[category.id] }"
        >
          <div class="accordion-body">
            <div 
              v-for="subcategory in category.subcategories" 
              :key="subcategory.id"
              class="mb-4"
            >
              <h4 class="mb-3 text-primary">{{ subcategory.name }}</h4>
              
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div 
                  v-for="subsubcategory in subcategory.subsubcategories" 
                  :key="subsubcategory.id"
                  class="col"
                >
                  <div class="card h-100 shadow-sm border-primary">
                    <div class="card-header bg-primary text-white">
                      <h5 class="card-title mb-0">
                        {{ subsubcategory.name }}
                      </h5>
                    </div>
                    
                    <div class="card-body">
                      <div 
                        v-for="service in subsubcategory.services" 
                        :key="service.id"
                        class="form-check mb-3"
                      >
                        <input 
                          type="checkbox"
                          class="form-check-input"
                          :id="`service-${service.id}`"
                          :checked="selectedServices[category.id]?.[subcategory.id]?.[subsubcategory.id]?.some(s => s.id === service.id)"
                          @change="handleSelection(`${category.id}-${subcategory.id}-${subsubcategory.id}`, service)"
                        >
                        <label 
                          :for="`service-${service.id}`" 
                          class="form-check-label d-flex justify-content-between align-items-center"
                          data-bs-toggle="tooltip"
                          :data-bs-title="service.tooltip"
                        >
                          <span>{{ service.name }}</span>
                          <span class="badge bg-success rounded-pill">
                            ${{ service.price.toLocaleString('es-CL') }}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tooltip-inner {
  max-width: 300px;
  text-align: left;
}
</style>