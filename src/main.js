import { createApp } from 'vue'
// import './style.css'
import './pico.min.css'
import router from './routes/index.js'
import App from './App.vue'
import Footer from './components/Footer.vue'

const app = createApp(App)
app.use(router)
app.component('Footer', Footer)
app.mount('#app')