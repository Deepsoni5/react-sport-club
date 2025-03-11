import { RequestApprovalList } from "@/components/request-approval/request-approval-list";

export default function RequestApprovalPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Request Approval List</h1>
      <RequestApprovalList />
    </main>
  );
}
