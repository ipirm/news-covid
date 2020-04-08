<template>
    <div>
        <div class="container-fluid" style="padding: 0;overflow: hidden">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header-text">
                        <link-i18n to="/" class="logo">
                            <img src="/images/main-page/logo.png">
                        </link-i18n>
                        <div class="header-text-main">COVID-19 news</div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <client-only>
                        <marquee-text :repeat="10" :duration="20" v-if="banner">
                            {{ banner.running[$i18n.locale] }}
                        </marquee-text>
                    </client-only>
                </div>
            </div>
        </div>
        <section class="subheader">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-1">
                        <button :class="['hamburger','hamburger--slider',active ? 'is-active' : '']" type="button"
                                @click="active = !active">
                            <span class="hamburger-box"><span class="hamburger-inner"></span></span>
                        </button>
                    </div>
                    <div class="col-lg-10">

                        <div class="subheader-row">
                            <link-i18n class="subheader-link" to="/news"><span>Все новости</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span>Local</span></link-i18n>
                            <link-i18n class="subheader-link" to="/map"><span>Corona world map</span></link-i18n>
                            <link-i18n class="subheader-link" to="/local-map"><span>Corona local map</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span>Trending</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span> {{ $t('sabina') }}</span></link-i18n>
                            <div class="subheader-row-right">
                                <img src="/images/main-page/search.png">
                                <div class="subheader-row-tags">
                                    <v-select
                                            :options="languages"
                                            v-model="languageDefault"
                                            :clearable="false"
                                            :searchable="false"
                                            @input="changeLang()"
                                    />
                                </div>
                                <div class="subheader-row-tags">
                                    <link-i18n to="/">{{ $t('signIn')}}</link-i18n>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="last-header" style="height: 40px; width: 100%"></section>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return {
                active: false,
                languageDefault: this.$i18n.locale,
            }
        },
        created(){
            this.getBanners();
        },
        methods: {
            changeLang() {
                this.$router.push(this.switchLocalePath(`${this.languageDefault}`))
                this.$moment.locale(this.languageDefault);
            },
            ...mapActions('news', ['getBanners'])
        },
        mounted(){
            this.$moment.locale(this.languageDefault);
        },
        computed: {
            availableLocales() {
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            },
            languages() {
                return this.availableLocales.map(item => item.code.toLowerCase())
            },
                ...mapState('news', ['banner'])
        }
    }
</script>

<style scoped>

</style>
