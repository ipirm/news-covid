<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
        </div>
        <div class="right-videos">
            <div class="right-videos-title">
                <span>Интересные видео: </span>
            </div>
            <link-i18n to="/" class="right-videos-card" v-for="index in 6" :key="index">
                <img src="/images/main-page/video1.png">
                <span>Fed's Powell says US economy may already be in a </span>
            </link-i18n>
        </div>
    </div>

</template>

<script>
    export default {
        name: "RightSidebar"
    }
</script>

<style scoped>

</style>
