<script setup>
import Title from '../components/Title.vue'
import RedirectMessage from '../components/RedirectMessage.vue'

import Form from '../components/Form.vue'


</script>

<template>
    <div class="bg-cyan-950 h-screen w-screen flex justify-center items-center">  
        <div class="bg-neutral-300 flex-col justify-center items-center">
        <Title :title="'REGÍSTRATE'"/>
        <Form :sendMessage="'Registrarse'" type="register"/>
        <RedirectMessage :location="'/'" linkText="Iniciar sesión" message="¿Ya tienes cuenta?"/>
        </div>
    </div>
</template>