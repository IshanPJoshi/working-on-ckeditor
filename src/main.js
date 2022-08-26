import { CKEditor } from '@ckeditor/ckeditor5-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
createApp(App).use(router).use(CKEditor).use(PrimeVue).mount('#app')
