import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const [isAdd, setisAdd]=useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};
    props.onAddExpense(expenseData);
    toggleaddButton();
  };

  const toggleaddButton = () =>{
    setisAdd((prev) =>{
      return !prev;
    })
  }
  const addExpenseButton = <button onClick={toggleaddButton}>Add New Expense</button>
  const expenseForm = <div>
  <button onClick={toggleaddButton}>Cancel</button>
  <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
  </div>

  return (
    <div className='new-expense'>
      {isAdd ? expenseForm: addExpenseButton}
    </div>
  );
};

export default NewExpense;