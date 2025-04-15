export const themeMap = {
    banana: { color: "#e8ca0c", textColor: "#fff",transparentColor: "#e8ca0ccc" },
    watermelon: { color: "#e75fa6", textColor: "#fff",transparentColor: "#e75fa6cc" },
    apple: { color: "#1fc205", textColor: "#fff",transparentColor: "#1fc205cc" },
    strawberry: { color: "#e33502", textColor: "#fff",transparentColor: "#e33502cc" },
    peach: { color: "#f66a09", textColor: "#fff",transparentColor: "#f66a09cc" },
  } as const;
  
  export type Fruit = keyof typeof themeMap;
  
  export const fruitList = Object.keys(themeMap) as Fruit[];
  