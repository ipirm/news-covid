<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
        </div>
        <div class="right-videos">
            <link-i18n to="/" class="right-videos-card main-news" v-for="index in 6" :key="index">
                <img src="/images/main-page/main1.png">
                <span>Fed's Powell says US economy may already be in a </span>
            </link-i18n>
        </div>

    </div>

</template>

<script>
    export default {
        name: "LeftSidebar"
    }
</script>

<style scoped>

</style>

