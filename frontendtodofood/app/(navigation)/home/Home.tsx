"use client"

import { IPromotion } from '@/types/models/Promotions.model'
import style from './home.module.css'
import Card from '@/components/Card/Card'
import image1 from '../../../assets/imagesCarrusel/image1.webp'
import image2 from '../../../assets/imagesCarrusel/image2.webp'
import image3 from '../../../assets/imagesCarrusel/image3.webp'
import image4 from '../../../assets/imagesCarrusel/image4.webp'
import img from '../../../assets/image.png'
import Image from 'next/image'
import { useState } from 'react'

interface HomeProps{
    actuallyPromotions: IPromotion[]
}

function Home({actuallyPromotions} : HomeProps) {

    const carruselArray = [image1, image2, image3, image4]
    const [index, setIndex] = useState<number>(0)

    // Funcion para mover el carrusel
    const handleIndex = (movement: 'sum' | 'res') => {

        const selectedIndex = index

        if (movement === 'sum') {
            if (selectedIndex === 3) return setIndex(0)
            setIndex(selectedIndex + 1)
        }

        if (movement === 'res'){
            if (selectedIndex === 0) return setIndex(3)
                setIndex(selectedIndex - 1)
        }
    }

    return (
        <div className={style.home}>

            {/* Imagen */}
            <div className={style.billboard}>
                <Image height={100} width={1450} alt='' src={img}/>
            </div>

            

            {/* Carrusel */}

            <div className={style.carrusel}>
                <Image className={style.image} height={400} width={500} src={carruselArray[index]} alt=''/>
                <Image className={style.imageResponsive} height={200} width={250} src={carruselArray[index]} alt=''/>
                <div className={style.arrows}>
                    <p onClick={() => handleIndex('res')}>
                        <span className="material-symbols-outlined">arrow_left</span>
                    </p>
                    <p onClick={() => handleIndex('sum')}>
                        <span className="material-symbols-outlined">arrow_right</span>
                    </p>
                </div>
            </div>


            <p className={style.title}>Último día de promociones</p>

            <div className={style.cards}>
                {actuallyPromotions.map(promotion => 
                    <Card key={promotion.id} name={promotion.name} image={promotion.image}/>
                ) }
            </div>
        </div>
    )
}

export default Home