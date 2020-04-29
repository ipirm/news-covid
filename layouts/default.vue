<template>
    <div class="content">
        <div v-show="!pageReady">
            <Spinner/>
        </div>
        <div v-show="pageReady">
            <Header/>
            <client-only>
                <div style="display: flex;justify-content: center;align-items: center" v-if="$mq !== 'mobile'">
                    <div style="width: 100%; height:150px">
                        <adsbygoogle/>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;align-items: center" v-else>
                    <div style="height:100px;width: 100%">
                        <adsbygoogle/>
                    </div>
                </div>
            </client-only>
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
