<template>
    <a :href="localePath(`${to}`)" @click.prevent="$bus.goTo(`${to}`,$router,localePath)">
        <slot/>
    </a>
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
