<template>
    <div>
        <MainSlider/>
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <RightSidebar/>
                    </div>
                    <div class="col-lg-6">
                        <NewsList/>
                    </div>
                    <div class="col-lg-3">
                        <LeftSidebar/>
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
    </div>
</template>

<script>


    import MainSlider from "../components/pages/main-page/MainSlider";
    import LeftSidebar from "../components/pages/main-page/LeftSidebar";
    import RightSidebar from "../components/pages/main-page/RightSidebar";
    import NewsList from "../components/pages/main-page/NewsList";
    import VideoSlider from "../components/pages/main-page/VideoSlider";

    export default {
        components: {VideoSlider, NewsList, RightSidebar, MainSlider, LeftSidebar},
    }
</script>

