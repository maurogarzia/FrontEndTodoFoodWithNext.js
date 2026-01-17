import { IProducts } from '../../../../../types/models/Product.model'
import style from './ProductsByCategory.module.css'
import Card from '../../../../../components/Card/Card'

interface ProductsByCategoryProps{
    title: string
    products: IProducts[]
}

function ProductsByCategory({title, products} : ProductsByCategoryProps) {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>{title}</p>
            {
                products.length < 1
                    ?
                    <p className={style.empty}>Sin stock disponible</p>
                    :
                    <div className={style.cards}>
                        {products.map((product) => 
                            <Card key={product.id} name={product.name} image={product.image} category={product.category} entity={product}/>
                        )}
                    </div>
            }
        </div>
    )
}

export default ProductsByCategory