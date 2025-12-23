"use client"

import { ICategory } from "@/types/models/Category.model"
import { IImage } from "@/types/models/Image.model"
import Image from "next/image"
import style from './Card.module.css'
import { productStore } from "@/store/Product/product.store"
import { promotionStore } from "@/store/Promotion/promotion.store"
import { IProducts } from "@/types/models/Product.model"
import { IPromotion } from "@/types/models/Promotions.model"
import { useRouter } from "next/navigation"
import { Routes } from "@/routes/NavigationRoutes/routes.navigation"

interface Props{
    entity: IProducts | IPromotion
    name: string,
    image: IImage,
    category?: ICategory 
}

function Card({name, image, category, entity} : Props) {

  const router = useRouter()

  const setProduct = productStore(state => state.setActiveEntity)
  const setPromotion = promotionStore(state => state.setActiveEntity)
  
  const handleRedirect = () => {
    if (category){
      
      setProduct(entity as IProducts)
      router.push(Routes.SELECTED_PRODUCT)
    } else {
      
      setPromotion(entity as IPromotion)
      router.push(Routes.SELECTED_PROMOTION)
    }
  }

  return (
    <div className={style.containerPrincipal}>

      <p className={style.title}>{name}</p>

      <div className={style.image}>
        <Image height={250} width={250} src={image.url} alt=""/>
      </div>

      <button onClick={handleRedirect} className={style.button}>Pedir</button>
    </div>
  )
}

export default Card