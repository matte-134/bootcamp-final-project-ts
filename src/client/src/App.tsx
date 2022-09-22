import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Names } from './components/customers';
import { Form } from './components/form';
import { AddToTable } from './components/addToTable';
import { TableHeader, WaitingHeader } from './components/headers';
import { DateTime } from 'luxon'

export default function App() {
  const [customerList, setCustomerList] = useState<any[]>([])
  const [button, setButton] = useState<boolean>(false)
  const [oneCust, setOneCust] = useState<any[]>([])
  const [showAdd, setShowAdd] = useState<boolean>(false)
  const [customer, setCustomer] = useState<object>({})
  const [tableList, setTableList] = useState<any[]>([])
  const [showWaitHead, setShowWaitHead] = useState<boolean>(false)
  const [showTableHead, setShowTableHead] = useState<boolean>(false)
  const [showCustInfoState, setShowCustInfoState] = useState<any[]>([])
  const [header, setHeader] = useState<string>('Welcome')
  const [tNum, setTNum] = useState<number>(0)


  const showList = async () => {
    const res = await fetch('http://localhost:8000/display')
    const data: any = await res.json()
    setCustomerList(data)
    setOneCust([])
    setTableList([])
    setButton(false)
    setShowAdd(false)
    setShowWaitHead(true)
    setShowTableHead(false)
    setShowCustInfoState([])
    setHeader('Waiting List')
    }

  const showTables = async () => {
    const res = await fetch('http://localhost:8000/tables')
    const data: any = await res.json()
    setTableList(data)
    setCustomerList([])
    setOneCust([])
    setButton(false)
    setShowAdd(false)
    setShowWaitHead(false)
    setShowTableHead(true)
    setShowCustInfoState([])
    setHeader('Tables List')
  }

  const showButton = async (id: number) => {
    const res = await fetch(`http://localhost:8000/customer/${id}`)
    const data = await res.json()
    // console.log(data[0].id)
    setOneCust(data)
    setButton(!button)
    setCustomerList([])
    setCustomer(data[0])
    // console.log(custInfo)
  }

  const showCustInfo = async (tNumber: number) => {
    const res = await fetch(`http://localhost:8000/tables/${tNumber}`)
    try {
      const data: any = await res.json()
      setShowCustInfoState(data)
      setTableList(tableList.slice(tNumber - 1, tNumber))
      setTNum(tNumber)
     } catch (error) {
      alert('This table is unoccupied')
     }
  }

  const removeFromTable = async () => {
    const res = await fetch(`http://localhost:8000/tables/${tNum}/remove`, {
      method: 'PUT'
    })
    setShowCustInfoState([])
    showTables()
  }

  const addToTable = () => {
    setShowAdd(!showAdd)
  }
  


  return (
    <div>
    <div className="App">
     <Form />
    </div>
    <div className='title'>
      <h1>{header}</h1>
      <button className='addButtonT' onClick={() => showList()}>Waiting List</button>
      <button className='addButtonT' onClick={() => showTables()}>Tables</button>
    </div>
    <div className='customers'>
        {showWaitHead ? <WaitingHeader /> : null}
        {showTableHead ? <TableHeader /> : null}
        {tableList.map(tables => 
          <div className={tables.occupied ? "red" : "green"} id={tables.tableNumber} onClick={() => showCustInfo(tables.tableNumber)}>
            <div className='columnT'>{tables.tableNumber}</div>
            <div className='columnT'>{tables.capacity}</div>
            <div className='columnT'>{tables.occupied ? <span>&#10003;</span> : <span>&#10008;</span>}</div>
          </div>)}
          {showCustInfoState.map(customer => 
          <div className='custInfo'>
            <div>{customer.firstName} {customer.lastName}</div>
            <div>Party size: {customer.partyNumber}</div>
            <div>Customer added to Table at: {customer.updatedAt}</div>
            <button className='addButton' onClick={() => removeFromTable()}>Remove from table</button>
          </div>)}
          {customerList.map(customer => 
          <div className={customer.id % 2 === 0 ? "even" : "odd" } id={customer.firstName} onClick={() => showButton(customer.id)}>
            <div className='columnW'>{customer.firstName} {customer.lastName}</div>
            <div className='columnWP'>{customer.partyNumber}</div>
            <div className='columnWP'>{customer.createdAt}</div>
          </div>)}
          {oneCust.map(customer => 
          <div className='rowW'>
            <div className='columnW'>{customer.firstName} {customer.lastName}</div>
            <div className='columnWP'>{customer.partyNumber}</div>
            <div className='columnWP'>{customer.createdAt}</div>
          </div>)}
    </div>
    <div className='buttonDiv'>
      {button ? <button className='addButton' onClick={() => addToTable()}>Add to Table</button> : null}
    </div>
    <div className='buttonDiv'>
      {showAdd ? <AddToTable {...customer}/> : null}
    </div>
    </div>
  );
}

