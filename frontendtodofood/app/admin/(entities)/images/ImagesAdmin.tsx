"use client"
import { IImage } from '../../../../types/models/Image.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import Image from 'next/image'
import ChildrenImages from './components/ChildrenImages'
import { modalStore } from '../../../../store/Modal/modal.store'
import { imageStore } from '../../../../store/Image/image.store'
import { createImage, deletedImage, updatedImages } from '../../../../services/entities/images/images.service'
import { useRouter } from 'next/navigation'
import Modal from '../../../../components/Modal/Modal'

interface ImagesAdminProps{
    images: IImage[]
}

function ImagesAdmin({images} : ImagesAdminProps) {

    const {activeEntity, setActiveEntity} = imageStore()
    const {view, setView} = modalStore()
    const router = useRouter()

    const columnImages : TableColumn<IImage>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Url', accessor: 'url'},
        {header: 'Imagen', render: (image) => <Image src={image.url} height={150} width={150} alt=''/>},
        {header: 'Acciones', render: (image) => 
            <Buttons row={image} 
            onEdit={(selectedImage) => {
                setActiveEntity(selectedImage)
                setView(true)
            }} 
            onDelete={async(selectedImage) => {
                await deletedImage(selectedImage.id)
                router.refresh()
            }}/>
        },
    ]

    const handleSubmit = async (formData : FormData) => {
        const file = formData.get("file") as File 

        if (file && file?.size === 0) return 

        if (file){
            if (activeEntity) {
                await updatedImages(file, activeEntity?.id!)
                router.refresh()
            } else {
                await createImage(file)
                router.refresh()
            }
        }

    }


    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenImages/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Imágen' : 'Crear Imágen'}
                        children={children}
                        onSubmit={handleSubmit}
                        setActiveEntity={setActiveEntity}
                    />
                </div>
            }
            
            <TitleAndButton title='IMÁGENES' titleOfButton='Agregar imágen' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={images} columns={columnImages}/>
            </div>
        </div>
    )
}

export default ImagesAdmin