export const state = () => ({

});

export const mutations = {

}

export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('news/getBanners');
		await dispatch('news/getCats');
		await dispatch('virus/getCountries');
		await dispatch('virus/getVirus');
		await dispatch('virus/getCountriesByDay');
	}
}
