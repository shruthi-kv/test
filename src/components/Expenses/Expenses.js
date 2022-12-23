import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const [propitems, filteredpropItems]= useState(props.items)
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        let arrayitems =[];
        for(let i=0;i<props.items.length;i++){
            let year = props.items[i].date.getFullYear();
            if(year == selectedYear){
             arrayitems.push(props.items[i])
            }
        }
        filteredpropItems(arrayitems)
        
    };
   
    



    let expensesContent = <p>NO DATA FOUND</p>
    if(propitems.length>0){
        expensesContent = propitems.map(expense => 
            <ExpenseItem  
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>
            )
    }
    return<Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
            
        
       
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem> */}
    </Card>

    }
export default Expenses;