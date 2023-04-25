const BudgetControl = ({ budget }) => {
  return (
    <div className="budget-container container shadow two-columns">
      <div>
        <p>Graph here</p>
      </div>
      <div className="budget-content">
        <p>
          <span>Budget:</span> ${budget}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
