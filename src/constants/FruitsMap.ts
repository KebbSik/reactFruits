import bananaSvg from "../assets/banana.svg";
import watermelonSvg from "../assets/watermelon.svg";
import appleSvg from "../assets/apple.svg";
import strawberrySvg from "../assets/strawberry.svg";
import peachSvg from "../assets/peach.svg";
import berriesSvg from "../assets/blueberries.svg";

export const themeMap = {
    banana: { color: "#e8ca0c", textColor: "#fff",transparentColor: "#e8ca0ccc" ,svgUrl:bananaSvg},
    watermelon: { color: "#e75fa6", textColor: "#fff",transparentColor: "#e75fa6cc",svgUrl:watermelonSvg },
    apple: { color: "#1fc205", textColor: "#fff",transparentColor: "#1fc205cc",svgUrl:appleSvg },
    strawberry: { color: "#FA1919", textColor: "#fff",transparentColor: "#e33502cc",svgUrl: strawberrySvg},
    peach: { color: "#f66a09", textColor: "#fff",transparentColor: "#f66a09cc",svgUrl: peachSvg},
    berries: { color: "#1A49C1", textColor: "#fff",transparentColor: "#f66a09cc",svgUrl: berriesSvg},
  } as const;
  
  export type Fruit = keyof typeof themeMap;
  
  export const fruitList = Object.keys(themeMap) as Fruit[];
  