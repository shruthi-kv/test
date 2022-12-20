import React from "react";
import './ExpenseForm.css';
import { useState } from "react";
const ExpenseForm = () =>{
    // const [title, newTitle] = useState('');
    // const [amount, newAmount] = useState('');
    // const [date,newDate] = useState('');

    const [userInput, setInput] = useState({
        title : '',
        amount : '',
        date  : ''
    })


    const titlechangeHandler = (event) => {
            // newTitle(event.target.value)
            setInput({
                ...userInput,
                title:event.target.value
            })
    }
  
    const amountchangeHandler = (event) =>{
        // newAmount(event.target.value);
        setInput({
            ...userInput,
            amount:event.target.value
        })
    }
   
    const datechangeHandler = (event) =>{
        // newDate(event.target.value)
        setInput({
            ...userInput,
            date:event.target.value
        })
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titlechangeHandler} type='text'/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountchangeHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={datechangeHandler}  type='date' min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
}
 export default ExpenseForm;