<template>
    <div class="content">
        <div v-show="!pageReady">
            <Spinner/>
        </div>
        <div v-show="pageReady">
            <Header/>
            <div style="width: 100%; max-height:150px" v-if="$mq !== 'mobile'">
                <adsbygoogle/>
            </div>
            <div style="max-height:100px;width: 100%" v-else>
                <adsbygoogle/>
            </div>
            <nuxt class="full-fill"/>
            <Footer/>
            <BackToTop/>
        </div>
    </div>
</template>

<script>
    import Header from "~/components/global/header/Header";
    import Footer from "~/components/global/Footer";
    import Spinner from "~/components/global/Spinner";
    import BackToTop from "~/components/global/BackToTop";

    export default {
        components: {
            Spinner,
            Footer,
            Header,
            BackToTop
        },
        data() {
            return {
                pageReady: false
            }
        },

        mounted() {
            if (process.browser) {
                window.onNuxtReady((app) => {
                    this.pageReady = !this.pageReady;
                })
            }
        }
    }
</script>
