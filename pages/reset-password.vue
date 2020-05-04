<template>
    <div class="form-page reset">
        <img class="form-page__bg" data-src="~/static/images/form-page/bg.png" v-lazy-load>
        <div class="form-page__card">
        	<div class="form-page__card__content">
	    		<div class="form-page__container">
		        	<h1 class="form-page__title" v-show="step == 1">{{ $t('usedEmail') }}</h1>
		        	<h1 class="form-page__title" v-show="step == 2">{{ $t('sentCode') }}</h1>
		        	<h1 class="form-page__title" v-show="step == 3">{{ $t('ready') }}</h1>
		        </div>
	        	<form class="form-page__form">
	        		<div class="form-page__container">
		        		<input class="form-page__input" name="email" type="email" :placeholder="$t('login')" required v-if="step == 1">
		        		<input class="form-page__input" name="code" type="text" :placeholder="$t('writeCode')" required v-if="step == 2">
		        		<input class="form-page__input" name="password" type="password" :placeholder="$t('newPassword')" required v-if="step == 3">
		        		<input class="form-page__input" name="password-again" type="password" :placeholder="$t('repeatPassword')" required v-if="step == 3">
		        		<clink :to="'/login'" class="form-page__text">{{ $t('LogIn') }}</clink>
		        		<clink :to="'/register'" class="form-page__text double">{{ $t('noAccount') }} <span class="blue double-second">{{ $t('signUp') }}</span></clink>
		        		<div class="form-page__enter-with">
		        			<span class="form-page__text">{{ $t('signInBy') }}</span>
		        			<clink :to="''" class="form-page__social">
                                <img src="~/static/svg/form-page/fb.svg" />
                            </clink>
                            <clink :to="''" class="form-page__social">
                                <img src="~/static/svg/form-page/ig.svg" />
                            </clink>
		        		</div>
		        	</div>
	        		<button class="form-page__submit" @click="goToNextStep()">{{ $t('send') }}</button>
	        	</form>
	        </div>
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
