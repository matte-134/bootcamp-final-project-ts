import React, {useEffect, useState} from 'react'
import './form.css' 

export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [partyNumber, setPartyNumber] = useState<number>(0)

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
        setPartyNumber(0)
    }
    



    return (
        <div className='addCustomer'>
            <form onSubmit={handleSubmit}>
            <h2>
                Add Customer to Waiting List
            </h2>
            <div>
                <input className='inputField' type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
            </div>
            <div>
                <input className='inputField' type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} required/>
            </div>
            <div>
                <input className='inputField' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='tableOptions'>
                <select onChange={e => setPartyNumber(parseInt(e.target.value))}>
                    <option>Select Party Size</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </div>
            <button>Sumbit</button>
            </form>
        </div>
    )
}