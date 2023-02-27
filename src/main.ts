import { createApp } from 'vue'
import router from './router'
import './tailwind.css'
import './styles/globals.scss'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'uikit/dist/css/uikit.min.css'
// import 'uikit/dist/js/uikit.min'

createApp(App).use(router).mount('#app')
