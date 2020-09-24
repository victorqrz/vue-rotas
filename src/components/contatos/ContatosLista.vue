<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <ul class="list-group"  v-if="contatos.length > 0">
      <ContatosListaIten 
        class="list-group-iten"
        v-for="contato in contatos"
        :key="contato.id"
        :contato="contato"
      />
    </ul>

    <p v-else>Nenhum contato cadastrado</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaIten from './ContatosListaIten.vue'

export default {
  components: {
    ContatosListaIten
  },
  data() {
    return {
      contatos: [
        { id:1, nome:'Isaac Newton', email: 'isaac@email.com' },
        { id:2, nome:'Albert Einstein', email: 'einstein@email.com' },
        { id:3, nome:'Nikola Tesla', email: 'tesla@email.com' }
      ]
    }
  },
  methods: {
    voltar() {
      this.$router.back() 
    }
  }
}
</script>