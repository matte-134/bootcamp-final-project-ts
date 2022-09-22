import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Names } from './components/customers';
import { Form } from './components/form';
import { AddToTable } from './components/addToTable';
import { TableHeader, WaitingHeader } from './components/headers';

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
    setHeader('Waiting List')
    }

  const showTables = async () => {
    const res = await fetch('http://localhost:8000/tables')
    const data: any = await res.json()
    setTableList(data)
    setCustomerList([])
    setOneCust([])
    setButton(false)
    setShowWaitHead(false)
    setShowTableHead(true)
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
      console.log(data)
      setShowCustInfoState(data)
     } catch (error) {
      alert('This table is unoccupied')
     }
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
          <div className='rowT' id={tables.tableNumber} onClick={() => showCustInfo(tables.tableNumber)}>
            <div className='columnT'>{tables.tableNumber}</div>
            <div className='columnT'>{tables.capacity}</div>
            <div className='columnT'>{tables.occupied ? "Yes" : "No"}</div>
          </div>)}
          {showCustInfoState.map(customer => <div>{customer.firstName} {customer.lastName}</div>)}
          {customerList.map(customer => 
          <div className='rowW' id={customer.firstName} onClick={() => showButton(customer.id)}>
            <div className='columnW'>{customer.firstName} {customer.lastName}</div>
            <div className='columnWP'>{customer.partyNumber}</div>
          </div>)}
          {oneCust.map(customer => 
          <div className='rowW'>
            <div className='columnW'>{customer.firstName} {customer.lastName}</div>
            <div className='columnWP'>{customer.partyNumber}</div>
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

