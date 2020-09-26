import Vue from 'vue'
import VueRouter from 'vue-router'

import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Login from './views/login/Login.vue'

import EventBus from './event-bus'

const Home = () => import('./views/Home.vue');
const Contatos = () => import('./views/contatos/Contatos.vue');
const ContatosHome = () => import('./views/contatos/ContatosHome.vue');
const ContatoDetalhes = () => import('./views/contatos/ContatoDetalhes.vue');
const ContatoEditar = () => import('./views/contatos/ContatoEditar.vue');

Vue.use(VueRouter)

const extrairParametroId = route => ({
    id: +route.params.id
  });

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/' , component: Home},
    { path: '/login', component: Login},
    { 
      path: '/contatos',
      component: Contatos,
      props: (route) => {
        const busca = route.query.busca;
        return busca ? { busca } : {}
      },
      children: [
        { path: 
          ':id(\\d+)', //expressão regular para verificar se realmente é um Number
          component: ContatoDetalhes,
          name: 'contato',
          props:extrairParametroId 
        },
        
        { path: 
          ':id(\\d+)/editar',
          alias:':id(\\d+)/alterar',
          meta: {
            requerAutenticacao: true
          },
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extrairParametroId,
            'contato-detalhes': extrairParametroId
          }
        },
        
        { path: '', 
          component: ContatosHome,
          name: 'contatos'
        },

        {
          path: '*',
          component: Erro404Contatos
        }
          
      ],      
    },
    
    {
      //rota de erro a nível global
      path: '*',
      component: Erro404
    }
  ]
})

router.beforeEach((to, from, next) => {
  const estaAutenticado = EventBus.autenticado
  if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if (!estaAutenticado) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      })
      return
    }
  }
  next()
})

export default router;