import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

//import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router/routes.js'

let router = createRouter({ history: createWebHistory(), routes: routes });

const app = createApp(App)

//app.use(createPinia())
app.use(router)

app.mount('#application')
