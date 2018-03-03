import axios from 'axios'

export const getAllCompanies = () => {
	return axios({
		method: 'get',
		url: 'https://odi-amr.herokuapp.com/api/companies'
	})
}
