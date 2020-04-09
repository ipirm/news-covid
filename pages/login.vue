<template>
    <div class="form-page">
        <img class="form-page__bg" src="~/static/images/form-page/bg.png">
        <div class="form-page__card">
    		<div class="form-page__container">
	        	<h1 class="form-page__title">{{ $t('Explore the world with us') }}</h1>
	        </div>
        	<form class="form-page__form">
        		<div class="form-page__container">
	        		<input class="form-page__input" name="login" type="email" :placeholder="$t('Введите логин')" required>
	        		<input class="form-page__input" name="password" type="password" :placeholder="$t('Введите пароль')" required>
	        		<link-i18n :to="'/reset-password'" class="form-page__text">{{ $t('Забыли пароль?') }}</link-i18n>
	        		<link-i18n :to="'/register'" class="form-page__text double">{{ $t('Нет аккаунта?') }} <span class="blue double-second">{{ $t('Зарегистрироваться!') }}</span></link-i18n>
	        		<div class="form-page__enter-with">
	        			<span class="form-page__text">{{ $t('Войсти с помощью') }}</span>
	        			<link-i18n :to="'https://facebook.com/'" class="form-page__social">
	        				<img src="~/static/svg/form-page/fb.svg">
	        			</link-i18n>
	        			<link-i18n :to="'https://instagram.com/'" class="form-page__social">
	        				<img src="~/static/svg/form-page/ig.svg">
	        			</link-i18n>
	        		</div>
	        	</div>
        		<button class="form-page__submit">{{ $t('Войти') }}</button>
        	</form>
        </div>
    </div>
</template>
