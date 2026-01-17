"use client"

import { productStore } from '../../../../store/Product/product.store'
import style from '../Selected.module.css'
import { IProductsDetails } from "../../../../types/models/ProductDetail.model"
import List from './components/List/List'
import { useState } from 'react'
import SelectedPrice from '../components/SelectedPrice/SelectedPrice'
import { productDetailsStore } from '../../../../store/ProductDetails/productDetails.store'

interface SelectedProductProps{
  productsDetails: IProductsDetails[]
}

function SelectedProduct({productsDetails} : SelectedProductProps) {

  const product = productStore(state => state.activeEntity)
  const [price, setPrice] = useState<number>(0)
  const productDetail = productDetailsStore(state => state.activeEntity)

  const details = productsDetails.filter( detail => detail.product.id === product?.id)
  

  return (
    <div className={style.containerPrincipal}>
      
      <div className={style.containerInformation}>

        <div className={style.information}>
          <p className={style.title}>{product?.name}</p>
          <p className={style.description}>{product?.description}</p>

          <List details={details} setPrice={setPrice}/>
        </div>

        <div className={style.image}>
          <SelectedPrice image={product?.image.url!} price={price} name={`${productDetail?.product.name!} ${productDetail?.size.name}`}/>
        </div>

      </div>
    </div>
  )
}

export default SelectedProduct