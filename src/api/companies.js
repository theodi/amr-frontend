import axios from 'axios'

export const getAllCompanies = () => {
	return axios.get('https://odi-amr.herokuapp.com/api/companies')
}
