import { useState } from "react";

function useToggle(initialvalue = true) {
  const [state, setstate] = useState(initialvalue);

  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}

export default useToggle;
