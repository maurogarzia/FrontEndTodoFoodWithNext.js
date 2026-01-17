import Image from 'next/image'
import style from './SelectedPrice.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ICart } from '@/types/models/Cart.model'
import { cartStore } from '@/store/Cart/cart.store'
import { errorAlert } from '@/utils/errorAlert'

interface SelectedPriceProps{
    image: string,
    price: number,
    name: string
}

function SelectedPrice({image, price, name} : SelectedPriceProps) {

    const router = useRouter()
    const {addElement} = cartStore()
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
    
    
    const handleSubmit = () => {

        const cartElement : ICart = {
            id: crypto.randomUUID(),
            name:name,
            price: price * counter,
            quantity: counter,
            image: image
        }

        if (price < 1) {
            errorAlert('Error','Debe elegir un tamaño')
            return
        }

        addElement(cartElement)
        router.push('/cart')
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
            <button className={style.button} onClick={handleSubmit}>Agregar al carrito</button>
        </div>
    )
}

export default SelectedPrice