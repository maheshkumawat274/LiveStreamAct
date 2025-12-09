import { createContext } from "react";

export interface PopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

export const PopupContext = createContext<PopupContextType | null>(null);
