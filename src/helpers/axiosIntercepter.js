import axios from 'axios'
const request = require('request')

export default function execute () {
	const options = { method: 'POST',
		url: 'https://langphil.eu.auth0.com/oauth/token',
		headers: { 'content-type': 'application/json' },
		body: '{"client_id":"EPtuKkxAda6HbrD2Imdt65AYcTwkS6mF","client_secret":"z2oO6oUE_fnb8QzZGoPwRz5O8HTPcNuU1xRK7Qs5Z1326MtucGZJAZN6cq9UM1JW","audience":"https://odi-amr.herokuapp.com","grant_type":"client_credentials"}' }

	function callAuth () {
		return new Promise(function (resolve, reject) {
			request(options, function (error, response, body) {
				if (error) throw new Error(error)
				resolve(JSON.parse(body).access_token)
			})
		})
	}

	axios.interceptors.request.use(function (config) {
		return callAuth()
			.then(function (response) {
				if (response) {
					config.headers.Authorization = `Bearer ${response}`
				}
				return config
			}, function (err) {
				return Promise.reject(err)
			})
	})
}
