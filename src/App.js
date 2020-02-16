import React,{useState,Fragment,useEffect} from 'react';
import './App.css';
import uuid from 'uuid'
import Form from './components/ExpenseForm'
import List from './components/ExpenceList'
import Alert from './components/ALert'



const exp=localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')):[]

function App() {

  const [expenses, seEx] = useState(exp)
  const [alert,setAlert]=useState({show:false})
  const [charge, seCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [edit, setEdit] = useState(true)
  const [id, setId] = useState(0)
  
  useEffect(() => {
    console.log();
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])
  const editItem = id => {
    const expense = expenses.find(item => item.id === id)
    console.log(expense.charge);
    let{charge,amount}=expense
    seCharge(charge)
    setAmount(amount)
    setEdit(!edit)
    setId(id)
    //HandleAlert({type:"success",text:"Item has been edited !!"})
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (charge !== " " && amount > 0) {
      
      if (!edit) {
        let NewExpeenses = expenses.map(item => {
          return item.id === id ? {...item,charge,amount}:item
        })
        seEx(NewExpeenses)
        setEdit(!edit)
        HandleAlert({type:"success",text:"Message succeeefully edited"} )
      } else {
        const newObj = {
          id:uuid(),
          charge,
          amount
        }
        seEx([...exp, newObj])
        HandleAlert({type:"success",text:"Message succeeefully aded"} )
      }
     
      seCharge(' ')
      setAmount(' ')
    
    }
    else {
      HandleAlert({type:"danger",text:"Please fill out the form !!"} )
     
  }
  }
  const handleCharge = e => {
    console.log(`charge:${e.target.value}`);
    
    seCharge(e.target.value)
  }

  const handleamount = e => {
    console.log(`amount:${e.target.value}`);

    setAmount(parseInt(e.target.value))
  }

 
  
  const HandleAlert = ({type,text}) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false})
    },3000)
  }
  
  const HandleClear = () => {
    console.log('cleared all items');
    seEx([])
    HandleAlert({type:"danger",text:"Items have been deleted !!"})
    
  }

  const delItem = id => {
    const temp=exp.filter(val => val.id !== id)
    seEx(temp)
    HandleAlert({type:"danger",text:"Item has been deleted !!"})
  }

 
  return (
    <Fragment>
      
      {alert.show && <Alert type={alert.type} text={alert.text} />   }
      
      <h1>Budget</h1>
      <main className="App">
        <Form edit={edit} handleSubmit={handleSubmit} amount={amount} charge={charge} handleCharge={handleCharge} handleamount={handleamount} />
      <List expenses={expenses} editItem={editItem} delItem={delItem} HandleClear={HandleClear} />
      </main>
      <h1>Total Spending ${' '} <span className="total">{expenses.reduce((a,b)=>a+=b.amount,0)}</span> </h1>
    </Fragment>
  );
}

export default App;
