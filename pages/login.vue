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
	        		<link-i18n :to="'/reset-password'" class="form-page__text">{{ $t('forgotPassword') }}</link-i18n>
	        		<link-i18n :to="'/register'" class="form-page__text double">{{ $t('noAccount') }} <span class="blue double-second">{{ $t('signUp') }}</span></link-i18n>
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
        		<button class="form-page__submit">{{ $t('LogIn') }}</button>
        	</form>
        </div>
    </div>
</template>
