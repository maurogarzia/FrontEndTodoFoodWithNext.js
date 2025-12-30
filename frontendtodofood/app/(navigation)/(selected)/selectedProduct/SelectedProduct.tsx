"use client"

import { productStore } from '@/store/Product/product.store'
import style from '../Selected.module.css'
import { IProductsDetails } from "@/types/models/ProductDetail.model"
import List from './components/List/List'
import { useState } from 'react'
import SelectedPrice from '../components/SelectedPrice/SelectedPrice'

interface SelectedProductProps{
  productsDetails: IProductsDetails[]
}

function SelectedProduct({productsDetails} : SelectedProductProps) {

  const {activeEntity} = productStore()
  const [price, setPrice] = useState<number>(0)

  const details = productsDetails.filter( detail => detail.product.id === activeEntity?.id)
  

  return (
    <div className={style.containerPrincipal}>
      
      <div className={style.containerInformation}>

        <div className={style.information}>
          <p className={style.title}>{activeEntity?.name}</p>
          <p className={style.description}>{activeEntity?.description}</p>

          <List details={details} setPrice={setPrice}/>
        </div>

        <div className={style.image}>
          <SelectedPrice image={activeEntity?.image.url!} price={price} />
        </div>

      </div>
    </div>
  )
}

export default SelectedProduct