<script setup>
const props = defineProps({
    message:String,
    linkText:String,
    location:String
})
</script>

<template>
    <div>
        <span class="font-normal">
            {{message}}
            <RouterLink :to="location" class="text-cyan-600 underline decoration-solid m-2">{{linkText}}</RouterLink>
        </span>
    </div>
</template>
    