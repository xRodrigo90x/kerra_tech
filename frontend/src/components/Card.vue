<script setup>
import web from '@/assets/img/static-assets.svg'
import mobile from '@/assets/img/develop-app.svg'
import chatbot from '@/assets/img/chat-bot.svg'

</script>
<template>
    <div class="container mt-4">
        <div class="row">

            <div class="text-center col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-5 mb-sm-5">
                <h4 class="mb-xxl-0 mb-xl-0 mb-lg-0 mt-md-5 mt-sm-5">Desarrollo Web</h4>
                <p>Una plataforma full-stack para la creación y gestión de sitios web, con herramientas avanzadas y
                    optimización del rendimiento.</p>
                <img class="container__img mt-4" :src=web alt="desarrolo web">
            </div>

            <div class="text-center col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-5 mb-sm-5">
                <h4 class="mb-xxl-0 mb-xl-0 mb-lg-0 mt-md-5 mt-sm-5">Desarrollo de app</h4>
                <p>Una plataforma full-stack para la creación y gestión de sitios web, con herramientas avanzadas y
                    optimización del rendimiento.</p>
                <img class="container__img" :src=mobile alt="desarrolo web">
            </div>

            <div class="text-center col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-5 mb-sm-5">
                <h4 class="mb-xxl-0 mb-xl-0 mb-lg-0 mt-md-5 mt-sm-5">Chatbot impulsado por IA</h4>
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
    min-height: 80px;
}

</style>