<template>
  <div>
    <div class="alert alert-danger">
      <h3 class="text-center">Erro 404</h3>
      <p class="text-danger">Página não encontrada</p>
      <button 
        class="btn btn-secondary mb-4 mt-4"
        @click="$router.back()"
      >
        Voltar
      </button>
    </div>
  </div>
</template>