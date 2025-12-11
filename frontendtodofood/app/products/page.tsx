import Card from "@/components/Card/Card"
import { getAllProducts } from "@/services/entities/products/products.service"

async function fetchProducts () {
  return await getAllProducts()
}

async function Products() {

  const products = await fetchProducts()

  return (
    <div>
      {products.map((product) => 
        <Card key={product.id} name={product.name} image={product.image} category={product.category}/>  
      )}
    </div>
  )
}

export default Products