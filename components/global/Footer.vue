<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-mail">
                        <input :placeholder="$t('leaveComment')">
                        <a href="#" @click.prevent><span>{{ $t('send')}}</span></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('socialNetwork')}}</div>
                    <div class="footer-links">
                        <clink to="/">{{ $t('weInTwitter')}}</clink>
                        <clink to="/">{{ $t('weOnFacebook')}}</clink>
                        <clink to="/">{{ $t('weInTelegram')}}</clink>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('aboutUs')}}</div>
                    <div class="footer-links">
                        <clink to="/">{{ $t('writeUs')}}</clink>
                        <clink to="/">{{ $t('whatWeDo')}}</clink>
                        <clink to="/">{{ $t('buyAdvertisement')}}</clink>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('subscription')}}</div>
                    <div class="footer-links">
                        <clink to="/">{{ $t('hideAdvertisements')}}</clink>
                        <clink to="/">{{ $t('buyAdvertisement')}}</clink>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('mobileApp')}}</div>
                    <div class="footer-links">
                        <clink to="/">{{ $t('iOS')}}</clink>
                        <clink to="/">{{ $t('android')}}</clink>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-underline"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-reserve">
                        {{ $t('allRights')}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
