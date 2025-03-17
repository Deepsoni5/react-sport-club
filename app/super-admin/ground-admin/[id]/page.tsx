import { GroundAdminProfile } from "@/components/ground-admin/ground-admin-profile";

interface GroundAdminProfilePageProps {
  params: {
    id: string;
  };
}

export default function GroundAdminProfilePage({
  params,
}: GroundAdminProfilePageProps) {
  return <GroundAdminProfile adminId={params.id} />;
}
