<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-mail">
                        <input placeholder="Оставить отзыв/жалобу">
                        <a href="#" @click.prevent><span>Отправить</span></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-title">Социальные сети</div>
                    <div class="footer-links">
                        <link-i18n to="/">Мы в твиттере</link-i18n>
                        <link-i18n to="/">Мы на Facebook</link-i18n>
                        <link-i18n to="/">Мы в телеграме</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">О нас</div>
                    <div class="footer-links">
                        <link-i18n to="/">Связаться с нами</link-i18n>
                        <link-i18n to="/">О нашей деятельности</link-i18n>
                        <link-i18n to="/">Размещение рекламы</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">Подписки</div>
                    <div class="footer-links">
                        <link-i18n to="/">Скрыть баннеры</link-i18n>
                        <link-i18n to="/">Рассылка новостей</link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-title">Наше мобильное приложение</div>
                    <div class="footer-links">
                        <link-i18n to="/">IOS</link-i18n>
                        <link-i18n to="/">Android</link-i18n>
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
                        All rights reserved. Baku, Azerbaijan, 2020
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
