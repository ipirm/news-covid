<template>
    <div class="form-page">
        <img class="form-page__bg" data-src="~/static/images/form-page/bg.png" v-lazy-load>
        <div class="form-page__card">
            <div class="form-page__container">
                <h1 class="form-page__title">{{ $t('explore') }}</h1>
            </div>
            <form class="form-page__form" @submit.prevent="addUser">
                <div class="form-page__container">
                    <input class="form-page__input" v-model="userForm.email" name="login" type="email"
                           :placeholder="$t('enterLogin')" required>
                    <input class="form-page__input" v-model="userForm.password" name="password" type="password"
                           :placeholder="$t('password')" required>
                    <clink :to="'/reset-password'" class="form-page__text">{{ $t('forgotPassword') }}</clink>
                    <clink :to="'/register'" class="form-page__text double">{{ $t('noAccount') }} <span
                            class="blue double-second">{{ $t('signUp') }}</span></clink>
                    <div class="form-page__enter-with">
                        <span class="form-page__text">{{ $t('signInBy') }}</span>
                        <clink :to="'https://facebook.com/'" class="form-page__social">
                            <svg-icon name="form-page/fb.svg"/>
                        </clink>
                        <clink :to="'https://instagram.com/'" class="form-page__social">
                            <svg-icon name="form-page/ig.svg"/>
                        </clink>
                    </div>
                </div>
                {{ error }}
                <button type="submit" class="form-page__submit">{{ $t('LogIn') }}</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        // middleware: 'check',
        data() {
            return {
                error: '',
                userForm: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            async addUser() {
                await this.$auth.login({
                    data: this.userForm
                })
                    .then(response => {
                        this.$router.push(this.localePath('/'));
                    })
                    .catch(e => {
                        this.error = e.response.data.error;
                    })
            },
        }
    }
</script>
