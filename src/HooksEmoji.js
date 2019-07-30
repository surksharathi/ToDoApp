import React from "react";
import customToggle from "./CustomeToggle";

function HooksEmoji() {
  const [smiley, setSmiley] = customToggle(true);
  const [Apple, setApple] = customToggle(true);

  return (
    <div>
      <h1 onClick={setSmiley}>{smiley ? ":)" : ":("}</h1>
      <h1 onClick={setApple}>{Apple ? "Apple" : "Banana"}</h1>
    </div>
  );
}

export default HooksEmoji;
