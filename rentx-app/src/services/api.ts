import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.72:3333',
})

/*api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Do something with response data

    console.log(response)

    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)*/
