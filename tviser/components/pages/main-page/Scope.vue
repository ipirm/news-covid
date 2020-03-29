<template>
    <div class="overlay-scope">
        <div class="container">
            <div class="row">
                <div class="overlay-scope-title">
                    <span>Выберите сферу деятельности которую ищите</span>
                </div>
             <ScopeSwiper/>
            </div>
        </div>
    </div>
</template>

<script>
    import ScopeSwiper from "./ScopeSwiper";
    export default {
        name: "Scope",
        components: {ScopeSwiper},
    }
</script>

<style scoped>

</style>
