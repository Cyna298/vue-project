import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(PrimeVue)
app.component('Dropdown',Dropdown)
app.component('InputText',InputText)
app.mount('#app');
//createApp(App).mount('#app')
