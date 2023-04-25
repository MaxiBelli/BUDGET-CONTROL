import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NewExpenseIcon from "./img/new-expense.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  };

  return (
    <div>
      {" "}
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />{" "}
      {isValidBudget && (
        <div className="new-expense">
          <img
            src={NewExpenseIcon}
            alt="new expense icon"
            onClick={handleNewExpense}
          />
        </div>
      )}
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
