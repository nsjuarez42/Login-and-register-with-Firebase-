import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { initializeApp } from "firebase/app";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLock,faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faLock,faEnvelopesBulk)
import.meta.env

const {VITE_apiKey,VITE_authDomain,VITE_projectId,VITE_storageBucket,VITE_messagingSenderId,VITE_appId} = import.meta.env
const firebaseConfig = {
    apiKey: VITE_apiKey,
    authDomain: VITE_authDomain,
    projectId: VITE_projectId,
    storageBucket: VITE_storageBucket,
    messagingSenderId: VITE_messagingSenderId,
    appId: VITE_appId
}

initializeApp(firebaseConfig)

createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.use(router)
.mount('#app')
