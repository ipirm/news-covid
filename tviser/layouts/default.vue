<template>
    <div>
            <Header/>
            <nuxt/>
            <Footer/>
    </div>
</template>

<script>
    import Header from "../components/global/Header";
    import Footer from "../components/global/Footer";
    import PageTransitioner from '../components/PageTransitioner'
    import Spinner from "../components/global/Spinner";

    export default {
        components: {Spinner, Footer, Header, PageTransitioner},
        data() {
            return {
                active: false
            }
        },
        mounted() {
            if (process.browser) {
                window.onNuxtReady((app) => {
                    this.active = !this.active;
                })
            }
        }
    }
</script>


