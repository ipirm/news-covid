<template>
    <div class="virus-map">
        <div class="virus-map-title">
            {{ $t('mapOnline')}}
        </div>
        <div class="virus-map-image">
            <img src="/images/main-page/map.png">
        </div>
        <div class="virus-map-content">
            <span>{{$t('pandemiaOfVirus') }}</span>
            <span class="mt-1">{{ Date.now() | moment("DD/MM/YYYY") }}</span>
        </div>
        <div class="virus-map-table" v-if="virusLocal && virusWorldWide">
            <table style="width:100%">
                <tr>
                    <td><b>{{ $t('world')}}</b></td>
                    <td><b>{{ $t('aze')}}</b></td>
                </tr>
                <tr>
                    <td><b>{{ $t('hospitalized')}}</b></td>
                    <td><b>{{ $t('hospitalized')}}</b></td>
                </tr>
                <tr>
                    <td><span>{{ virusWorldWide[0].confirmed | numFormat(0,0).replace(/,/g,' ') }}</span></td>
                    <td><span>{{ virusLocal[0].confirmed  | numFormat(0,0).replace(/,/g,' ')  }}</span></td>
                </tr>
                <tr>
                    <td><b>{{ $t('cured') }}</b></td>
                    <td><b>{{ $t('cured') }}</b></td>
                </tr>
                <tr>
                    <td><span style="color: #137611;">{{ virusWorldWide[0].recovered | numFormat(0,0).replace(/,/g,' ')  }}</span>
                    </td>
                    <td><span
                            style="color: #137611;">{{ virusLocal[0].recovered | numFormat(0,0).replace(/,/g,' ')  }}</span>
                    </td>
                </tr>
                <tr>
                    <td><b>{{ $t('died')}}</b></td>
                    <td><b>{{ $t('died')}}</b></td>
                </tr>
                <tr>
                    <td><span>{{ virusWorldWide[0].deaths | numFormat(0,0).replace(/,/g,' ')  }}</span></td>
                    <td><span>{{ virusLocal[0].deaths | numFormat(0,0).replace(/,/g,' ') }}</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['virusWorldWide', 'virusLocal'],
        name: "VirusStatic"
    }
</script>

<style scoped>

</style>
