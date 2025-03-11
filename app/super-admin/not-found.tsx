import Link from "next/link";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SuperAdminNotFound() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 mb-6">
          <AlertCircle className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Sorry, we couldn't find the page you're looking for. The page might
          have been removed, renamed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
          <Link href="/super-admin/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
