export const state = () => ({
    news: null,
    interestingNews: null,
    slidesNews: null,
    activeNews: null
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
         state.activeNews = state.news[payload];
         console.log(state.activeNews);
        // state.news.find(i => i.source.id === payload)
    },
}


export const actions = {

    async getNews({commit}) {
        const news = await this.$axios.$get('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=2d23c9173e2449bc894c0f3341f26b84')
        commit('SET_NEWS', news.articles)
    },
    async getInterestingNews({commit}) {
        const interestingNews = await this.$axios.$get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d23c9173e2449bc894c0f3341f26b84')
        commit('SET_INTERESTING_NEWS', interestingNews.articles)
    },
    async getSlidesgNews({commit}) {
        const interestingNews = await this.$axios.$get('https://newsapi.org/v2/everything?q=apple&from=2020-03-29&to=2020-03-29&sortBy=popularity&apiKey=2d23c9173e2449bc894c0f3341f26b84')
        commit('SET_SLIDES_NEWS', interestingNews.articles)
    },
    async findNews({commit},id) {
        commit('GET_NEWS', id)
    }
}
