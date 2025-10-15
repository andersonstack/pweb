import { useContext, createContext, ReactNode, useState } from "react";

interface ButtonContextProps {
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

export function ButtonProvider({ children }: { children: ReactNode }) {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <ButtonContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButton() {
    const ctx = useContext(ButtonContext);
    if (!ctx) throw new Error("O contexto do botão deve ser utilizado dentro de um provider do botão.")
    return ctx;
}