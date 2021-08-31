import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
