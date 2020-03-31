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
                        <marquee-text :repeat="10" :duration="20">
                            Бегущий текст African states have been stepping up efforts to prevent the spread of
                            coronavirus.
                            African states have been stepping up efforts to pаааааааа
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
                            <link-i18n class="subheader-link" to="/news"><span>Рабочая ссылка</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span>Local</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span>Corona map</span></link-i18n>
                            <link-i18n class="subheader-link" to="/"><span>Карта заражений</span></link-i18n>
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
                                <div class="subheader-row-tags"><link-i18n to="/">Sign in</link-i18n></div>
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
    export default {
        components: {},
        name: "Header",
        data() {
            return {
                active: false,
                languageDefault: this.$i18n.locale,
            }
        },
        methods:{
            changeLang() {
                this.$router.push(this.switchLocalePath(`${this.languageDefault}`))
            }
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
