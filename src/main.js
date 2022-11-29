import { createApp } from 'vue'
import App from './App.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
const app = createApp(App);

app.use(PrimeVue);


app.component('DataTable', DataTable);
app.component('DataColumn', Column);
app.component('ProductDialog', Dialog);

app.mount('#app')