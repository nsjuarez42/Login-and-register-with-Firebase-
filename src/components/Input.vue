<script setup>

const props = defineProps({
    placeholder:String,
    type:String,
    icon:String,
})
</script>

<template>
    <div v-if="type === 'submit'">
       <input class="bg-sky-800 text-center  py-1 font-semibold text-white w-80" :type="type" :value="placeholder"/>
    </div>
    <div v-else class="flex ">
        <div v-if="type === 'password'">
            <font-awesome-icon class="bg-sky-950 text-white text-3xl p-2 px-2 w-3/5 text-center" :icon="['fas', 'lock']" />
        </div>
        <div v-if="type ==='mail'">
            <font-awesome-icon class="bg-sky-950 text-white text-3xl p-1 px-2 py-1/2 w-3/5 text-center" :icon="['fas', 'envelopes-bulk']" />
        </div>
        <input class="w-64 px-7 placeholder:text-sky-900 text-sky-900 focus:outline-none" :type="type" :placeholder="placeholder"/>
    </div>
  
</template>

