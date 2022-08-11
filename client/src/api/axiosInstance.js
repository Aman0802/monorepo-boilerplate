import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => status < 500,
})

axiosConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('before the api call')
    console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

axiosConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('after the api call')
    console.log(response)
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

const responseData = (res) => res.data

const handleErrors = async (err) => {
  if (err && err.response && err.response.status === 401) {
  }
  return Promise.reject(err?.response?.data?.meta ?? err?.message)
}

const handleAxios = {
  delete: async (url) => {
    try {
      return axiosConfig.delete(`${url}`).then(responseData).catch(handleErrors)
    } catch (e) {
      handleErrors(e)
    }
  },
  tokenGet: async (url, cancelTokenObj) => {
    return axiosConfig
      .get(`${url}`, cancelTokenObj) // canceToken Object
      .then(responseData)
  },
  get: async (url, config = null) => {
    return axiosConfig.get(`${url}`, config).then(responseData).catch(handleErrors)
  },
  put: async (url, body) => {
    return axiosConfig
      .put(`${url}`, body, { responseType: 'json' })
      .then(responseData)
      .catch(handleErrors)
  },
  post: async (url, body, config = null) => {
    return axiosConfig.post(`${url}`, body, config).then(responseData).catch(handleErrors)
  },
  patch: async (url, body, config) => {
    return axiosConfig.patch(`${url}`, body, config).then(responseData).catch(handleErrors)
  },
}

export default handleAxios
