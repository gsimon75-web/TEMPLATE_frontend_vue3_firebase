import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"

import { initAuth, signInToBackend } from "@/auth";

//Vue.config.productionTip = false;

initAuth().then(signInToBackend).catch(error => {
	console.log(`Could not sign in with persisted data: ${error.message} (this is normal)`);
}).then(() => {
	createApp(App).use(store).use(router).mount("#app")
});

// vim: set sw=4 ts=4 indk= list noet:
