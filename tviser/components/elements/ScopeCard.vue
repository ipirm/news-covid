<template>
    <link-i18n :to="`/scope/${id}`"  class="scope-card">
        <div class="scope-card-header">
            <svg-icon name="work" style="width: 70px;height: 60px"/>
        </div>
        <div class="scope-card-body">
            <span>Web-design</span>
        </div>
    </link-i18n>
</template>

<script>
    export default {
        props: {
            id: Number,
        },
    }
</script>

<style scoped>

</style>
