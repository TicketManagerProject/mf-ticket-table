import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const tableData = [];

const App = () => (
  <div className="container">
    <Table data={tableData} />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
