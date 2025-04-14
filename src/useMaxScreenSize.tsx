import { useMediaQuery } from "react-responsive";

const useMaxScreenSize = () => {
  const max1400 = useMediaQuery({ query: "(max-width: 1400px)" });
  const max1280 = useMediaQuery({ query: "(max-width: 1280px)" });
  const max992 = useMediaQuery({ query: "(max-width: 992px)" });
  const max768 = useMediaQuery({ query: "(max-width: 768px)" });
  const max480 = useMediaQuery({ query: "(max-width: 480px)" });

  return { max480, max768, max992, max1280, max1400 };
};

export default useMaxScreenSize;
