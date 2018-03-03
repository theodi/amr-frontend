import axios from 'axios'

export const getAllAntimicrobials = () => {
	return axios({
		method: 'get',
		url: 'https://odi-amr.herokuapp.com/api/antimicrobials'
	})
}
