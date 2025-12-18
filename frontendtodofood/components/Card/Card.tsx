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

      <p className={style.title}>{name}</p>

      <div className={style.image}>
        <Image height={250} width={250} src={image.url} alt=""/>
      </div>

      <button className={style.button}>Pedir</button>
    </div>
  )
}

export default Card