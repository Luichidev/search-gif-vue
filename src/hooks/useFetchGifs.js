import getGifs from '@/services/getGifs'

const services = {
	async getGifsApi() {
		return await getGifs()
	}
}

export { services }
