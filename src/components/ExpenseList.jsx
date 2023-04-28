import React from "react";
import Expense from "./Expense";

const ExpenseList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {


  return (

    <div className="expense-list container">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length
              ? "Expenses"
              : "No expenses in this category"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
