import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Foo from './components/Foo'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/hello', component: Hello },
    { path: '/foo', component: Foo }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
