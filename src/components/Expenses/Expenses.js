import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
// import NewExpense from "../NewExpense/NewExpense";
function Expenses(props){
    // const expense = [
    //     {id:"e1", title:"title A", amount:21, date:new Date(2022,12,23)},
    //     {id:"e2", title:"title B", amount:22, date:new Date(2022,12,24)},
    //     {id:"e3", title:"title C", amount:23, date:new Date(2022,12,25)},
    //   ]
    return<Card className="expenses">
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
    </Card>

    }
export default Expenses;