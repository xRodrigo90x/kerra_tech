<script setup>
const props = defineProps({
  services: {
    type: Array,
    default: () => []
  }
}); //tomando los servicios desde el menu
</script>
<template>
    <section>
      <div v-if="props.services.length === 0">
        <span class="h5"> Selecciona servicios para ver la previsualización </span>
      </div>
      <ul v-else class="selected-services">
        <li v-for="service in props.services" :key="service.id">
            <span class="h6"> {{ service.name }} - ${{ service.price.toLocaleString() }} </span> 
        </li>
      </ul>
      <div>
        <span class="h4 fw-bold">
            Total: ${{ props.services.reduce((acc, curr) => acc + curr.price, 0).toLocaleString() }} 
        </span> 
      </div>
    </section>
  </template>

<style scoped>

</style>