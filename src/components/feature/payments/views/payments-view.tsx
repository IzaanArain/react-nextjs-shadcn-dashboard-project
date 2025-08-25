import { getPaymentMockData } from "@/constants";
import PaymentsTable from "../payments-table";

const PaymentsView = async () => {
  const data = await getPaymentMockData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <PaymentsTable data={data} />
    </div>
  );
};

export default PaymentsView;
