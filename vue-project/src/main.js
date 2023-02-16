import { createApp } from 'vue'
import App from './App.vue'

//import './assets/main.css'

import {Col, Row, Button, showLoadingToast, Field, CellGroup} from 'vant'
import 'vant/lib/index.css';

const app = createApp(App);
/*
app.use(StoragePlugin, {
    prefix: 'vue_app_',
    drivers: ['session', 'local']
});
*/

app.use(Col);
app.use(Row);
app.use(Button);
app.use(showLoadingToast);
app.use(Field);
app.use(CellGroup);
app.mount('#app')