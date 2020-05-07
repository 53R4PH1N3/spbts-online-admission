import { useCallback, useState, useEffect } from "react";

interface Props {
  size?: number;
}

const useRoveFocus = ({ size }: Props) => {
  const [focus, setFocus] = useState<number>(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (size) {
          setFocus((prevState) => (prevState < size ? prevState + 1 : 0));
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (size) {
          setFocus((prevState: number) =>
            prevState > 0 ? prevState - 1 : size
          );
        }
      } else {
        setFocus(-1);
      }
    },
    [size]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => document.removeEventListener("keydown", handleKeyDown, false);
  }, [handleKeyDown]);

  return { focus, setFocus };
};

export default useRoveFocus;
