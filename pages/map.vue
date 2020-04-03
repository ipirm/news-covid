<template>
    <div>
        <!--        map-type-id="terrain"-->
        <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="2"
                style="width: 100%; height: 700px"
        >
            <GmapMarker
                    :key="index"
                    v-for="(item, index) in countries"
                    :position="item.position"
                    :clickable="true"
                    :draggable="true"
                    @click="myMarker(item)"
            />
        </GmapMap>
        <div v-if="activeCountry">
            Название Страны: {{ this.activeCountry.country }}
            Случаев: {{ this.activeCountry.confirmed }}
            Вылечилось: {{ this.activeCountry.recovered }}
            Критическое состояние: {{ this.activeCountry.critical }}
            Умерло: {{ this.activeCountry.deaths }}
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
            return {
                activeCountry: null
            }
        },
        methods: {
            ...mapActions('virus', ['getVirus']),
            ...mapActions('virus', ['getCountries']),
            myMarker(item) {
                this.activeCountry = item;
            }
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
