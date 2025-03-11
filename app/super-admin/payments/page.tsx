import { PaymentsList } from "@/components/payments/payments-list";

export default function PaymentsPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Payment</h1>
      <PaymentsList />
    </main>
  );
}
