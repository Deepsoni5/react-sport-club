import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlertCircle, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <div className="mb-6">
        <Image
          src="/placeholder.svg?height=60&width=60"
          alt="Box of Sportz"
          width={60}
          height={60}
          className="mx-auto"
        />
        <h1 className="mt-4 text-xl font-bold text-primary">BOX OF SPORTZ</h1>
      </div>

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 mb-6">
        <AlertCircle className="h-10 w-10 text-red-600" />
      </div>

      <h2 className="text-4xl font-bold tracking-tight mb-2">404</h2>
      <h3 className="text-2xl font-semibold mb-4">Page Not Found</h3>

      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. The page might have
        been removed, renamed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go to Home
          </Link>
        </Button>
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
          <Link href="/super-admin/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
