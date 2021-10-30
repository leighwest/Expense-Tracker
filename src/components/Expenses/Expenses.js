import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  
  return (   
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
        />
      ))}
    </div>
  );

}

export default Expenses;