import React from "react";

const NewBudget = ({ budget, setBudget }) => {
  return (
    <div className="budget-container container shadow">
      <form action="" className="form">
        <div className="field">
          <label>Define Budget</label>
          <input
            type="number"
            className="new-budget"
            placeholder="Add your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewBudget;
