<template>
    <div>
        <MainSlider :data="slidesNews" />
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <RightSidebar :data="news"/>
                    </div>
                    <div class="col-lg-6">
                        <NewsList :data="news" />
                    </div>
                    <div class="col-lg-3">
                        <LeftSidebar :data="interestingNews"/>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <VideoSlider/>
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

    export default {
        components: {VideoSlider, NewsList, RightSidebar, MainSlider, LeftSidebar},
        created() {
            this.getNews();
            this.getInterestingNews();
            this.getSlidesgNews();
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('news', ['getNews']),
            ...mapActions('news', ['getSlidesgNews']),
            ...mapActions('news', ['getInterestingNews'])
        },
        computed: {
            ...mapState('news', ['news']),
            ...mapState('news', ['interestingNews']),
            ...mapState('news', ['slidesNews'])
        },
    }
</script>

