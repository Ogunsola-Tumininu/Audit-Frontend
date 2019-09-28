import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Toasted from 'vue-toasted';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Toasted, {
  duration: 3000
})

/* Registering roures*/
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});



Vue.filter('snippet', function(value){
  return(value.length > 250) ? value.slice(0,250) +'...': value;
});


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
