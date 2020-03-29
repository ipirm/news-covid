export const state = () => ({
    orders: null,
    loading: false
})


export const mutations = {

    SET_ORDER: (state, payload) => {
        state.loading = !state.loading;
        state.orders = payload;
    },

    SET_DELETED_ORDER: (state, payload) => {
        state.loading = !state.loading;
        state.orders = state.orders.filter(item => item.id !== payload);
    },
    SET_LOADING: (state) => {
        state.loading = !state.loading
    }
}


export const actions = {

    async getOrders({commit}) {
        commit('SET_LOADING');
        const orders = await this.$axios.$get('/orders')
            commit('SET_ORDER', orders.orders)
    },
    async deleteOrder({commit}, id) {
        commit('SET_LOADING');
        await this.$axios.$delete(`/orders/${id}`)
            .then(() =>{
                commit('SET_DELETED_ORDER', id)
            });
    },

    async addOrder({commit, dispatch}, body) {
        await this.$axios.$post(`/orders`, body).then(() => {
            dispatch('getOrders');
        })
    },
}
