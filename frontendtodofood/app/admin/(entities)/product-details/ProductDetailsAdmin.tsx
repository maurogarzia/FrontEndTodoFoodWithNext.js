"use client"

import { IProductsDetails } from '@/types/models/ProductDetail.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface ProductDetailsAdminProps{
  productDetails: IProductsDetails[]
}


function ProductDetailsAdmin({productDetails} : ProductDetailsAdminProps) {

  const columnsProductsDetails : TableColumn<IProductsDetails>[] = [
    {header: "id", accessor: 'id'},
    {header: "Stock", accessor: 'stock'},
    {header: "Precio", accessor: 'price'},
    {header: "Tamaño", render: (productDetail) => productDetail.size.name},
    {header: "Producto", render: (productDetail) => productDetail.product.name},
    {header: "Acciones", render: (productDetail) => 
      <Buttons row={productDetail} onEdit={(selectedDetail) => {}} onDelete={(id) => {}}/>
    },
  ]

  return (
    <div className={style.containerPrincipal}>

      <TitleAndButton title='DETALLES DE PRODUCTO' titleOfButton='Agregar detalles'/>

      <div className={style.table}>
        <TableAdmin data={productDetails} columns={columnsProductsDetails}/>
      </div>
    </div>
  )
}

export default ProductDetailsAdmin