"use client"
import { IImage } from '@/types/models/Image.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import Image from 'next/image'

interface ImagesAdminProps{
    images: IImage[]
}

function ImagesAdmin({images} : ImagesAdminProps) {

    const columnImages : TableColumn<IImage>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Url', accessor: 'url'},
        {header: 'Imagen', render: (image) => <Image src={image.url} height={150} width={150} alt=''/>},
        {header: 'Acciones', render: (image) => 
            <Buttons row={image} onEdit={(selectedImage) => {}} onDelete={(id) => {}}/>
        },
    ]

    return (
        <div className={style.containerPrincipal}>
            
            <TitleAndButton title='IMÁGENES' titleOfButton='Agregar imágen'/>

            <div className={style.table}>
                <TableAdmin data={images} columns={columnImages}/>
            </div>
        </div>
    )
}

export default ImagesAdmin