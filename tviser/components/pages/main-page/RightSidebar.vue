<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
        </div>
        <div class="right-videos">
            <div class="right-videos-title">
                <span>Интересные видео: </span>
            </div>
            <client-only>
                <vue-scroll :ops="ops">
                    <div class="scroll-news">
                        <link-i18n to="/" class="right-videos-card" v-for="(item, index) in data" :key="index">
                            <img class="right-videos-img" :src="item.urlToImage">
                            <span>{{ item.title }}</span>
                        </link-i18n>
                    </div>
                </vue-scroll>
            </client-only>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        name: "RightSidebar",
        data() {
            return {
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {},
                    bar: {
                        background: '#4c4c4c',
                        // #120888
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
