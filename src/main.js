// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone,faRightToBracket,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// library.add(faPhone,faRightToBracket,faArrowRight);
library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
