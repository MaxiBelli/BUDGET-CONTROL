import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list container">
      <h2>{expenses.length ? "Expenses" : "No Expenses Yet"}</h2>

      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
