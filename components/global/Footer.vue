<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-mail">
                        <input :placeholder="`$t('leaveComment')}}`">
                        <a href="#" @click.prevent><span>{{ $t('send')}}</span></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('socialNetwork')}}</div>
                    <div class="footer-links">
                        <link-i18n to="/">{{ $t('weInTwitter')}}</link-i18n>
                        <link-i18n to="/">{{ $t('weOnFacebook')}}</link-i18n>
                        <link-i18n to="/">{{ $t('weInTelegram')}}</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('aboutUs')}}</div>
                    <div class="footer-links">
                        <link-i18n to="/">{{ $t('writeUs')}}</link-i18n>
                        <link-i18n to="/">{{ $t('whatWeDo')}}</link-i18n>
                        <link-i18n to="/">{{ $t('buyAdvertisement')}}</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('subscription')}}</div>
                    <div class="footer-links">
                        <link-i18n to="/">{{ $t('hideAdvertisements')}}</link-i18n>
                        <link-i18n to="/">{{ $t('buyAdvertisement')}}</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">{{ $t('mobileApp')}}</div>
                    <div class="footer-links">
                        <link-i18n to="/">{{ $t('iOS')}}</link-i18n>
                        <link-i18n to="/">{{ $t('android')}}</link-i18n>
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
