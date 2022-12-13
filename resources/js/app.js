require('./bootstrap');
import { createApp } from 'vue';
import routes from './route';
import MainApp from './components/mainComponent.vue'

let app=createApp(MainApp);
app.use(routes);
app.mount("#app");
