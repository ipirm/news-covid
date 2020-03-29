<template>
    <div class="overlay-mobile">
        <div class="container">
            <div class="row">
                <div class="left-col">
                    <div class="left-col-header">
                        <span>Загрузите мобильное приложение TVISER</span>
                    </div>
                    <div class="left-col-body">
                        <svg-icon name="mobile1" style="width: 46px;height: 53px;"/>
                        <svg-icon name="mobile2" style="width: 42px;height: 52px;"/>
                        <span>Отправим СМС со ссылкой на приложение</span>
                    </div>
                    <div class="left-col-footer">
                        <input type="text" placeholder="Мобильный телефон">
                        <span class="left-col-footer-text">Пример: <b>+994</b> 55 3059987</span>
                        <a href="#" @click.prevent class="left-col-footer-btn"><span>Отправить</span></a>
                    </div>
                </div>
                <div class="right-col">
                    <img src="/images/main-page/phone.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileApp"
    }
</script>

<style scoped>

</style>
