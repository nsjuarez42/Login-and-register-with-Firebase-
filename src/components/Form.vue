<script setup>
import Input from './Input.vue'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {Toaster,toast} from 'vue-sonner'

const props = defineProps({
    sendMessage:String,
    type:String
})

let mail = ""
let password = ""
//pass v model to inputs for now do it on ons ubmit with e target value

const onSubmit = (e)=>{
    mail = e.target[0].value
    password = e.target[1].value
    console.log(mail,password)
    if(props.type == "register"){
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,mail,password)
        .then(userCredential=>{
            const user = userCredential.user
            console.log(user)
            toast.success("Usuario registrado con exito")
        })
        .catch(error=>{
            const {code,message} = error
            console.log(message,code)
            toast.error("Error al registrarse")
        })

    }else if(props.type == "login"){
        const auth = getAuth()
        signInWithEmailAndPassword(auth,mail,password)
        .then(userCredential=>
        {
            const {user} = userCredential
            console.log(user)
            toast.success("Logged in successfully")
        })
        .catch(error=>{
            const {code,message} = error
            console.log(message,code)
            toast.error("Erro al hacer login")
        })
    }
}

</script>

<template>
    <Toaster/>
     <form @submit.prevent="onSubmit" prevn>
            <Input :type="'mail'" :placeholder="'Correo electrónico'"/>
            <Input :type="'password'" :placeholder="'Contraseña'"/>
            <Input :type="'submit'" :placeholder="sendMessage"/>
        </form>
</template>