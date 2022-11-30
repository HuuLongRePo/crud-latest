import { createApp } from 'vue'

import App from './App.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ConfirmDialog from 'primevue/confirmdialog';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'                             //primeflex


const app = createApp(App);
import PrimeVue from 'primevue/config';
app.use(PrimeVue);
import router from './router'
app.use(router);
import ConfirmationService from 'primevue/confirmationservice';
app.use(ConfirmationService);


app.component('DataTable', DataTable);
app.component('AppButton', Button);
app.component('DataColumn', Column);
app.component('ProductDialog', Dialog);
app.component('InputText', InputText);
app.component('AppTextarea', Textarea);
app.component('ConfirmDialog', ConfirmDialog);

app.mount('#app')
