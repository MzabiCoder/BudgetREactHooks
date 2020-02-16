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
  
  return (
    <Fragment>
      <Alert />
      <h1>Budget</h1>
      <main className="App">
      <Form/>
      <List expenses={expenses} />
      </main>
      <h1>Total Spending ${' '} <span className="total">{expenses.reduce((a,b)=>a+=b.amount,0)}</span> </h1>
    </Fragment>
  );
}

export default App;
