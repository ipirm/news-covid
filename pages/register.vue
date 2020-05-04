<template>
    <div class="form-page">
        <img class="form-page__bg" data-src="~/static/images/form-page/bg.png" v-lazy-load>
        <div class="form-page__card">
            <div class="form-page__card__content">
                <div class="form-page__container">
                    <h1 class="form-page__title">{{ $t('form-page.register-page.title') }}</h1>
                </div>
                <form class="form-page__form">
                    <div class="form-page__container">
                        <input class="form-page__input" name="login" type="email" :placeholder="$t('form-page.enter-login')" required>
                        <input class="form-page__input" name="password" type="password" :placeholder="$t('form-page.enter-password')" required>
                        <input class="form-page__input" name="password-again" type="password" :placeholder="$t('form-page.confirm-password')" required>
                        <clink :to="'/login'" class="form-page__text double">{{ $t('form-page.yes-account') }} <span class="blue double-second">{{ $t('form-page.login') }}!</span></clink>
                        <div class="form-page__enter-with">
                            <span class="form-page__text">{{ $t('form-page.enter-with') }}</span>
                            <clink :to="''" class="form-page__social">
                                <img src="~/static/svg/form-page/fb.svg" />
                            </clink>
                            <clink :to="''" class="form-page__social">
                                <img src="~/static/svg/form-page/ig.svg" />
                            </clink>
                        </div>
                    </div>
                    <button class="form-page__submit">{{ $t('form-page.register') }}</button>
                </form>
            </div>
        </div>
    </div>
</template>
