import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

axios({
    url:'http://123.207.32.32:8000/home/multidata',
    method:'get'
}).then(res=>{
    console.log(res)
})

axios({
    url:'http://123.207.32.32:8000/home/data',
    params:{
        type:'pop',
        page:1
    }
}).then(res=>{
    console.log(res)
})
