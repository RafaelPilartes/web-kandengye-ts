import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { BaseURL } from '../utils/urlApi'

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 15000, // 15 seconds
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
apiClient.interceptors.request.use(
  (config: any) => {
    // Add auth token if available (from localStorage or context)
    const token = localStorage.getItem('authToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error: AxiosError) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Transform response data if needed
    return response
  },
  (error: AxiosError) => {
    // Global error handling
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken')
          console.error('Unauthorized access - please login again')
          break
        case 403:
          console.error('Forbidden - you do not have permission')
          break
        case 404:
          console.error('Resource not found')
          break
        case 500:
          console.error('Internal server error')
          break
        default:
          console.error(`Error ${error.response.status}:`, error.message)
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network error - no response from server')
    } else {
      // Something else happened
      console.error('Request error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default apiClient
