import { DataTable } from "@/components/reusable/table/data-table";
import React from "react";
import { columns } from "./columns";
import { TPaymentApi } from "@/types";

interface IPaymentsTableProps {
  data: TPaymentApi[];
}

const PaymentsTable = ({ data }: IPaymentsTableProps) => {
  return <DataTable columns={columns} data={data} />;
};

export default PaymentsTable;
