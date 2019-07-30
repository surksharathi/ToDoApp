import React, { useState } from "react";

function Hooksincrement() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The Counter is :{count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
export default Hooksincrement;
