import { GroundAdminList } from "@/components/ground-admin/ground-admin-list";

export default function GroundAdminPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Ground Admins List</h1>
      <GroundAdminList />
    </main>
  );
}
