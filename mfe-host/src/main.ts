import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

 
const RemoteButton = defineAsyncComponent(() => import('mfePost/Button'));

const app = createApp(App)

app.component("RemoteButton", RemoteButton);

app.use(router)

app.mount('#app')
