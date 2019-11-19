import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import Layout from "./container/layout";

function App() {
  return <Layout />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
