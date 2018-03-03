import axios from 'axios'

export default function execute () {
	axios.interceptors.request.use(function (config) {
		var token = API_KEY

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	}, function (err) {
		return Promise.reject(err)
	})
}
