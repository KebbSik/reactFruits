import { createContext, useContext, useState, ReactNode } from "react";
import { themeMap, Fruit } from "../constants/FruitsMap"; // or wherever you saved the file

type ThemeContextType = {
  currentFruit: Fruit;
  theme: (typeof themeMap)[Fruit];
  changeFruit: (fruit: Fruit) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentFruit, setCurrentFruit] = useState<Fruit>("banana");

  const changeFruit = (fruit: Fruit) => {
    setCurrentFruit(fruit);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentFruit,
        theme: themeMap[currentFruit],
        changeFruit,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
