<template>
    <div class="overlay-work">
        <div class="container">
            <div class="row">
                <div class="overlay-work-title">
                    <div class="overlay-title">
                        <span>Как это работает</span>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="col-4" v-for="index in 3" :key="index">
                    <img src="/images/main-page/scope1.svg">
                    <p>
                        Заполните критерии подбора
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
