import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Names } from './components/customers';
import { Form } from './components/form';
import { AddToTable } from './components/addToTable';

export function App() {
  const [customerList, setCustomerList] = useState<any[]>([])
  const [button, setButton] = useState<boolean>(false)
  const [oneCust, setOneCust] = useState<string>('')
  const [showAdd, setShowAdd] = useState<boolean>(false)
  const [custInfo, setCustInfo] = useState<object>({})
 

  const showList = async () => {
    const res = await fetch('http://localhost:8000/display')
    const data: any = await res.json()
    setCustomerList(data)
    setOneCust('')
    setButton(false)
    }

  const showButton = async (firstName: string) => {
    const res = await fetch(`http://localhost:8000/customer/${firstName}`)
    const data = await res.json()
    // console.log(data[0].firstName)
    setOneCust(data[0].firstName + ' ' + data[0].lastName + ' ' + data[0].partyNumber)
    setButton(!button)
    setCustomerList([])
    setCustInfo(data[0])
  }

  const addToTable = () => {
    setShowAdd(!showAdd)
  }
  


  return (
    <div>
    <div className="App">
     <Form />
    </div>
    <div>
      <h1>View Waiting List</h1>
      <button onClick={() => showList()}>Waiting List</button>
    </div>
    <div>
      {customerList.map(customer => <div id={customer.firstName} onClick={() => showButton(customer.firstName)}>{customer.firstName} {customer.lastName} {customer.partyNumber}</div>)}
      {oneCust} 
      {button ? <button onClick={() => addToTable()}>Add to Table</button> : null}
      {showAdd ? <AddToTable {...custInfo}/> : null}
    </div>
    </div>
  );
}

