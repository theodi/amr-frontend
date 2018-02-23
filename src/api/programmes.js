import axios from 'axios'

export const getAllProgrammes = () => {
	return axios.get('https://odi-amr.herokuapp.com/api/programmes')
}
