"use client"
import { modalStore } from '@/store/Modal/modal.store'
import style from './Modal.module.css'
import React from 'react'


interface ModalProps{
    title: string,
    children: React.ReactNode
    onSubmit: (formData: FormData) => void,
    setActiveEntity: (entity: null) => void
}


function Modal({ title, children, setActiveEntity, onSubmit}: ModalProps) {

    const {setView} = modalStore()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onSubmit(formData)
    }

    const handleClose = () => {
        setView(false)
        setActiveEntity(null)
    }


    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>{title}</p>
            <form onSubmit={handleSubmit}>
                <div className={style.containerData}>
                    {children}
                </div>
                <div className={style.containerButtons}>
                    <button onClick={handleClose}>Cancelar</button>
                    <button type='submit'>Aceptar</button>
                </div>
            </form>
        </div>
    )
}

export default Modal