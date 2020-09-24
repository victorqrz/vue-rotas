<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre o contato de id {{ id }}</h3>
    <router-link
      :to="`/contatos/${id}/editar`"
      class="btn btn-primary"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      }
  },
  beforeRouteUpdate(to, from, next) {
        this.id = to.params.id;
        next();
  }
}
</script>