<template>
    <div class="contact-page-container">
        <div class="contact-page-title">
            <span>{{ $t('contact.who')}}</span>
        </div>
        <div class="contact-page-row">
            <div class="contact-page-item" v-for="item in contacts" :key="item.id">
                <div class="contact-page-item-title">
                    <span>{{ item.title[$i18n.locale]}}</span>
                </div>
                <div class="contact-page-item-text">
                    <span v-html="item.text[$i18n.locale]"></span>
                </div>
            </div>
            <div class="contact-page-item">
                <div class="contact-page-item-title">
                    <span>{{ $t('contact.social')}}</span>
                </div>
                <div class="contact-page-item-text">
                    <span>
                        {{ $t('contact.come')}}
                        <a target="_blank" href="https://www.facebook.com/covid.info.az/" class="contact-page-icons">
	        				<img src="~/static/svg/form-page/fb.svg" style="width: 20px;height: 20px"/>
	        			</a>
	        			<a target="_blank" href="https://www.instagram.com/covid.info.az/" class="contact-page-icons">
	        			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M1.24976 1.36083C-0.321907 2.99333 -0.000240855 4.7275 -0.000240855 9.99583C-0.000240855 14.3708 -0.763574 18.7567 3.23143 19.7892C4.47893 20.11 15.5323 20.11 16.7781 19.7875C18.4414 19.3583 19.7948 18.0092 19.9798 15.6567C20.0056 15.3283 20.0056 4.66916 19.9789 4.33416C19.7823 1.82833 18.2398 0.384165 16.2073 0.0916646C15.7414 0.0241646 15.6481 0.00416464 13.2581 -2.03028e-06C4.78059 0.00416464 2.92226 -0.373335 1.24976 1.36083Z"
      fill="url(#paint0_linear)"/>
<path d="M9.99834 2.61583C6.97251 2.61583 4.09917 2.34666 3.00167 5.16333C2.54834 6.32666 2.61417 7.8375 2.61417 10.0008C2.61417 11.8992 2.55334 13.6833 3.00167 14.8375C4.09667 17.6558 6.99334 17.3858 9.99667 17.3858C12.8942 17.3858 15.8817 17.6875 16.9925 14.8375C17.4467 13.6625 17.38 12.1742 17.38 10.0008C17.38 7.11583 17.5392 5.25333 16.14 3.855C14.7233 2.43833 12.8075 2.61583 9.99501 2.61583H9.99834ZM9.33667 3.94666C15.6483 3.93666 16.4517 3.235 16.0083 12.9825C15.8508 16.43 13.2258 16.0517 9.99917 16.0517C4.11584 16.0517 3.94667 15.8833 3.94667 9.9975C3.94667 4.04333 4.41334 3.95 9.33667 3.945V3.94666ZM13.94 5.1725C13.4508 5.1725 13.0542 5.56916 13.0542 6.05833C13.0542 6.5475 13.4508 6.94416 13.94 6.94416C14.4292 6.94416 14.8258 6.5475 14.8258 6.05833C14.8258 5.56916 14.4292 5.1725 13.94 5.1725ZM9.99834 6.20833C7.90417 6.20833 6.20667 7.90666 6.20667 10.0008C6.20667 12.095 7.90417 13.7925 9.99834 13.7925C12.0925 13.7925 13.7892 12.095 13.7892 10.0008C13.7892 7.90666 12.0925 6.20833 9.99834 6.20833ZM9.99834 7.53916C13.2525 7.53916 13.2567 12.4625 9.99834 12.4625C6.74501 12.4625 6.74001 7.53916 9.99834 7.53916Z"
      fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="1.28811" y1="18.7226" x2="19.876" y2="2.63498" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDD55"/>
<stop offset="0.5" stop-color="#FF543E"/>
<stop offset="1" stop-color="#C837AB"/>
</linearGradient>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
	        			</a>
                        	<a target="_blank" href="https://t.me/joinchat/AAAAAFfUHh7hvxi6g-Gjvw" class="contact-page-icons">
	        				<img src="~/static/svg/form-page/tg.svg" style="width: 20px;height: 20px"/>
	        			</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "contact",
        head() {
            return {
                title: `${this.$t('MetaTitle')}`,
                meta: [
                    { name: 'description', content: `${this.$t('metaDescription')}` || '' },
                    { property: 'og:title', content: `${this.$t('MetaTitle')}` || '' } ,
                    { property: 'og:description', content: `${this.$t('metaDescription')}` || '' } ,
                    { property: 'og:image', content: '/images/main-page/slide1.png' || '' } ,
                    { property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || '' } ,
                    { property: 'twitter:card', content: '/images/main-page/slide1.png' || '' } ,
                    { name: 'keywords', content: `${this.$t('keywords')}` || '' },
                ]
            }
        },
        async fetch({store}) {
            await store.dispatch('search/getContact')
        },
        computed: {
            ...mapState('search', ['contacts'])
        }
    }
</script>

