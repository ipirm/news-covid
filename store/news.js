export const state = () => ({
    news: null,
    interestingNews: null,
    slidesNews: null,
    activeNews: null,
    newsData: null,
    cats: null,
    videoNews: null,
    banner: null,
    totalElems: 0
})

export const mutations = {
    SET_NEWS: (state, payload) => {
        state.news = payload;
    },
    SET_INTERESTING_NEWS: (state, payload) => {
        state.interestingNews = payload;
    },
    SET_SLIDES_NEWS: (state, payload) => {
        state.slidesNews = payload;
    },
    GET_NEWS: (state, payload) => {
         state.activeNews = payload;
    },
    SET_NEWS_DATA: (state, payload) => {
        state.newsData = payload
    },
    SET_CATS_DATA: (state, payload) => {
        state.cats = payload
    },
    SET_VIDEO_DATA: (state, payload) => {
        state.videoNews = payload
    },
    SET_BANNER_DATA: (state,payload) =>{
        state.banner = payload
    },
    SET_TOTAL_ELEMS: (state, payload) => {
        state.totalElems = payload;
    }
}

export const actions = {
    async getNewsSlides({commit}) {
        const news = await this.$axios.$get('http://puny2.continent.az/api/slides');
        commit('SET_SLIDES_NEWS', news.news);
    },
    async getNews({commit}) {
        const news = await this.$axios.$get('http://puny2.continent.az/api/news')
        commit('SET_NEWS', news.news.data)
    },
    async getInterestingNews({commit}) {
        const interestingNews = await this.$axios.$get('http://puny2.continent.az/api/interesting?per_page=12')
        commit('SET_INTERESTING_NEWS', interestingNews.news.data)
    },
    async findNews({commit},id) {
        const news = await this.$axios.$get(`http://puny2.continent.az/api/news/${id}`);
        commit('GET_NEWS', news.news)
    },
    async getCats({commit}) {
        const cats = await this.$axios.$get('http://puny2.continent.az/api/cats');
        commit('SET_CATS_DATA', cats.cats)
    },
    async getVideoNews({commit}) {
        const cats = await this.$axios.$get('http://puny2.continent.az/api/videos?per_page=12');
        commit('SET_VIDEO_DATA', cats.news.data)
    },
    async getBanners({commit}) {
        const cats = await this.$axios.$get('http://puny2.continent.az/api/banners');
        commit('SET_BANNER_DATA', cats.banner)
    },
    async getPaginatedNews({commit}, data) {
        let res;
        if (data.id)
            res = await this.$axios.$get(`http://puny2.continent.az/api/cats/${data.id}?page=${data.curPage}&per_page=${data.perPage}`);
        else
            res = await this.$axios.$get(`http://puny2.continent.az/api/news?page=${data.curPage}&per_page=${data.perPage}`);
        commit('SET_TOTAL_ELEMS', res.news.total ? res.news.total : 0);
        commit('SET_NEWS_DATA', res.news.data);
    }
}
