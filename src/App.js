import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
  {id:"e1", title:"title A", amount:21, date:new Date(2022,12,23)},
  {id:"e2", title:"title B", amount:22, date:new Date(2022,12,24)},
  {id:"e3", title:"title C", amount:23, date:new Date(2022,12,25)},
]


function App() {

  const [expenses,setExpenses] =  useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
