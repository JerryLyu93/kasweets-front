import axios from 'axios'

axios.defaults.timeout = 10000

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (response) {
  // Do something with response error
  if (response.status === 401) {
    console.log('401unlog')
  } else if (response.status === 404) {
    console.log('404notfound')
    window.history.back()
  }
  return Promise.reject(response)
})
export default {
  axios: axios
}
