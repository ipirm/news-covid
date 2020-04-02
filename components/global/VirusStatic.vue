<template>
    <div class="virus-map">
        <div class="virus-map-title">
            Карта вируса online
        </div>
        <div class="virus-map-image">
            <img src="/images/main-page/map.png">
        </div>
        <div class="virus-map-content">
            <span>Пандемия коронавируса</span>
            <span class="mt-1">{{ Date.now() | moment("DD/MM/YYYY") }}</span>
        </div>
        <div class="virus-map-table" v-if="virusLocal && virusWorldWide">
            <table style="width:100%">
                <tr>
                    <td><b>Мир</b></td>
                    <td><b>AZE</b></td>
                </tr>
                <tr>
                    <td><b>Заболели</b></td>
                    <td><b>Заболели</b></td>
                </tr>
                <tr>
                    <td><span>{{ virusWorldWide[0].confirmed.split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('') }}</span></td>
                    <td><span>{{ virusLocal[0].confirmed }}</span></td>
                </tr>
                <tr>
                    <td><b>Вылечились</b></td>
                    <td><b>Вылечились</b></td>
                </tr>
                <tr>
                    <td><span style="color: #137611;">{{ virusWorldWide[0].recovered.split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('') }}</span></td>
                    <td><span style="color: #137611;">{{ virusLocal[0].recovered }}</span></td>
                </tr>
                <tr>
                    <td><b>Умерли</b></td>
                    <td><b>Умерли</b></td>
                </tr>
                <tr>
                    <td><span>{{ virusWorldWide[0].deaths }}</span></td>
                    <td><span>{{ virusLocal[0].deaths}}</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['virusWorldWide','virusLocal'],
        name: "VirusStatic"
    }
</script>

<style scoped>

</style>
