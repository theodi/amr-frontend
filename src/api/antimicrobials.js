import axios from 'axios'

export const getAllAntimicrobials = () => {
	return axios.get('https://odi-amr.herokuapp.com/api/antimicrobials')
}
