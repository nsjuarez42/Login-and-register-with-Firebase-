<script setup>
import RedirectMessage from "../components/RedirectMessage.vue"
import Title from '../components/Title.vue'
import Form from '../components/Form.vue'


</script>

<template>
    <div class="bg-emerald-900 h-screen w-screen flex justify-center items-center">
    <div class="bg-neutral-300 flex-col justify-center items-center px-10 py-20">
        <Title :title="'INICIAR SESIÓN'"/>
        <Form :sendMessage="'Iniciar Sesión'" type="login"/>
        <RedirectMessage :location="'/register'" linkText="Regístrate" message="¿No tienes cuenta?" type="login"/>
    </div>
</div>
</template>