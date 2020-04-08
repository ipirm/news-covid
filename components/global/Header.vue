<template>
    <header>
        <div class="container-fluid" style="padding: 0;overflow: hidden">
            <div class="row">
                <div class="col-lg-3">
                    <div class="preheader">
                        <link-i18n to="/" class="preheader-title">
                            <img src="/images/main-page/logo.png">
                            <span class="preheader-title-text">COVID-19 news</span>
                        </link-i18n>
                    </div>
                </div>
                <div class="col-lg-9">
                    <client-only>
                        <marquee-text :repeat="10" :duration="20">
                            Бегущий текст African states have been stepping up efforts to prevent the spread of
                            coronavirus.
                            African states have been stepping up efforts to pаааааааа
                        </marquee-text>
                    </client-only>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-1 header-mobile">
                        <button :class="['hamburger','hamburger--slider',active ? 'is-active' : '']" type="button"
                                @click="active = !active">
                            <span class="hamburger-box"><span class="hamburger-inner"></span></span>
                        </button>
                    </div>
                    <div class="col-lg-10">
                        <div class="header-row">
                            <link-i18n class="header-link" to="/news"><span>Все новости</span></link-i18n>
                            <link-i18n class="header-link" to="/"><span>Local</span></link-i18n>
                            <link-i18n class="header-link" to="/map"><span>Corona world map</span></link-i18n>
                            <link-i18n class="header-link" to="/local-map"><span>Corona local map</span></link-i18n>
                            <link-i18n class="header-link" to="/"><span>Trending</span></link-i18n>
                            <link-i18n class="header-link" to="/"><span>{{ $t('sabina') }}</span></link-i18n>
                            <div class="header-row-right">
                                <div class="header-search">
                                    <div class="header-search-icon-area" @click="searchShown = !searchShown">
                                        <img class="header-search-icon" src="/images/main-page/search.png">
                                    </div>
                                    <div class="header-search-dropdown" v-show="searchShown">
                                        <input type="text" name="search" :placeholder="$t('Введите текст для поиска')">
                                        <button>{{ $t('Найти') }}</button>
                                    </div>
                                </div>
                                <div class="header-row-tags">
                                    <v-select
                                        :options="languages"
                                        v-model="languageDefault"
                                        :clearable="false"
                                        :searchable="false"
                                        @input="changeLang()"
                                    />
                                </div>
                                <div class="header-row-tags header-sign-in">
                                    <link-i18n to="/">{{ $t('signIn') }}</link-i18n>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="subheader">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="header-row subheader-content">
                            <SubheaderDropdown :title="$store.state.mockData.subheader.top.title" :links="$store.state.mockData.subheader.top.links" :red="true" />
                            <SubheaderDropdown :title="$store.state.mockData.subheader.region.title" :links="$store.state.mockData.subheader.region.links" />
                            <SubheaderDropdown :title="$store.state.mockData.subheader.categories.title" :links="$store.state.mockData.subheader.categories.links" />
                            <link-i18n class="subheader-link" to="/"><span>{{ $t('Все статьи') }}</span></link-i18n>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import SubheaderDropdown from '~/components/elements/SubheaderDropdown';

    export default {
        components: {
            SubheaderDropdown
        },
        name: "Header",
        data() {
            return {
                active: false,
                languageDefault: this.$i18n.locale,
                searchShown: false
            }
        },
        methods: {
            changeLang() {
                this.$router.push(this.switchLocalePath(`${this.languageDefault}`))
                this.$moment.locale(this.languageDefault);
            }
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
            }
        }
    }
</script>

<style scoped>

</style>
