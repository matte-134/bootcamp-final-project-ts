import React, {useEffect, useState} from 'react'
import './form.css' 

export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [partyNumber, setPartyNumber] = useState<number>(0)
    const [drop, setDrop] = useState<string>('')

    const handleSubmit = (ev: any) => {
        ev.preventDefault()
        const postCustomer = async () => {
            const res = await fetch('http://localhost:8000/customer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'firstName': firstName, 'lastName': lastName, 'email': email, 'partyNumber': partyNumber})
            })
        }
        postCustomer()
        setFirstName('')
        setLastName('')
        setEmail('')
        setDrop('')
        setPartyNumber(0)
    }
    



    return (
        <div className='div'>
            <form className='addCustomer' onSubmit={handleSubmit}>
            <h2 className='heading'>
                Add Customer to Waiting List
            </h2>
            <div className='inputField'>
                <input className='addButtonI' type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                <input className='addButtonI' type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} required/>
                <input className='addButtonI' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <select className='addButtonI' onChange={e => setPartyNumber(parseInt(e.target.value))} required>
                    <option value={drop} label='Select Party Size' selected disabled></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
                <button className='addButtonI'>Submit</button>
            </div>
            </form>
        </div>
    )
}