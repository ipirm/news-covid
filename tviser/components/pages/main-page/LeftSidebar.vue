<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
        </div>
        <div class="right-videos">
            <div class="right-videos-title">
                <span>Интересные новости: </span>
            </div>
            <client-only>
                <vue-scroll :ops="ops">
                    <div class="scroll-news">
                        <link-i18n :to="`/news/${index}`" class="right-videos-card main-news" v-for="(item, index) in data" :key="index">
                            <img class="left-videos-img" :src="item.urlToImage">
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
        name: "LeftSidebar",
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
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

