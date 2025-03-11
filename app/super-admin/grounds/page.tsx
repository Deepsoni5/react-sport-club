import { GroundsList } from "@/components/grounds/grounds-list";

export default function GroundsPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Grounds List</h1>
      <GroundsList />
    </main>
  );
}
