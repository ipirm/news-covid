<template>
    <div class="main-page">
        <div class="desktop">
            <MainSlider :data="slidesNews" />
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
                                {{ $t('watchAlso')}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 mt-4" v-for="item in videosData" :key="item.id">
                            <VideoComponent :data="item" v-lazy-load />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="mobile">
            <NewsSlider :data="slidesNews" />
            <CoronaInfoTabs />
            <NewsSlider :data="newsData" :showDescription="true" :title="'mobile.news.important'" />
            <MobileBanner :data="banner1" />
            <NewsSlider :data="videoNews" :title="'mobile.videos.interesting'" />
            <MobileBanner :data="banner2" />
            <NewsSlider :data="interestingNews" :title="'mobile.news.interesting'" />
            <VideoSlider :data="naturalVideos" :title="'How nature reacts with the virus?'" />
            <VideoSlider :data="videosData" />
        </div>
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

    // mobile stuff
    import NewsSlider from '~/components/pages/main/mobile/NewsSlider';
    import CoronaInfoTabs from '~/components/pages/main/mobile/CoronaInfoTabs';
    import MobileBanner from '~/components/pages/main/mobile/MobileBanner';

    import { mapState} from 'vuex';

    export default {
        components: {VirusStatic, VideoComponent, VideoSlider, NewsList, RightSidebar, MainSlider, LeftSidebar, NewsSlider, CoronaInfoTabs, MobileBanner},

        async fetch({store}) {
            await store.dispatch('news/getPaginatedNews',{curPage: 1, perPage: 13});
            await store.dispatch('news/getVideos');
            await store.dispatch('news/getNewsSlides');
            await store.dispatch('news/getNaturalVideos');
        },

        head() {
            return {
                title: `${this.$t('MetaTitle')}`,
                meta: [
                    { name: 'description', content: `${this.$t('metaDescription')}` || '' },
                    { property: 'og:title', content: `${this.$t('MetaTitle')}` || '' } ,
                    { property: 'og:description', content: `${this.$t('metaDescription')}` || '' } ,
                    { property: 'og:image', content: '/images/main-page/slide1.png' || '' } ,
                    { property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || '' } ,
                    { property: 'twitter:card', content: '/images/main-page/slide1.png' || '' } ,
                    { name: 'keywords', content: `${this.$t('keywords')}` || '' },
                ]
            }
        },

        computed: {
            ...mapState('news', ['newsData', 'videosData', 'slidesNews', 'videoNews', 'banners', 'interestingNews', 'naturalVideos']),

            banner1() {
                if (this.banners)
                    return this.banners.image_first
                return [];
            },

            banner2() {
                if (this.banners) {
                    return this.banners.image_second
                }
                return [];
            }
        }
    }
</script>

