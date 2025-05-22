import { useTheme } from "../../contexts/ThemeContext";
import useMaxScreenSize from "../../hooks/useMaxScreenSize";

interface Props {
  isReversed?: boolean;
  content: string;
  title: string;
}

const Row = ({ isReversed, content, title }: Props) => {
  const { max1280, max480 } = useMaxScreenSize();
  const { theme } = useTheme();
  const firstLetter = theme.name[0].toLowerCase();

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        minHeight: "23rem",
        flexDirection: isReversed ? "row-reverse" : "row",
        border: "3px solid black",
        padding: max1280 ? (max480 ? "0.4rem" : "1rem") : "2rem",
        background: "white",
        borderRadius: 50,
      }}
    >
      <div
        style={{
          textWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "23.5rem",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          {content.split("").map((char, i) => (
            <span
              key={i}
              style={{
                color:
                  char.toLowerCase() === firstLetter ? theme.color : "black",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Row;
