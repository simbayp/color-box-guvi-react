import React, { useState, useEffect } from "react";
import "./App.css";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
// Keep this import in parent level
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const colors = [];

function App() {
  // let items = JSON.parse(localStorage.getItem("list")) || [];
  // console.log(items);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  function handleAdd(colorItem) {
    const lowerColorItem = colorItem.toLowerCase();
    if (!colors.includes(lowerColorItem)) {
      setList([...list, lowerColorItem]);
      localStorage.setItem("list", JSON.stringify([...list, lowerColorItem]));
    } else {
      setList([...list, "black"]);
    }
    // console.log(colorItem);
  }

  function handleDelete(index) {
    const tempArr = list;
    tempArr.splice(index, 1);
    setList([...tempArr]);
    localStorage.setItem("list", JSON.stringify(tempArr));
  }

  return (
    <Container>
      <ColorForm handleAdd={handleAdd} />
      <ColorList list={list} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
