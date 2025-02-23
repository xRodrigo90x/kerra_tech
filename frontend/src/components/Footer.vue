<script setup>


</script>

<template>
  <footer class="bg-primary text-white py-5">
    <div class="container">
      <div class="row g-4">
 
        <div class="col-md-4">
            <img class="img-fluid rounded" src="/logo-kerratech.png" alt="kerratech" width="100">
            <h3>Kerratech</h3>
          <p class="mt-4">Somos una empresa de tecnología que busca ayudar a las personas a mejorar su calidad de vida a través de la tecnología.</p>
          <h4 class="h5 mb-4">Síguenos</h4>
          <div class="d-flex gap-3">
            <a 
              href="https://instagram.com/kerra.tech" 
              class="text-white hover-celeste"
              target="_blank"
            >
              <i class="bi bi-instagram fs-3"></i>
              <span class="visually-hidden">Instagram</span>
            </a>
            
            <a 
              href="https://tiktok.com/kerra.tech" 
              class="text-white hover-celeste"
              target="_blank"
            >
              <i class="bi bi-tiktok fs-3"></i>
              <span class="visually-hidden">TikTok</span>
            </a>
            
            <a 
              href="https://linkedin.com/kerratech" 
              class="text-white hover-celeste"
              target="_blank"
            >
              <i class="bi bi-linkedin fs-3"></i>
              <span class="visually-hidden">LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="col-md-8">
          <form 
            class="contact-form"
          >
            <h4 class="h5 mb-4">Contáctanos</h4>
            
            <div class="row g-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control bg-white"
                  placeholder="Nombre completo"
                  required

                >
              </div>
              
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control bg-white"
                  placeholder="correo@ejemplo.com"
                  required

                >
              </div>
              
              <div class="col-12">
                <textarea
                  class="form-control bg-white"
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  required

                ></textarea>
              </div>
              
              <div class="col-12">
                <button 
                  type="submit" 
                  class="btn btn-celeste"
                >
                  <i class="bi bi-send me-2"></i>
                   Enviar Mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-primary {
  background-color: #0d6efd !important;
}

.hover-celeste {
  transition: color 0.3s ease;
}

.hover-celeste:hover {
  color: #7ec8e3 !important;
}

.btn-celeste {
  background-color: #7ec8e3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.btn-celeste:hover {
  background-color: #5ab0d1;
  transform: translateY(-2px);
}

.btn-celeste:disabled {
  background-color: #a3d5e6;
  opacity: 0.7;
}

.contact-form .form-control {
  border: 2px solid #dee2e6;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #7ec8e3;
  box-shadow: 0 0 0 0.25rem rgba(126, 200, 227, 0.25);
}

.contact-form textarea {
  resize: none;
}
</style>