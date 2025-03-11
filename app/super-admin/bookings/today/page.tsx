import { BookingsList } from "@/components/bookings/booking-lists";

export default function TodayBookingsPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Today's Bookings</h1>
      <BookingsList defaultTab="today" />
    </main>
  );
}
