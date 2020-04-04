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
        payload = payload.filter(i => i.country !== 'MS Zaandam' && i.country !== "Diamond Princess");
        let obj = {active: false}
        payload.forEach(function (item) {
            Object.assign(item, obj)
        });
        payload.sort(function (a, b) {

            if (parseInt(a.confirmed) > parseInt(b.confirmed)) {
                return 1;
            }
            if (parseInt(a.confirmed) < parseInt(b.confirmed)) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });
        state.countries = payload.reverse()
    },
    SET_ACTIVE_FALSE: (state, payload) => {
        state.countries.forEach(function (item) {
            if(item.country === payload.country) {
                item.active = true
            } else {
                item.active = false
            }
        });
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
        commit('SET_VIRUS', virusWorldWide);
        commit('SET_LOCAL_VIRUS', local);
    },
    async getCountries({commit}) {
        const countries = await this.$axios.$get('https://covid-19-data.p.rapidapi.com/country/all', {
            headers: {'x-rapidapi-key': 'c3ae9cdbcfmsh29bc65690a77986p10a54bjsn9bc95c48b530'}
        });
        commit('SET_COUNTRIES', countries);
    }
}
