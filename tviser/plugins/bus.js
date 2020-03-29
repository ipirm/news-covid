import Vue from 'vue'

const eventBus = {}

eventBus.install = function (Vue) {
    Vue.prototype.$bus = new Vue();
    Vue.prototype.$bus.goTo = (link, router,path) => {
        Vue.prototype.$bus.$emit('transition');
        setTimeout(() => { router.push(path(link)) }, 500);
    };
}
Vue.use(eventBus)
