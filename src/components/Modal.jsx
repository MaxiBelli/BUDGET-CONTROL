
import CloseBtn from "../img/close.svg";

const Modal = ({setModal}) => {

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={hideModal} />
      </div>
    </div>
  );
};

export default Modal;
