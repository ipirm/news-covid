<template>
    <div>
        <div class="overlay-header">
            <div class="container header-container">
                <div class="row">
                    <div class="overlay-header-row">
                        <div class="overlay-header-input">
                            <autocomplete
                                    :search="search"
                                    :auto-select="true"
                                    placeholder="Выберите регион"
                                    aria-label="Выберите регион"
                                    :get-result-value="getResultValue"
                            />
                        </div>
                        <div class="overlay-header-border"></div>
                        <div class="overlay-header-select">
                            <v-select
                                    :options="languages"
                                    v-model="languageDefault"
                                    :clearable="false"
                                    :searchable="false"
                                    @input="changeLang()"
                            />
                        </div>
                    </div>
                    <div class="header-nav">
                        <link-i18n
                                class="header-nav-link"
                                to="/"
                        ><span>Работники</span></link-i18n>
                        <link-i18n
                                class="header-nav-link"
                                to="/orders"
                        ><span>Заказы</span></link-i18n>
                        <link-i18n class="header-nav-link" to="/login" v-if="!loggedIn"><span>Вход</span></link-i18n>
                        <link-i18n class="header-nav-link" v-if="!loggedIn" to="/register">Регестрация</link-i18n>
                        <a href="#" class="header-nav-link" v-if="loggedIn"
                           @click.prevent="logout"><span>Выйти</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay-subheader">
            <div class="container header-container">
                <div class="row">
                    <link-i18n class="logo" to="/">
                        <svg-icon name="logo" style="width:126px;height:33px"/>
                    </link-i18n>
                    <div class="overlay-subheader-help">
                        <span>Помощь</span>
                        <a href="#" @click.prevent><span>9292</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                names: [
                    {id: 100, title: 'title1'},
                    {id: 101, title: 'title2'},
                    {id: 102, title: 'title3'},
                    {id: 103, title: 'title4'},
                    {id: 104, title: 'title5'},
                ],
                languageDefault: this.$i18n.locale
            }
        },
        methods: {
            search(input) {
                return this.names.filter(name => {
                    return name.title.toLowerCase().startsWith(input.toLowerCase())
                })
            },
            getResultValue(result) {
                return result.title
            },
            logout() {
                this.$auth.logout();
                this.$router.push(this.localePath('/'));
            },
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
