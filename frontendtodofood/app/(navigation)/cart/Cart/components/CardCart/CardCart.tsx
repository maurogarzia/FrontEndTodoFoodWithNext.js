import { ICart } from '@/types/models/Cart.model'
import style from './CardCart.module.css'
import Image from 'next/image'
import { cartStore } from '@/store/Cart/cart.store'

interface CardCartProps{
    cartElement: ICart,
    
}

function CardCart({cartElement}: CardCartProps) {

    const {removeElement} = cartStore()

    return (
        <div className={style.containerPrincipal}>
            <div className={style.image}>
                <Image height={50} width={50} alt='' src={cartElement.image}/>
            </div>
            <div className={style.content}>
                <p>{cartElement.quantity}</p>
                <p>
                    {cartElement.name}
                </p>
                <p>${cartElement.price}</p>
            </div>

            <div onClick={() => removeElement(cartElement.id)} className={style.buttonDelete}>
                <span className="material-symbols-outlined">delete</span>
            </div>
        </div>
        
    )
}

export default CardCart