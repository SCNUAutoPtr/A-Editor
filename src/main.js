import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import EditorPage from './components/EditorPage.vue'
import ShowPage from './components/ShowPage.vue'

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
