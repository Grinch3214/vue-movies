import Vue from 'vue'
import Route from 'vue-router'
import App from './App.vue'
import store from './store'
import './plugins/bootstrap'

Vue.config.productionTip = false
Vue.use(Route)

const router = new Route({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: App
		}
	]
})

new Vue({
  store,
	router,
  render: h => h(App)
}).$mount('#app')
