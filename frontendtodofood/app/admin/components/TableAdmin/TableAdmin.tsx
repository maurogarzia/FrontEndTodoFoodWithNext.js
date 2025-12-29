"use client"

import style from './TableAdmin.module.css'

export interface TableColumn<T> {
    header: string
    accessor?: keyof T
    render?: (row: T) => React.ReactNode
}

interface AdminTableProps<T> {
    data: T[]
    columns: TableColumn<T>[]
}

function TableAdmin<T>({data, columns} : AdminTableProps<T>) {
    return (
        <div className={style.tableWrapper}>
            <table className={style.table}>

                <thead>
                    <tr className={style.column}>
                        {columns.map((col, i) => (
                            <th key={i} className={style.column}>{col.header}</th>
                        ))}
                    </tr>
                    
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col,colIndex) => (
                                <td key={colIndex} className={style.value}> 
                                    {col.render ? col.render(row) : String(row[col.accessor as keyof T])}
                                </td>
                            ))}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default TableAdmin