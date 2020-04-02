<template>
    <div>
        <div v-if="!active">
            <Spinner/>
        </div>
        <div v-if="active">
            <Header/>
            <nuxt/>
            <Footer/>
            <back-to-top
                     right="50px"
                     bottom="50px"
                     visibleoffsetbottom="100px"
            >
                <svg-icon name="btn-top" style="width: 25px;height: 25px"></svg-icon>
            </back-to-top>
        </div>

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


