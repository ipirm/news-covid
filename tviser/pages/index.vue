<template>
    <div>
        <MainSwiper/>
        <Ratting/>
        <Scope/>
        <HowWorks/>
        <Partners/>
        <MobileApp/>
        <Price/>
    </div>
</template>

<script>
    import MainSwiper from "~/components/pages/main-page/MainSwiper";
    import Ratting from "~/components/pages/main-page/Ratting";
    import Scope from "~/components/pages/main-page/Scope";
    import HowWorks from "~/components/pages/main-page/HowWorks";
    import Price from "~/components/pages/main-page/Price";
    import Partners from "~/components/pages/main-page/Partners";
    import MobileApp from "../components/pages/main-page/MobileApp";

    export default {
        components: {MobileApp, Partners, Price, HowWorks, Scope, Ratting, MainSwiper,},
    }
</script>

