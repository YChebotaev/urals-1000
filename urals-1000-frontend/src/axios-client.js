import axios from 'axios'

const authTokenInterceptor = config => {
  const bearerToken = localStorage.getItem('bearerToken')
  Object.assign(config.headers, {
    Authorization: `Bearer ${bearerToken}`
  })
  return config
}

export const createClient = () => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
    responseType: 'json'
  })
  client.interceptors.request.use(authTokenInterceptor)
  return client
}
