import { getAllProducts } from "@/services/entities/products/products.service"
import ProductsAdmin from "./ProductsAdmin"

async function getData() {
  return await getAllProducts()
}

async function Products() {

  const products = await getData()

  return (
    <ProductsAdmin products={products}/>
  )
}

export default Products