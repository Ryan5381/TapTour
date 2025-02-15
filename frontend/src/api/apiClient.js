import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/',  // 🔹 使用環境變數
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export default apiClient
