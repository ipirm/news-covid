<template>
    <div>
        <MainSlider />
        <section class="page__content custom-container  custom-container--main">
            <LeftSidebar />
            <main class="page__middle">
                <NewsList :data="newsData" />
            </main>
            <aside class="page__aside">
                <VirusStatic />
                <RightSidebar />
            </aside>
        </section>
        <section>
            <div class="custom-container custom-container--main">
                <VideoSlider />
            </div>
        </section>
        <section>
            <div class="custom-container custom-container--main video-container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="video-container-title">
                            Watch it now:
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mt-4" v-for="(item, index) in 6" :key="index">
                        <VideoComponent />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import LeftSidebar from "~/components/global/LeftSidebar";
    import RightSidebar from "~/components/global/RightSidebar";
    import NewsList from "~/components/global/NewsList";
    import MainSlider from "~/components/pages/main/MainSlider";
    import VideoSlider from "~/components/pages/main/VideoSlider";
    import VideoComponent from "~/components/pages/main/VideoComponent";
    import VirusStatic from "~/components/global/VirusStatic";

    import {mapActions, mapState} from 'vuex';

    export default {
        components: {VirusStatic, VideoComponent, VideoSlider, NewsList, RightSidebar, MainSlider, LeftSidebar},
        async fetch({store}) {
            await store.dispatch('news/getPaginatedNews',{curPage: 1, perPage: 13});
        },
        head() {
            return {
                title: `${this.$t('MetaTitle')}`,
                meta: [
                    { name: 'description', content: `${this.$t('metaDescription')}` || '' },
                    { property: 'og:title', content: `${this.$t('MetaTitle')}` || '' } ,
                    { property: 'og:description', content: `${this.$t('metaDescription')}` || '' } ,
                    { property: 'og:image', content: '/images/main-page/slide1.png' || '' } ,
                    { property: 'og:url', content: `http://covid.az/${this.$route.fullPath}` || '' } ,
                    { property: 'twitter:card', content: '/images/main-page/slide1.png' || '' } ,
                    { name: 'keywords', content: `${this.$t('keywords')}` || '' },
                ]
            }
        },
        computed: {
            ...mapState('news', ['newsData'])
        }
    }
</script>

