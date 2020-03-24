import axios from 'axios'
import constants from './../../constants'


const api_base = () => {
  return axios.create({
    baseURL: constants.API_URL,
  })
}

export default api_base
