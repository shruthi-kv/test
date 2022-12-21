import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'



function App() {

  const expense = [
    {id:"e1", title:"title A", amount:21, date:new Date(2022,12,23)},
    {id:"e2", title:"title B", amount:22, date:new Date(2022,12,24)},
    {id:"e3", title:"title C", amount:23, date:new Date(2022,12,25)},
  ]
  
const addExpenseHandler = expense =>{
  console.log("in the App.js");
  console.log(expense)
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
