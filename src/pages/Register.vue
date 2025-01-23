<script setup>
import Title from '../components/Title.vue'
import RedirectMessage from '../components/RedirectMessage.vue'

import Form from '../components/Form.vue'


</script>

<template>
    <div class="bg-cyan-950 h-screen w-screen flex justify-center items-center">  
        <div class="bg-neutral-300 flex flex-col justify-around items-center px-10 py-20 h-3/4">
        <Title :title="'REGÍSTRATE'"/>
        <Form :sendMessage="'REGISTRARSE'" type="register"/>
        <RedirectMessage :location="'/'" linkText="Iniciar sesión" message="¿Ya tienes cuenta?"/>
        </div>
    </div>
</template>