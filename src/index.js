import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./components/Invoices";
import Expresses from "./components/Expresses";
import NoteFound from "./components/NoteFound";
import Invoice from "./components/Invoice";
import NewInvoices from "./components/NewInvoices";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<h2>Please click an name</h2>} />
            <Route path=":itemId" element={<Invoice />} />
            <Route path="new" element={<NewInvoices />} />
          </Route>
          <Route path="expresses" element={<Expresses />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
