"use client"

import { IProducts } from '@/types/models/Product.model'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface ProductsAdminProps {
    products: IProducts[]
}

function ProductsAdmin({products} : ProductsAdminProps) {

    const columnProducts : TableColumn<IProducts>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Descripción", accessor: 'description'},
        {header: "Categoría", render: (product) => product.category.name},
        {header: "Id imágen", render: (product) => product.image.id},
        {header: "Acciones", render: (product) => 
            <Buttons row={product} onEdit={(productSelected) => {}} onDelete={(id) => {}}/>
        }
    ]

    return (
        <div className={style.containerPrincipal}>
            <TitleAndButton title='PRODUCTOS' titleOfButton='Agreagar producto'/>
            <div className={style.table}>
                <TableAdmin data={products} columns={columnProducts}/>
            </div>
        </div>
    )
}

export default ProductsAdmin