import { useState } from "react";
import Message from "./Message";
import CloseBtn from "../img/close.svg";

const Modal = ({ setModal, animateModal, setAnimateModal , saveExpense }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      setMessage("All fields are required");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveExpense({ name, amount, category });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? "animate" : "close"}`}
      >
        <legend>New Expenses</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="name">Expense Name</label>

          <input
            id="name"
            type="text"
            placeholder="Add Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>

          <input
            id="amount"
            type="number"
            placeholder="Add Expense Amount: e.g. 300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="expenses">Miscellaneous Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input
          type="submit"
          value={expenseToEdit.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default Modal;
