let BASE_URL = 'http://123.207.32.32:8000'
const BASE_NAME = 'tom'
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://ms/production'
} else {
  BASE_URL = 'http://ms/test'
}

export { BASE_URL, BASE_NAME, TIME_OUT }
