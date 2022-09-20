import React, {useState, useEffect} from 'react'

export const AddToTable = (custInfo: object) => {
    const [addToTable, setAddToTable] = useState<boolean>(false)
    const [options, setOptions] = useState<any[]>([])
    const [tNumber, setTNumber] = useState('')
    

    const getUnoccupidTables = async () => {
        const res = await fetch('http://localhost:8000/tables/unoccupied/find')
        const data = await res.json()
        console.log(data)
        setOptions(data)
    }

    useEffect(() => {
        getUnoccupidTables()}, [])
    

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>, custInfo: object) => {
        ev.preventDefault()
        const postToTable = async (tNumber: any, custInfo: object) => {
            const res = await fetch(`http://localhost:8000/tables/${tNumber}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({custInfo})
            })

        }
        postToTable(tNumber, custInfo)
        
    }


    return (
        <div>
            <form onSubmit={e => handleSubmit(e, custInfo)}>
                <select onChange={e => setTNumber(e.target.value)}>
                    {options.map(table => <option value={table.tableNumber}>{table.tableNumber}</option>)}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}