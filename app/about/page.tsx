import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-gradient-to-b from-[#0a0a29] to-[#1a1a4a] text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4">
            {/* Improved Hero Section with Better Layout */}
            <div className="relative mb-16">
              {/* Background glow effect */}
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="absolute -right-20 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>

              <div className="relative z-10 mb-8 flex flex-col items-center text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/30 px-4 py-1.5">
                  <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                    ABOUT
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider text-blue-400">
                    SPORTZ
                  </span>
                </div>
                <h1 className="mb-4 text-5xl font-bold uppercase tracking-tight md:text-7xl">
                  BOOK MY SPORTS
                </h1>
                <p className="max-w-2xl text-lg text-gray-300">
                  The World's #1 Sports Activity Hub
                </p>

                <div className="mt-8 flex justify-center">
                  <ChevronDown className="h-8 w-8 animate-bounce text-blue-400" />
                </div>
              </div>

              {/* Improved Image Gallery */}
              <div className="relative mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
                  {/* Left image - Cricket field */}
                  <div className="group relative md:col-span-7">
                    <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
                      <div className="relative h-64 w-full overflow-hidden md:h-80">
                        <Image
                          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000"
                          alt="Cricket field at night"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">
                            World-Class Facilities
                          </h3>
                          <p className="text-sm text-gray-300">
                            Book premium sports venues
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right image - Cricket player */}
                  <div className="group relative md:col-span-5">
                    <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
                      <div className="relative h-64 w-full overflow-hidden md:h-80">
                        <Image
                          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000"
                          alt="Cricket player batting"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">Elite Sports</h3>
                          <p className="text-sm text-gray-300">
                            Play your favorite games
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full border-2 border-blue-500 md:-bottom-6 md:-left-6 md:h-12 md:w-12"></div>
                <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full border-2 border-purple-500 md:-right-6 md:-top-6 md:h-12 md:w-12"></div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wider">
                OUR MISSION
              </h2>
              <p className="mx-auto max-w-3xl text-gray-300">
                To revolutionize the way sports enthusiasts discover, book, and
                enjoy sports activities. We're committed to making it easier for
                everyone to stay active and engage in their favorite sports.
              </p>
            </div>

            {/* Ads Section */}
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wider">
                ADS
              </h2>
              <div className="mx-auto h-20 max-w-3xl rounded-lg bg-blue-900/30"></div>
            </div>

            {/* Stats Section */}
            <div className="mb-16 rounded-lg bg-blue-900/20 p-8">
              <h2 className="mb-8 text-center text-2xl font-bold">
                Book my Sports Stats
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 md:text-4xl">
                    2M+
                  </p>
                  <p className="text-sm text-gray-300">Users</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 md:text-4xl">
                    100+
                  </p>
                  <p className="text-sm text-gray-300">Sports</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 md:text-4xl">
                    12M+
                  </p>
                  <p className="text-sm text-gray-300">Bookings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 md:text-4xl">
                    19M+
                  </p>
                  <p className="text-sm text-gray-300">Hours Played</p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="mb-2 text-center text-3xl font-bold uppercase tracking-wider">
                MEET THE TALENTED TEAM
              </h2>
              <p className="mb-8 text-center text-sm uppercase tracking-wider text-gray-300">
                WHO MAKE ALL THIS HAPPEN{" "}
                <span className="ml-1 inline-block h-1 w-16 bg-red-500"></span>
              </p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {[
                  {
                    name: "Alex Johnson",
                    role: "CEO & Founder",
                    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&q=80",
                  },
                  {
                    name: "Sarah Chen",
                    role: "CTO",
                    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&q=80",
                  },
                  {
                    name: "Michael Lee",
                    role: "Head of Design",
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&q=80",
                  },
                  {
                    name: "Emma Wilson",
                    role: "Marketing Lead",
                    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&q=80",
                  },
                  {
                    name: "Jamal Wright",
                    role: "Lead Developer",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80",
                  },
                  {
                    name: "David Miller",
                    role: "Product Manager",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&q=80",
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg bg-blue-900/30"
                  >
                    <div className="aspect-[3/4] w-full">
                      <Image
                        src={member.img || "/placeholder.svg"}
                        alt={`${member.name}, ${member.role}`}
                        width={225}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-xs text-gray-300">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-1 w-16 bg-red-500"></span>
                <h2 className="text-xl font-bold uppercase tracking-wider">
                  BE A PART OF
                </h2>
                <span className="h-1 w-16 bg-red-500"></span>
              </div>
              <p className="mb-8 text-4xl font-bold uppercase tracking-tight md:text-5xl">
                SOMETHING <span className="text-white">GREAT</span>
              </p>
              <Button className="bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700">
                JOIN NOW
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
