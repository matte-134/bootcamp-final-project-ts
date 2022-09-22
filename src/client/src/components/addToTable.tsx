import React, {useState, useEffect} from 'react'
import App from '../App'



export const AddToTable = (customer: object) => {
    const [options, setOptions] = useState<any[]>([])
    const [tNumber, setTNumber] = useState('')
    const [custInfo, setCustInfo] = useState<object>({})
    const [custAdded, setCustAdded] = useState<string>('')
    console.log(customer)

    // useEffect(() => {
    //     setCustInfo(customer)}, [customer])
    // console.log(custInfo)
    
    

    const getUnoccupidTables = async () => {
        const res = await fetch('http://localhost:8000/tables/unoccupied/find')
        const data = await res.json()
        // console.log(data)
        setOptions(data)
    }

    useEffect(() => {
        getUnoccupidTables()}, [])
    useEffect(() => {
        setCustInfo(customer)}, [customer])
    
    

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>, customer: object) => {
        ev.preventDefault()
        const postToTable = async (tNumber: any, custInfo: object) => {
            const res = await fetch(`http://localhost:8000/tables/${tNumber}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(custInfo)
            })
        }
        const updateWaitingStatus = async (custInfo: object) => {
            const res = await fetch('http://localhost:8000/customer/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(custInfo)
            })
        }
        postToTable(tNumber, custInfo)
        updateWaitingStatus(custInfo)
        setCustAdded('Customer has been added to Table ' + tNumber)
        
    }


    return (
        <div>
            <form className='addButtonQ' onSubmit={e => handleSubmit(e, customer)}>
                <select className='addButtonQ' onChange={e => setTNumber(e.target.value)}>
                    <option>Select Table Number</option>
                    <optgroup label='Capacity: 2'>
                    {options.map(table => table.capacity === 2 ? <option value={table.tableNumber}>{table.tableNumber}</option> : null)}
                    </optgroup>
                    <optgroup label='Capacity: 4'>
                    {options.map(table => table.capacity === 4 ? <option value={table.tableNumber}>{table.tableNumber}</option> : null)}
                    </optgroup>
                    <optgroup label='Capacity: 6'>
                    {options.map(table => table.capacity === 6 ? <option value={table.tableNumber}>{table.tableNumber}</option> : null)}
                    </optgroup>
                </select>
                <button className='addButtonQ'>Submit</button>
            </form>
            <div className={custAdded === '' ? 'none' : 'addButtonR'}>{custAdded}</div>
        </div>
    )
}
