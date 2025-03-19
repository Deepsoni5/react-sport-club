"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  const [searchAdmin, setSearchAdmin] = useState("");
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>(["Hyderabad", "Delhi"]);
  const [locationInput, setLocationInput] = useState("");
  const [price, setPrice] = useState(1500);
  const [openingHour, setOpeningHour] = useState("1");
  const [openingMinute, setOpeningMinute] = useState("00");
  const [openingAmPm, setOpeningAmPm] = useState("am");
  const [closingHour, setClosingHour] = useState("1");
  const [closingMinute, setClosingMinute] = useState("00");
  const [closingAmPm, setClosingAmPm] = useState("pm");
  const [rating, setRating] = useState<number[]>([]);
  const [ratingOrder, setRatingOrder] = useState("high-to-low");
  const [groundStatus, setGroundStatus] = useState<string[]>(["Available"]);
  const [sportTypes, setSportTypes] = useState<string[]>([
    "Cricket",
    "Tennis",
    "Football",
  ]);
  const [surfaceTypes, setSurfaceTypes] = useState<string[]>(["Grass"]);
  const [minUsers, setMinUsers] = useState("1,200");
  const [maxUsers, setMaxUsers] = useState("5,000");
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  // Sample admin data
  const admins = [
    {
      id: 1,
      name: "John Admin",
      business: "Verdant Gardens",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "John Wick",
      business: "Peachy Green Landscapes",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "John Wick",
      business: "Peachy Green Landscapes",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "John Wick",
      business: "Peachy Green Landscapes extended",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  // Filter admins based on search
  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchAdmin.toLowerCase())
  );

  // Handle admin search input
  const handleAdminSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAdmin(e.target.value);
    setShowAdminDropdown(true);
  };

  // Handle admin selection
  const handleAdminSelect = (adminId: number) => {
    const admin = admins.find((a) => a.id === adminId);
    if (admin) {
      setSelectedAdmins([...selectedAdmins, admin.name]);
      setSearchAdmin("");
      setShowAdminDropdown(false);
    }
  };

  // Handle location input
  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  };

  // Add location
  const handleAddLocation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && locationInput.trim()) {
      if (!locations.includes(locationInput.trim())) {
        setLocations([...locations, locationInput.trim()]);
      }
      setLocationInput("");
    }
  };

  // Remove location
  const handleRemoveLocation = (location: string) => {
    setLocations(locations.filter((loc) => loc !== location));
  };

  // Toggle rating
  const handleRatingToggle = (value: number) => {
    if (rating.includes(value)) {
      setRating(rating.filter((r) => r !== value));
    } else {
      setRating([...rating, value]);
    }
  };

  // Toggle ground status
  const handleStatusToggle = (status: string) => {
    if (groundStatus.includes(status)) {
      setGroundStatus(groundStatus.filter((s) => s !== status));
    } else {
      setGroundStatus([...groundStatus, status]);
    }
  };

  // Toggle sport type
  const handleSportTypeToggle = (type: string) => {
    if (sportTypes.includes(type)) {
      setSportTypes(sportTypes.filter((t) => t !== type));
    } else {
      setSportTypes([...sportTypes, type]);
    }
  };

  // Toggle surface type
  const handleSurfaceTypeToggle = (type: string) => {
    if (surfaceTypes.includes(type)) {
      setSurfaceTypes(surfaceTypes.filter((t) => t !== type));
    } else {
      setSurfaceTypes([...surfaceTypes, type]);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchAdmin("");
    setSelectedAdmins([]);
    setLocations([]);
    setLocationInput("");
    setPrice(1500);
    setOpeningHour("1");
    setOpeningMinute("00");
    setOpeningAmPm("am");
    setClosingHour("1");
    setClosingMinute("00");
    setClosingAmPm("pm");
    setRating([]);
    setRatingOrder("high-to-low");
    setGroundStatus(["Available"]);
    setSportTypes([]);
    setSurfaceTypes([]);
    setMinUsers("1,200");
    setMaxUsers("5,000");
  };

  // Apply filters
  const handleApplyFilters = () => {
    // Here you would typically apply the filters to your data
    // For now, we'll just close the dialog
    onOpenChange(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowAdminDropdown(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] p-0 gap-0 overflow-auto max-h-[90vh]">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 border-b">
          <h2 className="text-xl font-semibold flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Admin */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Search Admin</label>
            <div className="relative">
              <input
                type="text"
                value={searchAdmin}
                onChange={handleAdminSearch}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAdminDropdown(true);
                }}
                placeholder="John"
                className="w-full p-2 border rounded-md"
              />
              {showAdminDropdown && searchAdmin && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredAdmins.map((admin) => (
                    <div
                      key={admin.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer border-b"
                      onClick={() => handleAdminSelect(admin.id)}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <img
                            src={admin.avatar || "/placeholder.svg"}
                            alt={admin.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <div className="font-medium text-sm">
                            {admin.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {admin.business}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Location</label>
            <div>
              <input
                type="text"
                value={locationInput}
                onChange={handleLocationInput}
                onKeyDown={handleAddLocation}
                placeholder="Enter Ground Location"
                className="w-full p-2 border rounded-md"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-md px-2 py-1"
                  >
                    <span className="text-sm">{location}</span>
                    <button
                      onClick={() => handleRemoveLocation(location)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Opening Timing */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Opening Timing</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={openingHour}
                onChange={(e) => setOpeningHour(e.target.value)}
                className="w-12 p-2 border rounded-md text-center"
                placeholder="hh"
              />
              <span>:</span>
              <input
                type="text"
                value={openingMinute}
                onChange={(e) => setOpeningMinute(e.target.value)}
                className="w-12 p-2 border rounded-md text-center"
                placeholder="mm"
              />
              <div className="flex">
                <button
                  onClick={() => setOpeningAmPm("am")}
                  className={cn(
                    "px-3 py-1 text-sm rounded-l-md border",
                    openingAmPm === "am"
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  )}
                >
                  am
                </button>
                <button
                  onClick={() => setOpeningAmPm("pm")}
                  className={cn(
                    "px-3 py-1 text-sm rounded-r-md border",
                    openingAmPm === "pm"
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  )}
                >
                  pm
                </button>
              </div>
            </div>
          </div>

          {/* Closing Timing */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Closing Timing</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={closingHour}
                onChange={(e) => setClosingHour(e.target.value)}
                className="w-12 p-2 border rounded-md text-center"
                placeholder="hh"
              />
              <span>:</span>
              <input
                type="text"
                value={closingMinute}
                onChange={(e) => setClosingMinute(e.target.value)}
                className="w-12 p-2 border rounded-md text-center"
                placeholder="mm"
              />
              <div className="flex">
                <button
                  onClick={() => setClosingAmPm("am")}
                  className={cn(
                    "px-3 py-1 text-sm rounded-l-md border",
                    closingAmPm === "am"
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  )}
                >
                  am
                </button>
                <button
                  onClick={() => setClosingAmPm("pm")}
                  className={cn(
                    "px-3 py-1 text-sm rounded-r-md border",
                    closingAmPm === "pm"
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  )}
                >
                  pm
                </button>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-2 border rounded-md p-3">
            <label className="font-medium text-sm">Rating</label>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setRatingOrder("high-to-low")}
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  ratingOrder === "high-to-low"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 border"
                )}
              >
                High to Low Rating
              </button>
              <button
                onClick={() => setRatingOrder("low-to-high")}
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  ratingOrder === "low-to-high"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 border"
                )}
              >
                Lower to High Rating
              </button>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={rating.includes(value)}
                    onChange={() => handleRatingToggle(value)}
                    className="hidden"
                  />
                  <div
                    className={cn(
                      "w-6 h-6 flex items-center justify-center border rounded-md",
                      rating.includes(value)
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-300"
                    )}
                  >
                    {rating.includes(value) && <Check className="h-4 w-4" />}
                  </div>
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Ground Status */}
          <div className="space-y-2 border rounded-md p-3">
            <label className="font-medium text-sm">Ground Status</label>
            <div className="flex flex-wrap gap-2">
              {["Available", "Booked", "Fully Booked", "Close"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusToggle(status)}
                    className={cn(
                      "px-2 py-1 text-xs rounded-md",
                      groundStatus.includes(status)
                        ? "bg-green-500 text-white"
                        : "bg-white text-gray-700 border"
                    )}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2 border rounded-md p-3">
            <div className="flex items-center justify-between">
              <label className="font-medium text-sm">Price</label>
              <span className="text-sm font-medium">₹ {price}</span>
            </div>
            <Slider
              value={[price]}
              min={0}
              max={5000}
              step={100}
              onValueChange={(value) => setPrice(value[0])}
              className="py-4"
            />
          </div>

          {/* Sport Type */}
          <div className="space-y-2 border rounded-md p-3">
            <label className="font-medium text-sm">Sport Type</label>
            <div className="grid grid-cols-2 gap-2">
              {["Cricket", "Tennis", "Football", "Golf", "Volleyball"].map(
                (sport) => (
                  <label key={sport} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-6 h-6 flex items-center justify-center border rounded-md cursor-pointer",
                        sportTypes.includes(sport)
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-300"
                      )}
                      onClick={() => handleSportTypeToggle(sport)}
                    >
                      {sportTypes.includes(sport) && (
                        <Check className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-sm">{sport}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Surface Type */}
          <div className="space-y-2 border rounded-md p-3">
            <label className="font-medium text-sm">Surface Type</label>
            <div className="grid grid-cols-2 gap-2">
              {["Grass", "Turf", "Synthetic", "Clay", "Wooden"].map(
                (surface) => (
                  <label key={surface} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-6 h-6 flex items-center justify-center border rounded-md cursor-pointer",
                        surfaceTypes.includes(surface)
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-300"
                      )}
                      onClick={() => handleSurfaceTypeToggle(surface)}
                    >
                      {surfaceTypes.includes(surface) && (
                        <Check className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-sm">{surface}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Min Users */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Min Users</label>
            <input
              type="text"
              value={minUsers}
              onChange={(e) => setMinUsers(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="1,200"
            />
          </div>

          {/* Max Users */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Max Users</label>
            <input
              type="text"
              value={maxUsers}
              onChange={(e) => setMaxUsers(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="5,000"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 z-10 flex justify-end gap-2 bg-white p-4 border-t">
          <button
            onClick={handleClearFilters}
            className="px-6 py-2 border rounded-md text-blue-600 hover:bg-blue-50"
          >
            Clear
          </button>
          <button
            onClick={handleApplyFilters}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
