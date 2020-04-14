<template>
    <div>
        <!-- <Preloader :pageReady="pageReady" /> -->
        <div v-show="pageReady">
            <Header />
            <nuxt class="fill-page" />
            <Footer />
            <!-- <back-to-top right="50px" bottom="50px">
                <svg-icon name="btn-top" style="width: 25px;height: 25px"></svg-icon>
            </back-to-top> -->
        </div>
    </div>
</template>

<script>
    import Preloader from '~/components/global/Preloader';
    import Header from '~/components/global/Header';
    import Footer from '~/components/global/Footer';

    export default {
        components: {
            Preloader,
            Footer,
            Header
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


