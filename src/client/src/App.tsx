import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Names } from './components/customers';
import { Form } from './components/form';
import { AddToTable } from './components/addToTable';

function App() {
  const [customerList, setCustomerList] = useState<any[]>([])
  const [button, setButton] = useState<boolean>(false)
 

  const showList = async () => {
    const res = await fetch('http://localhost:8000/display')
    const data: any = await res.json()
    setCustomerList(data)
    }

  const showButton = () => {
    setButton(!button)
  }

  const addToTable = () => {
    return (
      <div>
        <AddToTable />
      </div>
    )
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
      {customerList.map(customer => <div id={customer.firstName} onClick={() => showButton()}>{customer.firstName} {customer.lastName} {button ? <button onClick={() => <AddToTable />}>Add to Table</button> : null} </div>)} 
    </div>
    </div>
  );
}

export default App;
