import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NewExpenseIcon from "./img/new-expense.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => setAnimateModal(true));
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
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
