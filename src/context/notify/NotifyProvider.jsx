import { NotifyContext } from "./NotifyContext";
import { NotifyHelper } from "./NotifyHelper";

export const NotifyProvider = ({ children }) => {
  const contextValue = {
    notify: () => {},
  };
  return (
    <>
      <NotifyContext.Provider value={contextValue}>
        {children}
        <NotifyHelper />
      </NotifyContext.Provider>
    </>
  );
};
