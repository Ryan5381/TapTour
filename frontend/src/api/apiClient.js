import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://taptour-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default apiClient