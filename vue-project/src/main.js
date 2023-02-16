import { createApp } from 'vue'
import App from './App.vue'
import StoragePlugin from 'vue-web-storage'

//import './assets/main.css'

import {Col, Row, Button, showLoadingToast} from 'vant'
import 'vant/lib/index.css';

const app = createApp(App);
app.use(StoragePlugin, {
    prefix: 'vue_app_',
    drivers: ['session', 'local']
});

app.use(Col);
app.use(Row);
app.use(Button);
app.use(showLoadingToast);
app.mount('#app')