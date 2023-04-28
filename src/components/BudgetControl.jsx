import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import swal from "sweetalert2";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(10);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const totalAvailable = budget - totalSpent;
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );
    setAvailable(totalAvailable);
    setSpent(totalSpent);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1500);
  }, [expenses]);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    swal
      .fire({
        title: "Are you sure you want to reset the budget and expenses?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reset it!",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.isConfirmed) {
          setExpenses([]);
          setBudget(0);
          setIsValidBudget(false);
          swal.fire(
            "Reset!",
            "Your budget and expenses have been reset.",
            "success"
          );
        }
      });
  };

  return (
    <div className="budget-container container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>
      <div className="budget-content">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget:</span> {formatAmount(budget)}
        </p>
        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Available:</span> {formatAmount(available)}
        </p>
        <p>
          <span>Spent:</span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
