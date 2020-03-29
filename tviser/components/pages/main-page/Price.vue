<template>
    <div class="overlay-prices">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="overlay-prices-title">
                        <span>Наш тарифный план</span>
                    </div>
                </div>
            </div>
            <div class="row prices-row">
                <div class="overlay-prices-card" v-for="index in 3" :key="index">
                    <div class="overlay-prices-header">
                        <div class="overlay-prices-price"><span>Basic</span></div>
                        <a href="#" class="overlay-prices-btn" @click.prevent><span>Choose this plan</span></a>
                        <div class="overlay-prices-date"><b>7.99</b><span>/month</span></div>
                    </div>
                    <div class="overlay-prices-body">
                        <span>Everything in Basic, and:</span>
                        <ul>
                            <li>Dedicated account managers to help you find and hire quality talent fast</li>
                            <li>Dedicated account managers to help you find and hire quality talent fast</li>
                            <li>Dedicated account managers to help you find and hire quality talent fast</li>
                            <li>Dedicated account managers to help you find and hire quality talent fast</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Price"
    }
</script>

<style scoped>

</style>
