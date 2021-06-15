import { createApp } from "vue";
import App from "./App.vue";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Editor from "primevue/editor";

import GoogleAuth from "./config/google_oAuth";
const gauthOption = {
  clientId:
    "980962916670-fu32uvl82sj0sel3n4j5ffoa1jn9nqdk.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

const app = createApp(App);

app.use(GoogleAuth, gauthOption);
app.config.productionTip = false;

app.use(PrimeVue);
app.component("Editor", Editor);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.mount("#app");
//createApp(App).mount('#app')
