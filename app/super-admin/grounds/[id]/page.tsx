import { GroundDetails } from "@/components/grounds/ground-details";

interface GroundDetailsPageProps {
  params: {
    id: string;
  };
}

export default function GroundDetailsPage({ params }: GroundDetailsPageProps) {
  return <GroundDetails groundId={params.id} />;
}
