import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'
import List from './List.vue'
import Top from './Top.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/list', component: List},
  {path: '/top/:id', name: 'top-link', component: Top},
  {path: '/contact', component: Contact}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('home', Home)
Vue.component('contact', Contact)
Vue.component('list', List)
Vue.component('top', Top)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
