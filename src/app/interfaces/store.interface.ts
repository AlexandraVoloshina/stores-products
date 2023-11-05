export interface IStore {
    name: string
    products: Product[]
  }
  
  export interface Product {
    id: number
    amount: number
  }

export interface IProducts {
  id: number
  name: string
}

export interface IStoreItem {
  name: string
  amounts: number
  productName: string
  amountProduct: number
}
  