import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import EditorPage from './components/EditorPage.vue'
import ShowPage from './components/ShowPage.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/editor', component: EditorPage },
    { path: '/show', component: ShowPage }
  ]
})

export default router

createApp(App).use(router).mount('#app')
const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')