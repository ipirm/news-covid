export const state = () => ({
    locations: null,
    contacts: null
})


export const mutations = {
    SET_LOCATIONS: (state, payload) => {
        state.locations = payload
    },
    SET_CONTACTS: (state, payload) => {
        state.contacts = payload
    },
}


export const actions = {

    async getLocations({commit}) {
        const data = await this.$axios.$get(`/locations`);
        commit('SET_LOCATIONS', data.countries)
    },
    async getContact({commit}) {
        const data = await this.$axios.$get(`/contact`);
        commit('SET_CONTACTS', data.data)
    },
}
