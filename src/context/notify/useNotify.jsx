import { useContext } from "react";
import { NotifyContext } from "./NotifyContext";

const useNotify = () => {
  const context = useContext(NotifyContext);
  function notify(message) {
    context.notify(message);
  }

  return notify;
};

export default useNotify;
