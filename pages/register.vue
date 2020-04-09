<template>
    <div class="form-page">
        <img class="form-page__bg" src="~/static/images/form-page/bg.png">
        <div class="form-page__card">
            <div class="form-page__container">
                <h1 class="form-page__title">{{ $t('explore') }}</h1>
            </div>
            <form class="form-page__form">
                <div class="form-page__container">
                    <input class="form-page__input" name="login" type="email" :placeholder="$t('enterLogin')" required>
                    <input class="form-page__input" name="password" type="password" :placeholder="$t('password')" required>
                    <input class="form-page__input" name="password-again" type="password" :placeholder="$t('repeatPassword')" required>
                    <link-i18n :to="'/login'" class="form-page__text double">{{ $t('haveAccount') }} <span class="blue double-second">{{ $t('LogIn') + '!' }}</span></link-i18n>
                    <div class="form-page__enter-with">
                        <span class="form-page__text">{{ $t('signInBy') }}</span>
                        <link-i18n :to="'https://facebook.com/'" class="form-page__social">
                            <img src="~/static/svg/form-page/fb.svg">
                        </link-i18n>
                        <link-i18n :to="'https://instagram.com/'" class="form-page__social">
                            <img src="~/static/svg/form-page/ig.svg">
                        </link-i18n>
                    </div>
                </div>
                <button class="form-page__submit">{{ $t('Зарегистророваться') }}</button>
            </form>
        </div>
    </div>
</template>
