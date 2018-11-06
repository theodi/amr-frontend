import axios from 'axios'

export const getAllDatasets = () => {
	return axios({
		method: 'get',
		url: 'https://odi-amr.herokuapp.com/api/datasets'
	})
}
