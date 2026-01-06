'use client'

import { IProductsDetails } from '@/types/models/ProductDetail.model'
import style from './List.module.css'
import { Dispatch, SetStateAction } from 'react'
import { productDetailsStore } from '@/store/ProductDetails/productDetails.store'

interface ListProps{
    details: IProductsDetails[],
    setPrice?: Dispatch<SetStateAction<number>>,
}

function List({details, setPrice} : ListProps) {

    const {setActiveEntity} = productDetailsStore()

    return (
        <div className={style.containerPrincipal}>
            {details.map(detail => (
                <div 
                    key={detail.id} 
                    className={style.item} 
                    onClick={() => {
                        setPrice!(detail.price)
                        setActiveEntity(detail)
                    }}>
                    <p>{detail.product.name} {detail.size.name}</p>
                    <p>(${detail.price})</p>
                </div>
            ))}
        </div>
    )
}

export default List