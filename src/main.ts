import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Mount once the first route has resolved, so the header can find the page sections on mount.
router.isReady().then(() => app.mount('#app'))
