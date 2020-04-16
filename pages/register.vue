<template>
    <div class="form-page">
        <img class="form-page__bg" data-src="~/static/images/form-page/bg.png" v-lazy-load>
        <div class="form-page__card">
            <div class="form-page__container">
                <h1 class="form-page__title">{{ $t('explore') }}</h1>
            </div>
            <form class="form-page__form">
                <div class="form-page__container">
                    <input class="form-page__input" name="login" type="email" :placeholder="$t('enterLogin')" required>
                    <input class="form-page__input" name="password" type="password" :placeholder="$t('password')" required>
                    <input class="form-page__input" name="password-again" type="password" :placeholder="$t('repeatPassword')" required>
                    <clink :to="'/login'" class="form-page__text double">{{ $t('haveAccount') }} <span class="blue double-second">{{ $t('LogIn') + '!' }}</span></clink>
                    <div class="form-page__enter-with">
                        <span class="form-page__text">{{ $t('signInBy') }}</span>
                        <clink :to="'https://facebook.com/'" class="form-page__social">
                            <svg-icon name="form-page/fb.svg" />
                        </clink>
                        <clink :to="'https://instagram.com/'" class="form-page__social">
                            <svg-icon name="form-page/ig.svg" />
                        </clink>
                    </div>
                </div>
                <button class="form-page__submit">{{ $t('Зарегистророваться') }}</button>
            </form>
        </div>
    </div>
</template>
