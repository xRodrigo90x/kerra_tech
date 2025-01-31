<script setup>
</script>

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"><img id="logo" src="../../public/Sin título-4.png" alt="logo"><img
          src="../../public/Sin título-3.png" alt="textologo" width="30" height="24"
          class="d-inline-block align-text-top"></a>

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
  background-color: #ffffff;
  font-family: Roboto Condensed, serif;
  font-weight: 600;
  width: 100%;
}

img {
  width: 120px;
  height: 50px;
}

#logo {
  width: 50px;
  height: 40px;
  animation: rotacion 10s linear infinite;

}

@keyframes rotacion {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>