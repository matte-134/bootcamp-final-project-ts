import React, {useState, useEffect} from 'react'

export const AddToTable = () => {
    const [addToTable, setAddToTable] = useState<boolean>(false)
    const [options, setOptions] = useState<any[]>([])
    const [tNumber, setTNumber] = useState('')

    const getUnoccupidTables = async () => {
        const res = await fetch('http://localhost:8000/unoccupied/find')
        const data = await res.json()
        setOptions(data)
    }
    getUnoccupidTables()

    const handleSubmit = (ev: any) => {
        ev.preventDefault()
        const postToTable = async (tNumber: any) => {
            const res = await fetch(`http://localhost:8000/tables/${tNumber}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({})
            })

        }
        postToTable(tNumber)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={e => setTNumber(e.target.value)}>
                    {options.map(table => <option value={table.tableNumber}>{table.tableNumber}</option>)}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}