import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store';

const app= createApp(App).use(router);
app.config.globalProperties.axios=axios;
app.use(store);
app.mount('#app');
