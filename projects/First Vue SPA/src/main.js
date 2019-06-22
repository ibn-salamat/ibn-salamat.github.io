import Vue from 'vue'
import App from './App.vue'
import Contacts from './views/Contacts.vue'
import About from './views/About.vue'
import Main from './views/Main.vue'

import VueRouter from  'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
	linkExactActiveClass: 'active',
	mode: 'history',
	routes: [
		{
			path: '/About',
			component: About
		},
		{
			path: '/Contacts',
			component: Contacts
		},
		{
			path: '/',
			component: Main
		}
	]
})

router.replace({ path: '*', redirect: '/' })
export default router

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
