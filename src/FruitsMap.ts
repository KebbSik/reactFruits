export const themeMap = {
    banana: { color: "#e8ca0c", textColor: "#fff" },
    watermelon: { color: "#e75fa6", textColor: "#fff" },
    apple: { color: "#1fc205", textColor: "#fff" },
    strawberry: { color: "#e33502", textColor: "#fff" },
    peach: { color: "#f66a09", textColor: "#fff" },
  } as const;
  
  export type Fruit = keyof typeof themeMap;
  
  export const fruitList = Object.keys(themeMap) as Fruit[];
  