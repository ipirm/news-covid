<template>
    <nuxt-link :href="localePath(`${to}`)" :to="localePath(`${to}`)">
        <slot/>
    </nuxt-link>
</template>

<script>
    export default {
        props:{
          to: String
        },
        name: "link-i18n"
    }
</script>

<style scoped>

</style>
