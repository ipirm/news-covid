<template>
    <div>
        <MainSlider />
        <section class="main-page__content custom-container">
            <LeftSidebar />
            <main class="main-page__main">
                <NewsList :data="newsData" />
            </main>
            <aside class="main-page__aside">
                <VirusStatic />
                <RightSidebar />
            </aside>
        </section>
        <section>
            <div class="custom-container">
                <VideoSlider />
            </div>
        </section>
        <section>
            <div class="custom-container video-container" style="width: 95%;">
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

        created() {
            this.getPaginatedNews({curPage: 1, perPage: 13});
        },

        data() {
            return {}
        },

        methods: {
            ...mapActions('news', ['getPaginatedNews'])
        },

        computed: {
            ...mapState('news', ['newsData'])
        }
    }
</script>

