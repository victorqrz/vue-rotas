<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre {{ name }}</h3>
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
      name: this.$route.params.name
      }
  },
  beforeRouteUpdate(to, from, next) {
        this.id = to.params.id;
        this.name = to.params.name;
        next();
  }
}
</script>