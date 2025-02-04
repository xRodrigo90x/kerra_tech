<template>
    <!--poner carousel en data-bs-ride-->
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../public/carrusel1.webp" class="d-block" alt="gente hablando">
                <div class="carousel__text">
                    <h2 class="carousel__text--color1">Innovación TI</h2>
                    <h2 class="carousel__text--color2">Para el éxito de tu negocio</h2>
                    <p class="carousel__text--color3">Desarrollo tecnológico de vanguardia y estrategias digitales para
                        impulsar tu crecimiento en el mundo online.</p>
                </div>

            </div>
            <div class="carousel-item">
                <img src="../../public/carrusel2.webp" class="d-block" alt="gente trabajando">
                <div class="carousel__text">
                    <h2 class="carousel__text--color1">Desarrollo Web a la Medida</h2>
                    <h2 class="carousel__text--color2">Tu visión, nuestro código.</h2>
                    <p class="carousel__text--color3">Construimos sitios web modernos, rápidos y adaptados a tus
                        necesidades para que tu negocio destaque en línea.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../public/carrusel3.png" class="d-block " alt="mano con celular">
                <div class="carousel__text">
                    <h2 class="carousel__text--color1">Automatización y Optimización</h2>
                    <h2 class="carousel__text--color2">Menos esfuerzo, más resultados.</h2>
                    <p class="carousel__text--color3">Optimizamos tus procesos con soluciones tecnológicas innovadoras,
                        reduciendo costos y mejorando la eficiencia.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
#carouselExampleAutoplaying {
    position: relative;
    z-index: 1;
}

img {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    filter: brightness(0.5);
}

.carousel__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: "Orbitron";
    animation: textoInicio 1s;
}

.carousel__text--color1 {
    color: white;
}

.carousel__text--color2 {
    color: #bfdbfe;

}

.carousel__text--color3 {
    color: #cce0f7;
}

@keyframes textoInicio {
    0% {
        transform: translate(-50%, -20%);
        opacity: 0;
    }

    100% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
</style>