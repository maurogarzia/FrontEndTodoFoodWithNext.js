import { getAllProductsDetails } from "../../../../services/entities/productDetails/productDetails.service"
import ProductDetailsAdmin from "./ProductDetailsAdmin"
import { getAllSizes } from "../../../../services/entities/size/size.service"
import { getAllProducts } from "../../../../services/entities/products/products.service"

async function getData() {
  
  const productDetails = await getAllProductsDetails()
  const sizes = await getAllSizes()
  const products = await getAllProducts()

  return {sizes, products, productDetails}
}

async function ProductDetails() {

  const {productDetails, sizes, products} = await getData()

  return (
    <ProductDetailsAdmin productDetails={productDetails} products={products} sizes={sizes}/>
  )
}

export default ProductDetails