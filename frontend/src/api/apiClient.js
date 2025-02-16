import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    'https://taptour-production.up.railway.app/',
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
})


export default apiClient
