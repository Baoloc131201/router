import React from "react";
import { useParams } from "react-router-dom";
import { dataInvoices } from "../data/dataInvoices";

const Invoice = () => {
  const params = useParams({ itemId: "string" });
  const invoice = dataInvoices.find(
    (item) => item.id.toString() === params.itemId
  );
  return (
    <h2>
      {invoice
        ? `Invoice #${invoice?.id}  ${invoice?.name} ${invoice?.gender} `
        : "No Invoice found"}
    </h2>
  );
};

export default Invoice;
