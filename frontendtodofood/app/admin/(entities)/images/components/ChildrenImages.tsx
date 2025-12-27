import { imageStore } from '@/store/Image/image.store'
import style from '../../EntityAdmin.module.css'
import Image from 'next/image'
import { useState } from 'react'

function ChildrenImages() {

    const {activeEntity} = imageStore()

    return (
        <div className={style.containerData}>
            {activeEntity && 
                <div className={style.previousImage}>
                    <label htmlFor="">Imágen anterior</label>
                    <Image height={100} width={100} alt='' src={activeEntity.url}/>
                </div>
            }

            <label htmlFor="">Seleccionar archivo</label>
            <input type="file" name="file"/>
        </div>
    )
}

export default ChildrenImages