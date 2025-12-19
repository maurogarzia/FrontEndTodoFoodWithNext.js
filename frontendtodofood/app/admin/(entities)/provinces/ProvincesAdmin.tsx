"use client"

import { IProvince } from "@/types/models/Province.model"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import Buttons from "../../components/Buttons/Buttons"
import { provinceStore } from "@/Store/Province/province.store"

interface ProvincessAdminProps {
    provinces : IProvince[]
}

function ProvincesAdmin({provinces} : ProvincessAdminProps) {

    const {setActiveEntity, activeEntity} = provinceStore()

    const provinceColumns: TableColumn<IProvince>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: "name"},
        {header: "Pais", render: (country) => country.country.name},
        {header: "Acciones",
            render: (province) => (
                <Buttons row={province} 
                onEdit={(province) => {
                    setActiveEntity(province)
                    alert(activeEntity?.name)
                }} 
                onDelete={(id) => {}}/>
            )
        }
    ]

    return (
        <div className={style.containerPrincipal}>
            <TitleAndButton title="PROVINCIAS" titleOfButton="Agregar Provincias"/>

            <div className={style.table}>
                <TableAdmin data={provinces} columns={provinceColumns}/>
            </div>
        </div>
    )
}

export default ProvincesAdmin