import React,{useState,Fragment} from 'react';
import './App.css';
import uuid from 'uuid'
import Form from './components/ExpenseForm'
import List from './components/ExpenceList'
import Alert from './components/ALert'
const exp = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'buss', amount: 1200 },
  { id: uuid(), charge: 'bico', amount: 1400 },
 
]


function App() {

  const [expenses, seEx] = useState(exp)
  const [alert,setAlert]=useState({show:false})
  const [charge, seCharge] = useState('')
  const [amount, setAmount] = useState('')

  const handleCharge = e => {
    console.log(`charge:${e.target.value}`);
    
    seCharge(e.target.value)
  }

  const handleamount = e => {
    console.log(`amount:${e.target.value}`);

    setAmount(parseInt(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (charge!==" " && amount>0) {
      const newObj = {
        id:uuid(),
        charge,
        amount
      }
      seEx([...exp, newObj])
      seCharge(' ')
      setAmount(' ')
      HandleAlert({type:"success",text:"Message succeeefully aded"} )
    }
    else {
      HandleAlert({type:"danger",text:"Please fill out the form !!"} )
     
  }
  }
  
  const HandleAlert = ({type,text}) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false})
    },3000)
  }
  
  const HandleClear = () => {
    console.log('cleared all items');
    
  }

  const selItem = (id) => {
    seEx(exp.filter(val => val.id !== id))
  }
  return (
    <Fragment>
      
      {alert.show && <Alert type={alert.type} text={alert.text} />   }
      
      <h1>Budget</h1>
      <main className="App">
        <Form handleSubmit={handleSubmit} amount={amount} charge={charge} handleCharge={handleCharge} handleamount={handleamount} />
      <List expenses={expenses} selItem={selItem} HandleClear={HandleClear} />
      </main>
      <h1>Total Spending ${' '} <span className="total">{expenses.reduce((a,b)=>a+=b.amount,0)}</span> </h1>
    </Fragment>
  );
}

export default App;
