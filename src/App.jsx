import { useEffect, useState } from 'react'
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import NewExpenseIcon from "./img/new-expense.svg";

function App() {

  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenseEdit, setExpenseEdit] = useState([])


  useEffect(() => {
        if (Object.keys(expenseEdit).length) {
          setModal(true)
          setTimeout(() => {
            setAnimateModal(true)
          }, 500)
        }
      }, [expenseEdit])

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  return (
    <div className={modal ? "fix" : ""}>
      {" "}
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />{" "}
      {isValidBudget && (
        <>
          <main>
            <ExpenseList expenses={expenses} setExpenseToEdit={setExpenseToEdit} />
          </main>
          <div className="new-expense">
            <img
              src={NewExpenseIcon}
              alt="new expense icon"
              onClick={handleNewExpense}
            />
          </div>

          <div className="new-expense">
            <img
              src={NewExpenseIcon}
              alt="new expense icon"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
