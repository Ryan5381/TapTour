const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://taptour-production.up.railway.app/'

const apiClient = async (
  endpoint,
  { method = 'GET', body, headers = {} } = {}
) => {
  const config = {
    method,
    credentials: 'include', // 允許帶上 cookie
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new Error(errorData?.error || '發生錯誤')
    }

    return await response.json()
  } catch (error) {
    console.error('❌ API 請求錯誤:', error.message)
    throw error
  }
}

export default apiClient
