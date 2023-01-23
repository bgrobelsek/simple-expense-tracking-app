import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');  
  
  const titleChangeHandler = event => {
      setEnteredTitle(event.target.value);
    };
    
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  }
  
  const submitHandler = event => {
    event.preventDefault()
    
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    
    // passed from NewExpense
    /* 
    ------------------------------------
    const NewExpense = () => {
      const saveExpenseDataHandler = enteredExpenseData => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      console.log(expenseData)
    };
    -----------------------------------
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    */
    
    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');  
  };

  return ( 
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title </label>
          <input 
            type='text'
            value={enteredTitle} 
            onChange={titleChangeHandler}
            />
        </div>
        <div className="new-expense_control">
          <label>Amount </label>
          <input 
            type='number' 
            min="0.01" 
            step="0.01" 
            value={enteredAmount}
            onChange={amountChangeHandler}
            />
        </div>
        <div className="new-expense_control">
          <label>Date </label>
          <input 
            type='date' 
            min="2020-01-01" 
            max="2023-12-31" 
            value={enteredDate}
            onChange={dateChangeHandler}
            />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit" >Add Expense</button> 
      </div>
    </form>
  )
};

export default ExpenseForm;

 // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });
  
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value}
  //   })
  // }

  // const amountChangeChandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: event.target.value}
  //   })
  // }

  // const dateChangeHandler = event => {  
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: event.target.value}
  //   })
  // }

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(userInput);

  //   setUserInput({ 
  //     title: '',
  //     amount: '',
  //     date: ''
  //   })

  // };