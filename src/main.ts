import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.ts'; // import the router we just created

const app = createApp(App);

app.use(router); // tell your app to use the router
app.mount('#app');