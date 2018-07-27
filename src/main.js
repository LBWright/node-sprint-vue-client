import Vue from 'vue';
import App from './App.vue';

//create global filter
Vue.filter('snippet', value => {
  if (!value || typeof value != 'string') {
    return '';
  }
  value = value.slice(0, 50);
  return value;
});

new Vue({
  el: '#app',
  render: h => h(App)
});
