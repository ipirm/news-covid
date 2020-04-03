export const state = () => ({
    virusWorldWide: null,
    virusLocal: null,
    countries: null
})


export const mutations = {
    SET_VIRUS: (state, payload) => {
        state.virusWorldWide = payload;
    },
    SET_LOCAL_VIRUS: (state, payload) => {
        state.virusLocal = payload
    },
    SET_COUNTRIES: (state, payload) => {
        state.countries = payload
    }
}


export const actions = {

    async getVirus({commit}) {
        const virusWorldWide = await this.$axios.$get('https://covid-19-data.p.rapidapi.com/totals', {
            headers: {'x-rapidapi-key': 'c3ae9cdbcfmsh29bc65690a77986p10a54bjsn9bc95c48b530'}
        });
        const local = await this.$axios.$get('https://covid-19-data.p.rapidapi.com/country', {
            headers: {'x-rapidapi-key': 'c3ae9cdbcfmsh29bc65690a77986p10a54bjsn9bc95c48b530'},
            params: {
                name: 'azerbaijan'
            }
        });
        commit('SET_VIRUS',virusWorldWide);
        commit('SET_LOCAL_VIRUS',local);
    },
    async getCountries({commit}) {
        const countries = await this.$axios.$get('https://covid-19-data.p.rapidapi.com/country/all', {
            headers: {'x-rapidapi-key': 'c3ae9cdbcfmsh29bc65690a77986p10a54bjsn9bc95c48b530'}
        });
        commit('SET_COUNTRIES',countries);
    }
}
