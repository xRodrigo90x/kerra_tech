<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  services: {
    type: Array,
    required: true
  }
});

const isOpen = ref(false);
const basePrice = 0;

const total = computed(() => {
  return props.services.reduce((acc, curr) => acc + curr.price, basePrice);
});
</script>

<template>
  <div class="card shadow-sm mb-4">
    <div 
      class="card-header bg-primary text-white d-flex justify-content-between align-items-center cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <span class="fw-medium">Total estimado:</span>
      <div class="d-flex align-items-center gap-2">
        <span class="h5 mb-0">${{ total.toLocaleString('es-CL') }}</span>
        <span class="fs-5">{{ isOpen ? '▲' : '▼' }}</span>
      </div>
    </div>

    <div v-if="isOpen" class="card-body">
      <div class="d-flex justify-content-between mb-3 pb-2 border-bottom">
        <span>Precio Base:</span>
        <span>${{ basePrice.toLocaleString('es-CL') }}</span>
      </div>
      
      <div v-if="services.length > 0" class="list-group">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{{ service.name }}</span>
          <span class="badge bg-success rounded-pill">
            ${{ service.price.toLocaleString('es-CL') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}

.card-header {
  transition: background-color 0.2s ease;
}

.card-header:hover {
  background-color: #0b5ed7 !important;
}
</style>