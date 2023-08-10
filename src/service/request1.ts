import axios from 'axios'

console.log('axios loading')
//axios的实例对象
axios.get(`http://123.207.32.32:8000/home/multidata`).then((resp) => {
  console.log(resp)
})

console.log(process.env)

// axios的配置选项
axios.defaults.baseURL = `http://httpbin.org`
axios.defaults.timeout = 10000

// axios.get('/get').then((resp) => {
//   console.log(resp)
// })

// axios.post('/post', { name: 'tom' }).then((resp) => {
//   console.log(resp)
// })

// axios
//   .all([
//     axios.get(`/get`, { params: { name: 'tom' } }),
//     axios.post(`/post`, { data: { name: 'tom' } })
//   ])
//   .then((resp) => {
//     console.log(resp)
//   })

// 拦截器
// fn1请求成功
// fn2请求失败
// request
axios.interceptors.request.use(
  (config) => {
    console.log('拦截成功')
    console.log(config)
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)

//response
axios.interceptors.response.use(
  (resp) => {
    console.log('response', resp)
    return resp.data
  },
  (err) => {
    console.log(err)
    return err
  }
)

axios.get('/get').then((resp) => {
  console.log(resp)
})

// axios.post('/post', { name: 'tom' }).then((resp) => {
//   console.log(resp)
// })

// export { axios }
