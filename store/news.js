export const state = () => ({
    news: null,
    interestingNews: null,
    slidesNews: null,
    activeNews: null,
    newsData: null,
    cats: null,
    videoNews: null
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
}


export const actions = {
    async getNewsSlides({commit}) {
        const news = await this.$axios.$get('http://puny2.continent.az/api/slides');
        commit('SET_SLIDES_NEWS', news.news)
    },
    async getNews({commit}) {
        const news = await this.$axios.$get('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=2d23c9173e2449bc894c0f3341f26b84')
        commit('SET_NEWS', news.articles)
    },
    async getInterestingNews({commit}) {
        const interestingNews = await this.$axios.$get('http://puny2.continent.az/api/interesting?per_page=12')
        commit('SET_INTERESTING_NEWS', interestingNews.news.data)
    },
    async findNews({commit},id) {
        const news = await this.$axios.$get(`http://puny2.continent.az/api/news/${id}`);
        commit('GET_NEWS', news.news)
    },
    async getNewsData({commit}) {
        const news = await this.$axios.$get('http://puny2.continent.az/api/news');
        commit('SET_NEWS_DATA', news.news.data)
    },
    async getCats({commit}) {
        const cats = await this.$axios.$get('http://puny2.continent.az/api/cats');
        commit('SET_CATS_DATA', cats.cats)
    },
    async getCatsNews({commit},id) {
        const cats = await this.$axios.$get(`http://puny2.continent.az/api/cats/${id}`);
        commit('SET_NEWS_DATA', cats.news.data)
    },
    async getVideoNews({commit}) {
        const cats = await this.$axios.$get('http://puny2.continent.az/api/videos?per_page=12');
        commit('SET_VIDEO_DATA', cats.news.data)
    }
}
