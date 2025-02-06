<script setup>
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue';
</script>

<template>

    <Carousel />
    <main>
        <div>
            <h1 class="text-center pt-5">Algunos servicios</h1>
        </div>
        
        <section>
            <Card />
        </section>

    </main>
    
</template>


<style scoped>
main {
    background-color: #0f1629;
    
}
section{
    padding: 5vh;
}

h1 {
    color: white;
    font-family: "Orbitron";

}
</style>