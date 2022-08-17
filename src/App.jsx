import "./App.css";
import React from "react";
import Card from "./components/Card";
import FormCompra from "./components/FormCompra";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Clear Cloud Coffee</h1>
      <div className="content">
        <div className="list">
          <Card></Card>
        </div>
        <FormCompra></FormCompra>
        <List></List>
      </div>
    </div>
  );
}

export default App;
