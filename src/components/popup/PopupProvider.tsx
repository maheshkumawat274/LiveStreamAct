import { useState } from "react";
import { PopupContext } from "./PopupContext";

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
