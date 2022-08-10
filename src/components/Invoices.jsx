import React from "react";
import { Link, Outlet } from "react-router-dom";
import { dataInvoices } from "../data/dataInvoices";

const Invoices = () => {
  return (
    <main>
      <h2>Invoices</h2>
      <Link to="new">New Invoices</Link>
      <nav
        style={{
          width: "400px",
          paddingRight: "1rem",
          borderRight: "1px solid black",
        }}
      >
        {dataInvoices.map((item, index) => {
          return (
            <Link
              to={`${item.id}`}
              key={item.id}
              style={{
                display: "block",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </main>
  );
};

export default Invoices;
