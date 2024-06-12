import React from "react";

const Display = ({ count, updateCount }) => {
  return (
    <div
      style={{
        background: "crimson",
        padding: "5px",
        margin: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>Sayacın Değeri {count} </h3>
      <button onClick={updateCount}>Sayacı Arttır</button>
    </div>
  );
};

export default Display;
