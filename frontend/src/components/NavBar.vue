<script setup>
</script>

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../public/icono.png" alt="icono KerraTech" width="40" height="34" id="logo">
        Kerra.Tech()
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
nav {
  height: 10vh;
  /* background-color: #ffffff; */
  /* background-color: #284390; */
  /* background-color: #082153; */
  font-family: Roboto Condensed, serif;
  font-weight: 600;
  width: 100%;
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