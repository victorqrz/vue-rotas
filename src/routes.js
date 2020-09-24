import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/' ,component: Home},
    { 
      path: '/contatos',
      component: Contatos,
      name: 'contatos',
      alias: ['meus-contatos', 'lista-de-contatos'],//alias são caminhos alternativos, a rota pode ser acessada por qualquer um dos 3 paths
      children: [
        { path: 
          ':id', 
          component: ContatoDetalhes,
          name: 'contato'
        },
        
        { path: 
          ':id/editar',
          alias:':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        },
        
        { path: '', 
          component: ContatosHome,
        },
          
      ],      
    },
    
    {
      //rota de erro específica para contatos
      path: '/contatos*',
      component: Erro404Contatos
    },
    
    {
      //rota de erro a nível global
      path: '*',
      component: Erro404
    }
  ]
})