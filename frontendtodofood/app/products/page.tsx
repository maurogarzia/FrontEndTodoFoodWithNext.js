import Card from "@/components/Card/Card"
import { getAllProducts } from "@/services/entities/products/products.service"
import style from './Products.module.css'
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory"

async function fetchProducts () {
  return await getAllProducts()
}

async function Products() {

  const products = await fetchProducts()

  // Hamburguesas
  const burguers = products.filter((product) => product.category.name === 'Hamburguesas')

  // Acompanamiento
  const accompaniment = products.filter((product) => product.category.name === 'Acompañamiento')

  // Bebidas
  const drinks = products.filter((product) => product.category.name === 'Bebidas')

  // Vegetariano
  const veggie = products.filter((products) => products.category.name === 'Vegetariano')

  
  

  return (
    <div className={style.containerPrincipal}>
      <ProductsByCategory title={'Hamburguesas'} products={burguers}/>
      <ProductsByCategory title={'Vegetariano'} products={veggie}/>
      <ProductsByCategory title={'Acompañamientos'} products={accompaniment}/>
      <ProductsByCategory title={'Bebidas'} products={drinks}/>
    </div>
  )
}

export default Products