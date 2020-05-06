<template>
    <div class="form-page">
        <img class="form-page__bg" data-src="~/static/images/form-page/bg.png" v-lazy-load>
        <div class="form-page__card">
    		<div class="form-page__card__content">
	    		<div class="form-page__container">
		        	<h1 class="form-page__title">{{ $t('form-page.login-page.title') }}</h1>
		        </div>
	        	<form class="form-page__form">
	        		<div class="form-page__container">
		        		<input class="form-page__input" name="login" type="email" :placeholder="$t('form-page.enter-login')" required>
		        		<input class="form-page__input" name="password" type="password" :placeholder="$t('form-page.enter-password')" required>
		        		<clink :to="'/reset-password'" class="form-page__text">{{ $t('form-page.forgot-password') }}</clink>
		        		<clink :to="'/register'" class="form-page__text double">{{ $t('form-page.no-account') }} <span class="blue double-second">{{ $t('form-page.register') }}!</span></clink>
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
	        		<button class="form-page__submit">{{ $t('form-page.login') }}</button>
	        	</form>
	        </div>
        </div>
    </div>
</template>
