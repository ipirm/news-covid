export const state = () => ({
    virusWorldWide: null,
    virusLocalData: null,
    countries: null,
    map: null,
    dataPaths: null
})


export const mutations = {
    SET_LOCAL_MAP: (state, payload) => {
        state.virusLocalData = payload
    },
    SET_VIRUS: (state, payload) => {
        state.virusWorldWide = payload;
    },
    SET_PATHS_VIRUS: (state, payload) => {
        state.dataPaths = payload.map((item) => {
            return Object.assign(item, {active: false});
        });
        state.dataPaths.sort(function (a, b) {

            if (parseInt(a.confirmed) > parseInt(b.confirmed)) {
                return 1;
            }
            if (parseInt(a.confirmed) < parseInt(b.confirmed)) {
                return -1;
            }
            return 0;
        });
        state.dataPaths.reverse()
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
            return 0;
        });
        state.countries = payload.reverse()
    },
    SET_ACTIVE_FALSE: (state, payload) => {
        state.countries.forEach(function (item) {
            if (item.country === payload.country) {
                item.active = true
            } else {
                item.active = false
            }
        });
    },
    SET_AZE_ACTIVE_COUNTRIES: (state, payload) => {
        state.dataPaths.forEach(function (item) {
            if (item.id === payload.id) {
                item.active = true
            } else {
                item.active = false
            }
        });
    },
    SET_MAP: (state, payload) => {
        state.map = payload;
    }
}


export const actions = {

    async getVirus({commit}) {
        const local = await this.$axios.$get('https://api.covid19api.com/summary');
        commit('SET_VIRUS', local);
    },
    async getCountries({commit}) {
        const countries = await this.$axios.$get('https://covid-19-data.p.rapidapi.com/country/all', {
            headers: {'x-rapidapi-key': 'c3ae9cdbcfmsh29bc65690a77986p10a54bjsn9bc95c48b530'}
        });
        commit('SET_COUNTRIES', countries);
    },
    async getWorldMap({commit}) {
        const data = await this.$axios.$get('world')
        commit('SET_MAP', data.world);
    },
    async getLocalMap({commit}) {
        const data = await this.$axios.$get('local-map')
        commit('SET_LOCAL_MAP', data.maps);
    },
    async getPathMap({commit}) {
        const data = await this.$axios.$get('paths')
        commit('SET_PATHS_VIRUS', data.locals);
    }
}
