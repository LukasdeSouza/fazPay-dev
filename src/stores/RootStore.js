import { createContext } from "react";
import ProductStore from "./ProductStore";
import MainStore from "./MainStore";

class RootStore {
  constructor() {
    this.mainStore = new MainStore()
    this.productStore = new ProductStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext
