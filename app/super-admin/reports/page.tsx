import { ReportsDashboard } from "@/components/reports/reports-dashboard";

export default function ReportsPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Reports</h1>
      <ReportsDashboard />
    </main>
  );
}
