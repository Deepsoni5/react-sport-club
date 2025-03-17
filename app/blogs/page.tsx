"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for recent blogs
const recentBlogs = [
  {
    id: 1,
    title: "How Cricket is set to revolutionize sports in the USA",
    date: "June 15, 2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Top 10 sports facilities you must visit this summer",
    date: "June 10, 2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "How to prepare for your first marathon - expert tips",
    date: "June 5, 2023",
    image: "/placeholder.svg?height=80&width=80",
  },
];

// Sample data for all blogs
const allBlogs = [
  {
    id: 1,
    title: "LEARN FROM OUR EXPERT ABOUT GAME STRATEGIES",
    date: "JUNE 15, 2023",
    description:
      "Discover the latest strategies and techniques from our professional coaches...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "LEARN TIPS TO STAY FIT DURING OFFSEASON",
    date: "JUNE 10, 2023",
    description:
      "Stay in top shape during the offseason with these expert-recommended tips...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "LEARN FROM PROS TO IMPROVE YOUR GAME",
    date: "JUNE 5, 2023",
    description:
      "Take your skills to the next level with advice from professional athletes...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "LEARN ABOUT THE FUTURE OF SPORTS TECH",
    date: "JUNE 1, 2023",
    description:
      "Explore how technology is changing the landscape of sports and athletics...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "TOP NUTRITION TIPS FOR ATHLETES",
    date: "MAY 28, 2023",
    description:
      "Learn about the best foods and supplements to fuel your athletic performance...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "MENTAL HEALTH IN SPORTS: BREAKING STIGMAS",
    date: "MAY 25, 2023",
    description:
      "How athletes are leading the conversation about mental health in sports...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "THE RISE OF ESPORTS IN THE GLOBAL ARENA",
    date: "MAY 20, 2023",
    description:
      "Exploring how competitive gaming is becoming a mainstream sporting phenomenon...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "WOMEN IN SPORTS: BREAKING BARRIERS",
    date: "MAY 15, 2023",
    description:
      "Celebrating female athletes who are changing the landscape of sports worldwide...",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 4;
  const pageCount = Math.ceil(allBlogs.length / blogsPerPage);

  // Get current blogs
  const indexOfLastBlog = (currentPage + 1) * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to previous page
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Go to next page
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0a0a29] to-[#201547]">
      <SiteHeader />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero and Recent Blogs Section */}
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Featured Blog */}
            <div className="relative h-[300px] overflow-hidden rounded-lg lg:col-span-2 lg:h-[400px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Cycling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  DISCOVER THE MEMBER BENEFITS OF USA CYCLING
                </h2>
              </div>
            </div>

            {/* Recent Blogs */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">Recent Blogs</h3>

              {recentBlogs.map((blog) => (
                <div key={blog.id} className="flex gap-3">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {blog.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Blogs Section */}
          <div className="mb-8">
            <div className="mb-6 flex items-center">
              <div className="mr-2 h-1 w-8 bg-red-600"></div>
              <h2 className="text-2xl font-bold text-white">ALL BLOGS</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="overflow-hidden rounded-lg bg-[#0a0a29]/50"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mb-2 text-xs text-gray-400">{blog.date}</p>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-400">{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination with numbers and prev/next buttons */}
          <div className="mb-8 flex items-center justify-center space-x-2">
            {/* Previous button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className={`flex h-8 w-8 items-center justify-center rounded ${
                currentPage === 0
                  ? "cursor-not-allowed bg-gray-700 text-gray-500"
                  : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page numbers */}
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index)}
                className={`flex h-8 w-8 items-center justify-center rounded text-sm font-medium ${
                  currentPage === index
                    ? "bg-red-600 text-white"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                }`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === pageCount - 1}
              className={`flex h-8 w-8 items-center justify-center rounded ${
                currentPage === pageCount - 1
                  ? "cursor-not-allowed bg-gray-700 text-gray-500"
                  : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
