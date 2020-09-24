import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos',
      component: Contatos,
      children: [
        { path: 
          ':id', 
          component: ContatoDetalhes,
          name: 'contato'
        },
        
        { path: 
          ':id/editar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        },
        
        { path: '', component: ContatosHome},
      ]
    },
    { path: '/' ,component: Home}
  ]
})