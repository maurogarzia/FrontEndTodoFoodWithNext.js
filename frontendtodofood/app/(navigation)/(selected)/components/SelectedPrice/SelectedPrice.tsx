import Image from 'next/image'
import style from './SelectedPrice.module.css'
import { useState } from 'react'

interface SelectedPriceProps{
    image: string,
    price: number
}

function SelectedPrice({image, price} : SelectedPriceProps) {

    const [counter, setCounter] = useState<number>(1)

    const handleCounter = (type: string) => {
        if (type === 'add') {
            setCounter(counter + 1)
        }

        if (type === 'remove'){
            if (counter < 1) {
                setCounter(0)
            } else {
                setCounter(counter - 1)
            }
        }
    }

    return (
        <div className={style.containerPrincipal}>
            <Image height={150} width={150} alt='' src={image}/>
            <div className={style.containerPriceAndQuantity}>
                <div className={style.quantity}>

                    <span className="material-symbols-outlined" onClick={() => handleCounter('remove')}>remove</span>
                    <p>{counter}</p>
                    <span className="material-symbols-outlined" onClick={() => handleCounter('add')}>add</span>

                </div>
                <p className={style.price}>$ { counter * price}</p>
            </div>
            <button className={style.button}>Agregar al carrito</button>
        </div>
    )
}

export default SelectedPrice