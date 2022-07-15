import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0px",
      }}
    >
      <Todos />
    </div>
  );
}

export default App;
