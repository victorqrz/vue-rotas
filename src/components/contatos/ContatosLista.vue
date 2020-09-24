<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <div class="form-group">
      <input 
        type="search" 
        class="form-control"
        placeholder="Buscar contatos"
        @keyup.enter="buscar"
        :value="this.$route.query.busca"
      >
    </div>

    <hr/>

    <ul class="list-group" v-if="contatosFiltrados.length > 0">
      <ContatosListaIten 
        class="list-group-iten"
        v-for="contato in contatosFiltrados"
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
  computed: {
    contatosFiltrados() {
      const busca = this.$route.query.busca;
      return ! busca ? this.contatos : this.contatos.filter(c => 
          c.nome.toLowerCase()
          .includes(busca.toLowerCase()))
      
    }
  },   
  methods: {
    voltar() {
      this.$router.back() 
    },
    buscar(event) {
      this.$router.push({
        query: {
          busca: event.target.value
        }
      })
    }
  }
}
</script>