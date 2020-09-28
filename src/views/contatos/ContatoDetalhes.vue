<template>
  <div v-if="contato">
    <h2 
      class="font-weight-heavy"
    >
      {{ contato.nome }}
    </h2>
    <p>Email: {{ contato.email }}</p>
    <p>{{ contato.bio }}</p>
    <button 
      class="btn btn-secondary mr-2"
      @click="$router.back()"
      >
        Voltar     
    </button>
    <router-link
      :to="`/contatos/${id}/editar`"
      class="btn btn-primary"
    >
      Editar
    </router-link>
  </div>
</template>

<script>

import EventBus from '@/event-bus'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      contato: undefined
    }
  },
  /* 
    a passagem de dados para o contato que será exibido pode ser feito com lifecycle hook created ou com guarda de rota
    created() {
    this.contato = EventBus.buscarContato(this.id)
  }, 
  */
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //vm.contato = EventBus.buscarContato(vm.id)
      vm.contato = EventBus.buscarContato(+to.params.id)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.contato = EventBus.buscarContato(+to.params.id)
    next()
  }
}
</script>