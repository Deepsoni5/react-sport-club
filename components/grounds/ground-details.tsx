"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Star,
  Phone,
  Mail,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample ground data - In a real app, this would come from an API
const groundData = {
  id: "1",
  name: "Melbourne Cricket Ground",
  location: "Hyderabad",
  price: "₹500",
  description:
    "Melbourne Cricket Ground is a large international cricket stadium in Yarra Park, Melbourne, Australia. It is the home of the Melbourne Cricket Club and is also the home of Australian rules football, and hosts Australian Football League (AFL) matches. It is the largest stadium in the Southern Hemisphere, the 10th largest stadium in the world, and the world's largest cricket stadium.",
  openingHours: {
    weekdays: "Mon-Fri: 9am to 9pm",
    weekends: "Sat-Sun: 5am to 10pm",
  },
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  facilities: [
    "Basic Ground Facilities",
    "Changing Room",
    "Drinking Water",
    "First Aid Kit",
    "Flood Lights",
    "Parking",
    "Washroom",
  ],
  owner: {
    id: "1",
    name: "John Admin",
    business: "Verdant Gardens",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    reviews: 15,
    totalGrounds: 11,
  },
  contact: {
    phone: "+91 8639211485",
    email: "john15548@gmail.com",
  },
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: {
        name: "Vijay",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment:
        "Great place to play with friends, nice facilities and well maintained.",
    },
    {
      id: 2,
      user: {
        name: "Rohan",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      comment:
        "Nice ground, good facilities and nice service also. Had a nice time playing here with my friends.",
    },
    {
      id: 3,
      user: {
        name: "Matthew",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "Amazing experience, great ground!",
    },
    {
      id: 4,
      user: {
        name: "Vijay",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "Fantastic ground, highly recommend for cricket enthusiasts.",
    },
    {
      id: 5,
      user: {
        name: "Vijay",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      comment:
        "Great place to play with friends, nice facilities and well maintained.",
    },
  ],
  bookingSlots: [
    { timeRange: "5:00 AM - 6:00 AM", status: "available" },
    { timeRange: "6:00 AM - 7:00 AM", status: "available" },
    { timeRange: "7:00 AM - 8:00 AM", status: "booked" },
    { timeRange: "8:00 AM - 9:00 AM", status: "booked" },
    { timeRange: "9:00 AM - 10:00 AM", status: "available" },
    { timeRange: "10:00 AM - 11:00 AM", status: "available" },
    { timeRange: "11:00 AM - 12:00 PM", status: "booked" },
    { timeRange: "12:00 PM - 1:00 PM", status: "available" },
    { timeRange: "1:00 PM - 2:00 PM", status: "available" },
    { timeRange: "2:00 PM - 3:00 PM", status: "booked" },
    { timeRange: "3:00 PM - 4:00 PM", status: "available" },
    { timeRange: "4:00 PM - 5:00 PM", status: "available" },
    { timeRange: "5:00 PM - 6:00 PM", status: "booked" },
    { timeRange: "6:00 PM - 7:00 PM", status: "available" },
    { timeRange: "7:00 PM - 8:00 PM", status: "available" },
    { timeRange: "8:00 PM - 9:00 PM", status: "booked" },
    { timeRange: "9:00 PM - 10:00 PM", status: "available" },
    { timeRange: "10:00 PM - 11:00 PM", status: "available" },
  ],
};

// Rating distribution data
const ratingDistribution = [
  { stars: 5, percentage: 75, count: 9 },
  { stars: 4, percentage: 60, count: 4 },
  { stars: 3, percentage: 40, count: 2 },
  { stars: 2, percentage: 20, count: 0 },
  { stars: 1, percentage: 10, count: 0 },
];

interface GroundDetailsProps {
  groundId: string;
}

export function GroundDetails({ groundId }: GroundDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState("today");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % groundData.images.length
    );
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + groundData.images.length) % groundData.images.length
    );
  };

  // Function to select a specific image
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Scroll the carousel when currentImageIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const thumbnails =
        carouselRef.current.querySelectorAll("[data-thumbnail]");
      if (thumbnails[currentImageIndex]) {
        thumbnails[currentImageIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentImageIndex]);

  // Update the days generation to include information about whether each day is a weekday or weekend
  const days = useMemo(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const result = [
      {
        name: "Today",
        value: "today",
        isWeekend: today.getDay() === 0 || today.getDay() === 6,
      },
    ];

    // Add the next 6 days
    for (let i = 1; i <= 6; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayName = daysOfWeek[nextDay.getDay()];
      const isWeekend = nextDay.getDay() === 0 || nextDay.getDay() === 6;
      result.push({
        name: dayName,
        value: dayName.toLowerCase(),
        isWeekend: isWeekend,
      });
    }

    return result;
  }, []);

  // Generate booking slots based on whether the selected day is a weekday or weekend
  const getBookingSlotsForDay = (dayValue: string) => {
    const selectedDayInfo = days.find((day) => day.value === dayValue);
    const isWeekend = selectedDayInfo?.isWeekend || false;

    const startHour = isWeekend ? 5 : 9; // 5am for weekends, 9am for weekdays
    const endHour = isWeekend ? 22 : 21; // 10pm for weekends, 9pm for weekdays

    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      const startTime =
        hour < 12 ? `${hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`;

      const endTime =
        hour + 1 < 12
          ? `${hour + 1}:00 AM`
          : `${hour + 1 === 12 ? 12 : hour + 1 - 12}:00 PM`;

      // Randomly assign status for demo purposes
      const status = Math.random() > 0.3 ? "available" : "booked";

      slots.push({
        timeRange: `${startTime} - ${endTime}`,
        status: status,
      });
    }

    return slots;
  };

  // Get the booking slots for the selected day
  const bookingSlots = useMemo(() => {
    return getBookingSlotsForDay(selectedDay);
  }, [selectedDay]);

  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/super-admin/grounds"
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="h-4 w-4 inline" />
            Ground Details
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Image Carousel */}
          <div className="rounded-lg border bg-white overflow-hidden">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px]">
              <Image
                src={groundData.images[currentImageIndex] || "/placeholder.svg"}
                alt={groundData.name}
                fill
                className="object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="absolute top-2 left-2">
                <Badge className="bg-red-500 text-white text-xs">
                  Featured
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge className="bg-blue-500 text-white text-xs">
                  Cricket Ground
                </Badge>
              </div>
            </div>
            <div className="p-2 border-t">
              <div className="relative overflow-hidden" ref={carouselRef}>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {groundData.images.map((image, index) => (
                    <div
                      key={index}
                      data-thumbnail
                      className={cn(
                        "relative h-16 w-24 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2",
                        currentImageIndex === index
                          ? "border-blue-500"
                          : "border-transparent"
                      )}
                      onClick={() => selectImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ground Details */}
          <div className="rounded-lg border bg-white p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold">{groundData.name}</h1>
                <div className="flex items-center gap-1 text-gray-500 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{groundData.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(groundData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{groundData.rating}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-sm text-gray-600">
                  {groundData.description}
                </p>

                {/* Opening Hours */}
                <div className="mt-3 space-y-1">
                  <div className="text-sm font-medium">Opening Hours:</div>
                  <div className="text-sm text-gray-600">
                    {groundData.openingHours.weekdays}
                  </div>
                  <div className="text-sm text-gray-600">
                    {groundData.openingHours.weekends}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-gray-100">
                  Cricket
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Outdoor
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Floodlights
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Parking
                </Badge>
              </div>
            </div>
          </div>

          {/* Today's Booking */}
          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Today's Booking</h2>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              {/* Dropdown for mobile view */}
              <div className="block md:hidden">
                <div className="relative">
                  <select
                    className="w-full rounded-md border border-gray-300 p-2 text-sm appearance-none"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                  >
                    {days.map((day) => (
                      <option key={day.value} value={day.value}>
                        {day.name} {day.isWeekend ? "(Weekend)" : "(Weekday)"}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500" />
                </div>
              </div>

              {/* Tabs for desktop view */}
              <div className="hidden md:flex border-b">
                {days.map((day) => (
                  <button
                    key={day.value}
                    className={cn(
                      "flex-1 py-2 text-center text-sm font-medium",
                      selectedDay === day.value
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                    )}
                    onClick={() => setSelectedDay(day.value)}
                  >
                    {day.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Update the booking slots section to use the dynamically generated slots */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {bookingSlots.map((slot, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-2 rounded-md text-center text-sm",
                    slot.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  )}
                >
                  <div className="font-medium text-xs sm:text-sm">
                    {slot.timeRange}
                  </div>
                  <div className="text-xs capitalize">{slot.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Feedback - Moved here as requested */}
          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Our Customer Feedback</h2>
              <div className="flex items-center gap-1">
                <div className="text-2xl font-bold">{groundData.rating}</div>
                <div className="text-sm text-gray-500">/5</div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <div className="text-sm w-4">{item.stars}</div>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 w-4">{item.count}</div>
                </div>
              ))}
            </div>

            {/* Updated reviews section to match the screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groundData.reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex gap-3 border rounded-lg p-3"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={review.user.avatar || "/placeholder.svg"}
                      alt={review.user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">
                        {review.user.name}
                      </h3>
                      <div className="flex flex-shrink-0 ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <Button variant="link" size="sm">
                  See All Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Facilities */}
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">Facilities</h2>
            <div className="space-y-3">
              {groundData.facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Details */}
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">Owner Details</h2>
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src={groundData.owner.image || "/placeholder.svg"}
                  alt={groundData.owner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium truncate">
                  <Link
                    href={`/super-admin/ground-admin/${groundData.owner.id}`}
                    className="hover:text-blue-500"
                  >
                    {groundData.owner.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {groundData.owner.business}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(groundData.owner.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({groundData.owner.reviews} reviews)
                  </span>
                </div>
                <div className="mt-1 text-sm">
                  <span className="font-medium">
                    {groundData.owner.totalGrounds}
                  </span>
                  <span className="text-gray-500"> grounds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">
                  {groundData.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">
                  {groundData.contact.email}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Button className="w-full sm:flex-1 bg-blue-500 hover:bg-blue-600 text-sm">
                Send Notification
              </Button>
              <Button variant="outline" className="w-full sm:flex-1 text-sm">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
