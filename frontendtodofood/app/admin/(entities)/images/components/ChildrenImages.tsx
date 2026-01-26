import { imageStore } from '@/store/Image/image.store'
import style from '../../EntityAdmin.module.css'
import Image from 'next/image'

function ChildrenImages() {

    const {activeEntity} = imageStore()

    return (
        <div className={style.containerData}>
            {activeEntity && 
                <div className={style.previousImage}>
                    <label htmlFor="">Imagen anterior</label>
                    <Image height={100} width={100} alt='' src={activeEntity.url}/>
                </div>
            }

            <label htmlFor="">Seleccionar archivo</label>
            <input type="file" name="file" required={true}/>
        </div>
    )
}

export default ChildrenImages