<script setup>
const props = defineProps({
    message:String,
    linkText:String,
    location:String
})
</script>

<template>
    <div>
        <span>
            {{message}}
            <RouterLink :to="location">{{linkText}}</RouterLink>
        </span>
    </div>
</template>
    