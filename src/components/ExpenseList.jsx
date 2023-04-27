import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses, setExpenseEdit }) => {
  return (
    <div className="expense-list container">
      <h2>{expenses.length ? "Expenses" : "No Expenses Yet"}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpenseEdit={setExpenseEdit}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
