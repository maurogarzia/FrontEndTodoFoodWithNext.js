"use client"

import { IProductsDetails, IRequestProductsDetails } from '../../../../types/models/ProductDetail.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { ISize } from '../../../../types/models/Size.model'
import { IProducts } from '../../../../types/models/Product.model'
import { modalStore } from '../../../../store/Modal/modal.store'
import { productDetailsStore } from '../../../../store/ProductDetails/productDetails.store'
import ChildrenProductDetails from './components/ChildrenProductDetails'
import { useRouter } from 'next/navigation'
import { createProductDetails, deleteProductDetails, updatedProductDetails } from '../../../../services/entities/productDetails/productDetails.service'
import Modal from '../../../../components/Modal/Modal'

interface ProductDetailsAdminProps{
  productDetails: IProductsDetails[]
  sizes: ISize[],
  products: IProducts[]
}


function ProductDetailsAdmin({productDetails, sizes, products} : ProductDetailsAdminProps) {

  const {setView, view} = modalStore()
  const {activeEntity, setActiveEntity} = productDetailsStore()
  const router = useRouter()

  const columnsProductsDetails : TableColumn<IProductsDetails>[] = [
    {header: "id", accessor: 'id'},
    {header: "Stock", accessor: 'stock'},
    {header: "Precio", accessor: 'price'},
    {header: "Tamaño", render: (productDetail) => productDetail.size.name},
    {header: "Producto", render: (productDetail) => productDetail.product.name},
    {header: "Acciones", render: (productDetail) => 
      <Buttons row={productDetail} 
      onEdit={(selectedDetail) => {
        setActiveEntity(selectedDetail)
        setView(true)
      }} 
      onDelete={async(selectedDetail) => {
        await deleteProductDetails(selectedDetail.id)
        router.refresh()
      }}/>
    },
  ]

  const handleSubmit = async(formData : FormData) => {
    const productDetails : IRequestProductsDetails = {
      id: activeEntity ? activeEntity.id : null,
      stock: Number(formData.get("stock")),
      price: Number(formData.get("price")),
      size: {
        id: Number(formData.get("size"))
      },
      product: {
        id: Number(formData.get("product"))
      }
    }

    if (activeEntity) {
      await updatedProductDetails(productDetails, productDetails.id!)
      router.refresh()
    } else {
      await createProductDetails(productDetails)
      router.refresh
    }
  }

  const onCreate = () => {
    setView(true)
    setActiveEntity(null)
  }

  const children = <ChildrenProductDetails sizes={sizes} products={products}/>

  return (
    <div className={style.containerPrincipal}>

      {view && 
        <div className={style.modalBackdrop}>
          <Modal
            title={activeEntity ? 'Editar Detalle de Producto' : 'Crear Detalle de Producto'}
            setActiveEntity={setActiveEntity}
            children={children}
            onSubmit={handleSubmit}
          />
        </div>
      }

      <TitleAndButton title='DETALLES DE PRODUCTO' titleOfButton='Agregar detalles' onCreate={onCreate}/>

      <div className={style.table}>
        <TableAdmin data={productDetails} columns={columnsProductsDetails}/>
      </div>
    </div>
  )
}

export default ProductDetailsAdmin