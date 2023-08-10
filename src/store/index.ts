import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'tom'
    }
  }
})

export default store
