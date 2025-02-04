<script setup>
import web from '@/components/icons/web.svg'
import mobile from '@/components/icons/mobile.svg'
import chatbot from '@/components/icons/chatbot.svg'

</script>
<template>
    <div class="container mt-5">
        <div class="row">

            <div class="mt-3 col-4">
                <h4>Desarrollo Web</h4>
                <p>Una plataforma full-stack para la creación y gestión de sitios web, con herramientas avanzadas y
                    optimización del rendimiento.</p>
                <img class="container__img" :src=web alt="desarrolo web">
            </div>

            <div class="mt-3 col-4">
                <h4>Desarrollo de app</h4>
                <p>Una plataforma full-stack para la creación y gestión de sitios web, con herramientas avanzadas y
                    optimización del rendimiento.</p>
                <img class="container__img" :src=mobile alt="desarrolo web">
            </div>

            <div class="mt-3 col-4">
                <h4>Chatbot impulsado por IA</h4>
                <p>Chatbot inteligente para atención al cliente, que aprovecha el procesamiento del lenguaje natural.</p>
                <img class="container__img" :src=chatbot alt="desarrolo web">
            </div>

        </div>
    </div>
</template>

<style scoped>
.container__img {
    width: 50%;
}

h4 {
    font-family: "Orbitron";
    color: white;
}
p{
    color: #7f8ea3;
}
</style>