<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const opacidad = ref(false);

const actualizarOpacidad = () => {
  opacidad.value = window.scrollY > 60;
};

onMounted(() => {
  window.addEventListener('scroll', actualizarOpacidad);
});
onUnmounted(() => {
  window.removeEventListener('scroll', actualizarOpacidad);
});

</script>

<template>

  <nav class="navbar navbar-expand-lg" :class="{ opacity: opacidad }" @mouseover="opacidad = false"
  @mouseleave="opacidad = true">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img src="../../public/logo-kerratech.png" alt="icono KerraTech" width="36" height="30" id="logo">
        KerraTech
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <li class="nav-item">
            <RouterLink to="/quienesSomos" class="nav-link" href="#">¿Quienes somos?</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cotizacion" class="nav-link" aria-label="Cotización">Cotiza</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
nav {
  background-color: white;
  height: 10vh;
  font-family: Roboto Condensed, serif;
  font-weight: 600;
  width: 100%;
  transition: .5s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.collapse {
  z-index: 10;

}

.opacity {
  background-color: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(2px); 
}

.collapse.show .navbar-nav .nav-item {
  background-color: #000000b5;
  border-radius: 5px;
  margin: 5px 0;
  padding: 5px;
}

.collapse.show .navbar-nav .nav-item .nav-link {
  color: white !important;
}

.navbar-brand {
  font-family: "Audiowide", serif;
  background: rgb(1, 87, 189);
  background: linear-gradient(90deg, rgba(1, 87, 189, 1) 51%, rgba(95, 159, 255, 1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#logo {
  width: 50px;
  height: 40px;
  animation: agrandar 1.5s alternate-reverse infinite, girar alternate-reverse infinite 0.5;

}

#logo {
  width: 50px;
  height: 40px;
  animation: agrandarYgirar 1.8s alternate-reverse infinite;
}

@keyframes agrandarYgirar {
  0% {
    transform: scale(1.11) rotate(20deg);
  }

  50% {
    transform: scale(1.11) rotate(-20deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>