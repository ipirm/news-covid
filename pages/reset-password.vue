<template>
    <div class="form-page reset">
        <img class="form-page__bg" src="~/static/images/form-page/bg.png">
        <div class="form-page__card">
    		<div class="form-page__container">
	        	<h1 class="form-page__title" v-show="step == 1">{{ $t('Введите e-mail, с которого вы регистрировались') }}</h1>
	        	<h1 class="form-page__title" v-show="step == 2">{{ $t('На ваш e-mail отправлен код. Введите его для сброса пароля') }}</h1>
	        	<h1 class="form-page__title" v-show="step == 3">{{ $t('Готово! Ваш пароль сброшен. Придумайте новый пароль для входа') }}</h1>
	        </div>
        	<form class="form-page__form">
        		<div class="form-page__container">
	        		<input class="form-page__input" name="email" type="email" :placeholder="$t('Введите e-mail')" required v-if="step == 1">
	        		<input class="form-page__input" name="code" type="text" :placeholder="$t('Введите код')" required v-if="step == 2">
	        		<input class="form-page__input" name="password" type="password" :placeholder="$t('Новый пароль')" required v-if="step == 3">
	        		<input class="form-page__input" name="password-again" type="password" :placeholder="$t('Подтверждение пароля')" required v-if="step == 3">
	        		<link-i18n :to="'/login'" class="form-page__text">{{ $t('Войти') }}</link-i18n>
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
        		<button class="form-page__submit" @click="goToNextStep()">{{ $t('Отправить') }}</button>
        	</form>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				step: 1
			}
		},

		methods: {
			goToNextStep() {
				if (this.step < 3) {
					this.step++;
				}
			}
		}
	}
</script>
