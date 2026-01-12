'use client'

import { cartStore } from '@/store/Cart/cart.store'
import style from './Cart.module.css'
import CardCart from './components/CardCart/CardCart'
import { useEffect, useState } from 'react'
import { succesAlert } from '@/utils/succesAlert'

function Cart( ) {

    const {elements, emptyCart} = cartStore()
    const [priceExcludingIVA, setPriceExcludingIVA] = useState<number>(0)
    const iva = priceExcludingIVA * 0.21
    

    useEffect(() => {
        const handlePrice = () => {
            let counter = 0
            elements.forEach(e => {
                counter += e.price
            })
            setPriceExcludingIVA(counter)
        }
        handlePrice()
    },[elements])

    const handleSubmit = () => {
        alert("Estamos trabajando en la implementación de pago ;)")
    }

    const handleEmptyCart = () => {
        emptyCart()
        succesAlert('Vaciado', 'Se vació el carrito')
    }

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Carrito</p>
            {elements.length < 1 ? 
                <div className={style.emptyCart}>
                    <p>El carrito esta vacío</p>
                </div>
                :
                <div className={style.cartFull}>

                    <div className={style.containerResume}>
                        <div className={style.resume}>
                        
                            <p>Cantidad de pedidos: {elements.length}</p>
                            <p>Precio total: $ {priceExcludingIVA}</p>
                            <p>IVA: $ {iva}</p>
                            <p>Precio + IVA: $ {priceExcludingIVA + iva}</p>

                            <button className={style.payButton} onClick={handleSubmit}>PAGAR</button>
                        </div>
                    </div>
                    
                    <div className={style.items}>
                        <p className={style.subTitle}>
                            Pedidos
                            <button onClick={() => handleEmptyCart()}>Vaciar carrito</button>    
                        </p>
                        <div className={style.cards}>
                            {elements.map((e) => 
                                <CardCart key={e.id} cartElement={e}/>
                            )}
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Cart