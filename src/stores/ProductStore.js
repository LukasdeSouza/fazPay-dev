import { action, makeAutoObservable, observable } from "mobx"

class ProductStore {
  state = {
    products: [],
    product: {}
  }
  loading = false

  constructor() {
    makeAutoObservable(this, {
      state: observable,
      setState: action
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setLoading(value) {
    this.loading = value
  }
}


export default ProductStore
