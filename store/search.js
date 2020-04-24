export const state = () => ({
    locations: null
})


export const mutations = {
    SET_LOCATIONS: (state, payload) => {
        state.locations = payload
    }
}


export const actions = {

    async getLocations({commit}) {
        const data = await this.$axios.$get(`/locations`);
        commit('SET_LOCATIONS', data.countries)
    },
}
