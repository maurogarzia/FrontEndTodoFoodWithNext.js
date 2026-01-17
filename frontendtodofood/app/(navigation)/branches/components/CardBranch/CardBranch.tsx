"use client"

import { IBranch } from '@/types/models/Branch.model'
import style from './CardBranch.module.css'

interface CardBranchProps{
    branch: IBranch
}

function CardBranch({branch} : CardBranchProps) {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>{branch.name}</p>
            <p className={style.location}>{branch.address.street} {branch.address.number} ({branch.address.locality.name})</p>
            <div className={style.buttons}>
                <a 
                    href={
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address.street + ' ' + branch.address.number)}`
                        } 
                        target="_blank" rel="noopener noreferrer">
                            Ver ubicación
                </a>
                <a
                    href={`https://wa.me/${branch.number}?text=${encodeURIComponent('Hola, quisiera pedir del menú')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Consultar
                </a>
            </div>
        </div>
    )
}

export default CardBranch