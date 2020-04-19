export const state = () => ({

})


export const mutations = {

}


export const actions = {


    async sendOrder({commit}, body) {
        await this.$axios.$get(`/mail/${body}`).then(() => {
        })
    },
}
