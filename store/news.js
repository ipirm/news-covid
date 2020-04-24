export const state = () => ({
    news: null,
    interestingNews: null,
    slidesNews: null,
    activeNews: {
        title: {
            en: '',
            ru: '',
            az: ''
        }
    },
    newsData: null,
    cats: [],
    videoNews: null,
    banners: [],
    totalElems: 0,
    videosData: null,
    naturalVideos: null
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
    SET_CATS: (state, payload) => {
        state.cats = payload;
    },
    SET_VIDEO_DATA: (state, payload) => {
        state.videoNews = payload
    },
    SET_BANNERS: (state,payload) =>{
        state.banners = payload;
    },
    SET_TOTAL_ELEMS: (state, payload) => {
        state.totalElems = payload;
    },
    SET_VIDEOS_NEWS: (state, payload) => {
        state.videosData = payload;
    },
    SET_NATURAL_VIDEOS_NEWS: (state, payload) => {
        state.naturalVideos = payload;
    },
}

export const actions = {
    async getNewsSlides({commit}) {
        const news = await this.$axios.$get('slides');
        commit('SET_SLIDES_NEWS', news.news);
    },

    async getInterestingNews({commit}) {
        const interestingNews = await this.$axios.$get('interesting?per_page=12')
        commit('SET_INTERESTING_NEWS', interestingNews.news.data)
    },

    async findNews({commit}, id) {
        const news = await this.$axios.$get(`news/${id}`);
        commit('GET_NEWS', news)
    },

    async getNewsData({commit}) {
        const news = await this.$axios.$get('news');
        commit('SET_NEWS_DATA', news.news.data)
    },

    async getVideoNews({commit}) {
        const cats = await this.$axios.$get('videos?per_page=12');
        commit('SET_VIDEO_DATA', cats.news.data)
    },

    async getPaginatedNews({commit}, data) {
        let res;
        if (data.id)
            res = await this.$axios
                .$get(`cats-search?page=${data.curPage}&per_page=${data.perPage}&id=${data.id}&slug=${data.slug}`);
        else
            res = await this.$axios.$get(`news?page=${data.curPage}&per_page=${data.perPage}`);
        commit('SET_TOTAL_ELEMS', res.news.total ? res.news.total : 0);
        commit('SET_NEWS_DATA', res.news.data);
    },

    // global action (gets called from index.js)
    async getBanners({commit}) {
        const res = await this.$axios.$get('banners');
        commit('SET_BANNERS', res.banner);
    },

    async getCats({commit}) {
        const res = await this.$axios.$get('cats');
        commit('SET_CATS', res.cats);
    },
    async getVideos({commit}){
        const data = await this.$axios.$get(`all-video?page=1&per_page=8`);
        commit('SET_VIDEOS_NEWS', data.news.data);
    },
    async getNaturalVideos({commit}){
        const data = await this.$axios.$get(`natural-video?page=1&per_page=6`);
        commit('SET_NATURAL_VIDEOS_NEWS', data.news.data);
    }
}
