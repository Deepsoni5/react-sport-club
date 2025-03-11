import { BookingsList } from "@/components/bookings/booking-lists";

export default function BookingsPage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Bookings</h1>
      <BookingsList />
    </main>
  );
}
