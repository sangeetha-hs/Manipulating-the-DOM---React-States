
// import React,{useState} from 'react';

// import ExpenseDate from "./ExpenseDate.js";
// import "./Expenseitem.css";

// import Card from '../Ui/Card.js';
 
// const  Expenseitem =(props)=>{
  
//   const[title, setTitle] =useState(props.title);
// console.log('ExpenseItem evaluated by React')



//   //function clickHandler
//     const clickHandler=()=>{
//       setTitle('updated!');
// console.log(title);

// //title='updated';
//  //console.log(title)
//   }
//     return (
//         <>
//         <Card className="expense-item">
//           <ExpenseDate date={props.date}></ExpenseDate>
          
//           <div className="expense-item-description">
//         <h2>{title}</h2>
//         <div className="expense-item-price">${props.amount}</div>
//         </div>
//         <button onClick={clickHandler}>change Title</button>
//         </Card>
//         </>
//       );
// }
// export default Expenseitem;


import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate.js';
import './Expenseitem.css';
import Card from '../Ui/Card.js';

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  // Function to update the title
  const clickHandler = () => {
    setTitle('Updated!');
  };

  // Function to update the amount to $100
  const changeAmountHandler = () => {
    setAmount(100);
  };

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item-description">
          <h2>{title}</h2>
          <div className="expense-item-price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changeAmountHandler}>Change Amount</button>
      </Card>
    </>
  );
};

export default Expenseitem;

