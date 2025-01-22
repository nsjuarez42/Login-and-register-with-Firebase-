<script setup>

const props = defineProps({
    placeholder:String,
    type:String,
    icon:String,
})
</script>

<template>
    <div v-if="type === 'submit'">
       <input :type="type" :value="placeholder"/>
    </div>
    <div v-else class="flex ">
        <div v-if="type === 'password'">
            <font-awesome-icon class="" :icon="['fas', 'lock']" />
        </div>
        <div v-if="type ==='mail'">
            <font-awesome-icon class="" :icon="['fas', 'envelopes-bulk']" />
        </div>
        <input :type="type" :placeholder="placeholder"/>
    </div>
  
</template>

