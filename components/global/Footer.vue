<template>
    <section class="footer">
        <div class="custom-container--main">
            <div class="footer__leave-comment">
                <input  :placeholder="$t('leaveComment')" v-model="message">
                <a  href="#" @click.prevent="sendMail"><span>{{ $t('send')}}</span></a>
            </div>
            <div class="footer__blocks">
                <div class="footer__blocks__item">
                    <div class="footer__blocks__item__inner">
                        <div class="footer-title">{{ $t('socialNetwork')}}</div>
                        <div class="footer-links">
                            <a href="https://t.me/joinchat/AAAAAFfUHh7hvxi6g-Gjvw" target="_blank" >{{ $t('weInTelegram')}}</a>
                            <clink to="/">{{ $t('weOnFacebook')}}</clink>
                            <clink to="/">{{ $t('weInTwitter')}}</clink>
                        </div>
                    </div>
                </div>
                <div class="footer__blocks__item">
                    <div class="footer__blocks__item__inner">
                        <div class="footer-title">{{ $t('aboutUs')}}</div>
                        <div class="footer-links">
                            <clink to="/">{{ $t('writeUs')}}</clink>
                            <clink to="/">{{ $t('whatWeDo')}}</clink>
                            <clink to="/">{{ $t('buyAdvertisement')}}</clink>
                        </div>
                    </div>
                </div>
                <div class="footer__blocks__item">
                    <div class="footer__blocks__item__inner">
                        <div class="footer-title">{{ $t('subscription')}}</div>
                        <div class="footer-links">
                            <clink to="/">{{ $t('hideAdvertisements')}}</clink>
                            <clink to="/">{{ $t('buyAdvertisement')}}</clink>
                        </div>
                    </div>
                </div>
                <div class="footer__blocks__item">
                    <div class="footer__blocks__item__inner">
                        <div class="footer-title">{{ $t('mobileApp')}}</div>
                        <div class="footer-links">
                            <clink to="/">{{ $t('iOS')}}</clink>
                            <clink to="/">{{ $t('android')}}</clink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-underline"></div>
            <div class="footer__copyright">
                <span>{{ $t('allRights')}}</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return {
                message: '',
                error: false
            }
        },
        methods:{
            sendMail(){
                if(this.message !== '') {
                    this.$store.dispatch('orders/sendOrder', this.message).then(()=>{
                        this.message = ''
                    })
                }else{
                 this.error = true
                }
            }
        }
    }
</script>

<style scoped>

</style>
