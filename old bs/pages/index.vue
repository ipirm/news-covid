<template>
    <div>
        <MainSlider />
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <RightSidebar/>
                    </div>
                    <div class="col-lg-6">
                        <NewsList :data="news"/>
                    </div>
                    <div class="col-lg-3">
                        <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"  />
                        <LeftSidebar :data="news" style="height: 83% !important;" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <VideoSlider />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid video-container" style="width: 95%;">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="video-container-title">
                            Watch it now:
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mt-4" v-for="(item, index) in 6" :key="index">
                        <VideoComponent/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import MainSlider from "../components/pages/main-page/MainSlider";
    import LeftSidebar from "../components/pages/main-page/LeftSidebar";
    import RightSidebar from "../components/pages/main-page/RightSidebar";
    import NewsList from "../components/pages/main-page/NewsList";
    import VideoSlider from "../components/pages/main-page/VideoSlider";

    import {mapActions, mapState} from 'vuex'
    import VideoComponent from "../components/elements/VideoComponent";
    import VirusStatic from "../components/global/VirusStatic";

    export default {
        components: {VirusStatic, VideoComponent, VideoSlider, NewsList, RightSidebar, MainSlider, LeftSidebar},
        created() {
            this.getNews();
            this.getInterestingNews();
            this.getVirus();

        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('news', ['getNews', 'getInterestingNews']),
            ...mapActions('virus', ['getVirus'])
        },
        computed: {
            ...mapState('news', ['news', 'interestingNews', 'slidesNews']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal'])
        },
    }
</script>

