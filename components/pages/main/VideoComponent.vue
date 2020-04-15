<template>
    <client-only>
        <div class="video-player">
            <video-player class="video-player-box vjs-big-play-centered"
                          style="width: inherit"
                          ref="videoPlayer"
                          :options="playerOptions"
                          :playsinline="true"
                          customEventName="customstatechangedeventname"
                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"
                          @statechanged="playerStateChanged($event)"
                          @ready="playerReadied">
            </video-player>
        </div>
    </client-only>
</template>

<script>
    // Similarly, you can also introduce the plugin resource pack you want to use within the component
    // import 'some-videojs-plugin'
    export default {
        name: 'VideoComponent',
        data() {
            return {
                playerOptions: {
                    fluid: true,
                    height: '360',
                    muted: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0, 10.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/images/main-page/main1.png",
                },
                userActions: {
                    hotkeys: function (event) {
                        // `this` is the player in this context
                        // `x` key = pause
                        if (event.which === 88) {
                            this.pause();
                        }
                        // `y` key = play
                        if (event.which === 89) {
                            this.play();
                        }
                    }
                }
            }
        },
        // @waiting="onPlayerWaiting($event)"
        // @playing="onPlayerPlaying($event)"
        // @loadeddata="onPlayerLoadeddata($event)"
        // @timeupdate="onPlayerTimeupdate($event)"
        // @canplay="onPlayerCanplay($event)"
        // @canplaythrough="onPlayerCanplaythrough($event)"
        // @ended="onPlayerEnded($event)"
        mounted() {
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            // ...player event
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                // you can use it to do something...
                // player.[methods]
            }
        }
    }
</script>
