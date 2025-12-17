"use client"

import { ICategory } from "@/types/models/Category.model"
import { IImage } from "@/types/models/Image.model"
import Image from "next/image"
import style from './Card.module.css'

interface Props{
    name: string,
    image: IImage,
    category?: ICategory 
}

function Card({name, image, category} : Props) {

  return (
    <div className={style.containerPrincipal}>
      <p>{name}</p>
      <Image height={40} width={40} src={image.url} alt=""/>
      <button>Pedir</button>
    </div>
  )
}

export default Card