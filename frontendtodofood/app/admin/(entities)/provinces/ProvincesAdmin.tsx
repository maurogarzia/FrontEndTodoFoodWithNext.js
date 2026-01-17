"use client"

import { IProvince, IRequestProvince } from "../../../../types/models/Province.model"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import Buttons from "../../components/Buttons/Buttons"
import { provinceStore } from "../../../../store/Province/province.store"
import { modalStore } from "../../../../store/Modal/modal.store"
import ChildrenProvince from "./components/ChildrenProvince"
import Modal from "../../../../components/Modal/Modal"
import { createProvince, updatedProvince } from "../../../../services/entities/province/province.service"
import { ICountry } from "../../../../types/models/Country,model"
import { useRouter } from "next/navigation"

interface ProvincessAdminProps {
    provinces : IProvince[],
    countries: ICountry[]
}

function ProvincesAdmin({provinces, countries} : ProvincessAdminProps) {

    const {setActiveEntity, activeEntity} = provinceStore()
    const {view, setView} = modalStore()
    const router = useRouter()

    const provinceColumns: TableColumn<IProvince>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: "name"},
        {header: "Pais", render: (country) => country.country.name},
        {header: "Acciones",
            render: (province) => (
                <Buttons row={province} 
                onEdit={(province) => {
                    setActiveEntity(province)
                    setView(true)
                }} 
                onDelete={(id) => {}}/>
            )
        }
    ]

    // Funcion para abrir modal para crear
    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const handleSubmit = async(formData : FormData) => {
    
        const province: IRequestProvince = {
            id: activeEntity ?  Number(formData.get('id')) as number : null,
            name: formData.get("name") as string,
            country: {
                id: Number(formData.get('country')) 
            }
        }
    
        if (activeEntity) {
    
            await updatedProvince(province, activeEntity.id!)
            router.refresh()
        } else {
            await createProvince(province)
            router.refresh()
        }
        setView(false)
    }

    const children = <ChildrenProvince countries={countries}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                    title={activeEntity ? 'Editar País' : 'Crear País'}
                    setActiveEntity={setActiveEntity}
                    onSubmit={handleSubmit}
                    children={children}
                    />
                </div>
            }

            <TitleAndButton title="PROVINCIAS" titleOfButton="Agregar Provincias" onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={provinces} columns={provinceColumns}/>
            </div>
        </div>
    )
}

export default ProvincesAdmin