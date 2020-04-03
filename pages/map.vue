<template>
    <div>
        <div v-for="(item,index) in countries" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script>

    import LeftSidebar from "../components/pages/main-page/LeftSidebar";
    import NewsList from "../components/pages/main-page/NewsList";
    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../components/global/VirusStatic";

    export default {
        components: {VirusStatic, NewsList, LeftSidebar},
        created() {
            this.getVirus();
            this.getCountries();

        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('virus', ['getVirus']),
            ...mapActions('virus', ['getCountries']),

        },
        computed: {
            ...mapState('virus', ['virusWorldWide']),
            ...mapState('virus', ['virusLocal']),
            ...mapState('virus', ['countries'])
        },
    }
</script>

<style scoped>

</style>
