import axios from 'axios'

export const getAllProgrammes = () => {
	return axios({
		method: 'get',
		url: 'https://odi-amr.herokuapp.com/api/programmes'
	})
}
