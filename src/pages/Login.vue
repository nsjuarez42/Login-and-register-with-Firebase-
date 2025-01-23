<script setup>
import RedirectMessage from "../components/RedirectMessage.vue"
import Title from '../components/Title.vue'
import Form from '../components/Form.vue'


</script>

<template>
    <div class="bg-emerald-900 h-screen w-screen flex justify-center items-center">
    <div class="bg-neutral-300 flex flex-col justify-around items-center px-10 py-20 h-3/4">
        <Title :title="'INICIAR SESIÓN'"/>
        <Form :sendMessage="'INICIAR SESIÓN'" type="login"/>
        <RedirectMessage :location="'/register'" linkText="Regístrate" message="¿No tienes cuenta?" type="login"/>
    </div>
</div>
</template>