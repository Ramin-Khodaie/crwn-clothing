import { useContext, useState } from "react";
import { NotifyContext } from "./NotifyContext";
import Modal from "../../components/Modal/Modal";
export const NotifyHelper = () => {
  const context = useContext(NotifyContext);

  const [state, setstate] = useState({ message: "", open: false });

  function show(message) {
    setstate({ message, open: true });
  }

  function handleClose() {
    setstate({ ...state, message: "", open: false });
  }

  context.notify = show;
  return (
    <Modal show={state.open} closeBackdrop={handleClose}>
      <ShowMassage message={state.message} />
    </Modal>
  );
};

function ShowMassage({message}) {
  return (
    <div style={{ textAlign:"center"}}>
      <h3 >{message}</h3>
    </div>
  );
}
