"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function CareersPage() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#000314] via-[#100B47] to-[#000314]">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-16 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Form */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
              CAREER
            </h1>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-red-600"></div>
              <p className="text-white">Appeal Form</p>
            </div>

            <form className="space-y-8 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
              <div className="group">
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    defaultValue="Syed Talha Ahmed"
                    className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Email ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                    placeholder="example@email.com"
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                    placeholder="+91 00000 00000"
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                    placeholder="City, Country"
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </div>
              </div>

              <div className="group">
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-white bg-blue-500/20 hover:bg-blue-500/30 flex gap-2 font-medium transition-all duration-300 px-4 py-2 group-hover:scale-105"
                >
                  <Upload size={16} />
                  Upload Resume
                </Button>
              </div>

              <div className="relative overflow-hidden">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 mt-4 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
                >
                  <span className="relative z-10">SUBMIT</span>
                </Button>
              </div>
            </form>
          </div>

          {/* Right side - Image with wavy border */}
          <div className="relative hidden md:block animate-on-scroll opacity-0 transition-all duration-700 delay-200 translate-x-8">
            <div className="absolute inset-0 -m-8">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="1"
                  d="M40,80 C20,100 20,120 40,140 C60,160 80,160 100,140 C120,120 140,120 160,140 C180,160 180,180 160,200"
                  className="opacity-20"
                />
                <path
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="1"
                  d="M40,70 C20,90 20,110 40,130 C60,150 80,150 100,130 C120,110 140,110 160,130 C180,150 180,170 160,190"
                  className="opacity-40"
                />
                <path
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="1"
                  d="M40,60 C20,80 20,100 40,120 C60,140 80,140 100,120 C120,100 140,100 160,120 C180,140 180,160 160,180"
                  className="opacity-60"
                />
                <path
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="1"
                  d="M40,50 C20,70 20,90 40,110 C60,130 80,130 100,110 C120,90 140,90 160,110 C180,130 180,150 160,170"
                  className="opacity-80"
                />
                <path
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="1"
                  d="M40,40 C20,60 20,80 40,100 C60,120 80,120 100,100 C120,80 140,80 160,100 C180,120 180,140 160,160"
                  className="opacity-100"
                />
              </svg>
            </div>
            <div className="relative rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
                alt="Cricket Umpire"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
