"use client"

import { IProducts, IRequestProducts } from '@/types/models/Product.model'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { modalStore } from '@/store/Modal/modal.store'
import { productStore } from '@/store/Product/product.store'
import ChildrenProducts from './components/ChildrenProducts'
import { ICategory } from '@/types/models/Category.model'
import { IImage } from '@/types/models/Image.model'
import { createProduct, deleteProduct, updateProduct } from '@/services/entities/products/products.service'
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal/Modal'

interface ProductsAdminProps {
    products: IProducts[],
    categories: ICategory[],
    images: IImage[]
}

function ProductsAdmin({products, categories, images} : ProductsAdminProps) {

    const {setView, view} = modalStore()
    const {setActiveEntity, activeEntity} = productStore()
    const router = useRouter()


    const columnProducts : TableColumn<IProducts>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Descripción", accessor: 'description'},
        {header: "Categoría", render: (product) => product.category.name},
        {header: "Id imagen", render: (product) => product.image.id},
        {header: "Acciones", render: (product) => 
            <Buttons row={product} 
            onEdit={(productSelected) => {
                setActiveEntity(productSelected)
                setView(true)
            }} 
            onDelete={async(productSelected) => {
                await deleteProduct(productSelected.id!)
                router.refresh()
            }}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        const product: IRequestProducts = {
            id: activeEntity? activeEntity.id : null,
            name : formData.get('name') as string,
            description: formData.get('description') as string,
            category: {
                id: Number(formData.get('category'))
            },
            image: {
                id: Number(formData.get('image'))
            }
        }

        if (activeEntity) {
            await updateProduct(product.id!, product)
            router.refresh()
        }else{
            await createProduct(product)
            router.refresh()
        }
    }

    const onCreate =  () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenProducts categories={categories} images={images}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Producto' : 'Crear producto'}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    >
                        {children}
                    </Modal>
                </div>
            }

            <TitleAndButton title='PRODUCTOS' titleOfButton='Agreagar producto' onCreate={onCreate}/>
            <div className={style.table}>
                <TableAdmin data={products} columns={columnProducts}/>
            </div>
        </div>
    )
}

export default ProductsAdmin