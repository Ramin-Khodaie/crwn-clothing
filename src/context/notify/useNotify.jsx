import { useContext } from "react";
import { NotifyContext } from "./NotifyContext";

const useNotify = () => {
  const context = useContext(NotifyContext);
  function notify(message) {
    console.log(3355,message)
    context.notify(message);
  }

  return notify;
};

export default useNotify;
