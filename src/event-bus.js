import Vue from 'vue';

export default new Vue({
  data: {
    autenticado: false,
    contatos: [
      { id:1, 
        nome:'Isaac Newton', 
        email: 'isaac@email.com',
        bio: 'Foi um matemático, físico, astrônomo, teólogo e autor inglês que é amplamente reconhecido como um dos cientistas mais influentes de todos os tempos e uma figura-chave na revolução científica, lançando bases para a mecânica clássica e o cálculo.'
      },
      { id:2, 
        nome:'Albert Einstein', 
        email: 'einstein@email.com',
        bio: 'Foi um físico teórico nascido na Alemanha que desenvolveu a teoria da relatividade, um dos dois pilares da física moderna.'
      },
      { id:3, 
        nome:'Nikola Tesla', 
        email: 'tesla@email.com',
        bio: 'Foi um inventor sérvio-americano, engenheiro elétrico, engenheiro mecânico e futurista mais conhecido por suas contribuições para o design da corrente alternada moderna.' 
      }
    ]
  },
  created() {
    this.$on('autenticar', (autenticado) =>{
      this.autenticado = autenticado
    })
  },
  methods: {
    buscarContato(id) {
      return Object.assign({} , this.contatos.find(c =>  c.id === id ))
    },
    editarContato(contato) {
      const index = this.contatos.findIndex(c =>  c.id === contato.id)
      this.contatos.splice(index, 1, contato)
    }
  }
})