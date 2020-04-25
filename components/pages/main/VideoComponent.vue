<template>
    <client-only>
        <div class="video-player">
            <youtube  :video-id="data.video" :player-width="width" :player-height="height" :player-vars="{autoplay: 0}"></youtube>
        </div>
    </client-only>
</template>

<script>
    export default {
        name: 'VideoComponent',
        props:['data','width','height'],
    }
</script>
