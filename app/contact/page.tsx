"use client";

import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  // Add entrance animations when the page loads
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0a0a29] to-[#201456]">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          {/* Page Title */}
          <div className="mb-12 text-center animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
              CONTACT US
            </h1>
            <div className="mx-auto mb-4 h-1 w-20 bg-red-600"></div>
            <p className="text-lg text-gray-300">
              We'd love to hear from you. Get in touch with us!
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm animate-on-scroll opacity-0 transition-all duration-700 delay-100 -translate-x-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                      placeholder="John Doe"
                      required
                    />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                      placeholder="How can we help you?"
                      required
                    />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border-2 border-gray-600 bg-white/10 px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:border-gray-400"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>

                {/* Enhanced Send Message Button with Border Animation */}
                <div className="button-border-animation">
                  <button
                    type="submit"
                    className="relative z-10 w-full rounded-md bg-red-600 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-red-700 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll opacity-0 transition-all duration-700 delay-200 translate-x-8">
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start group">
                    <MapPin className="mr-4 h-6 w-6 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-300" />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Our Location
                      </h3>
                      <p className="text-gray-300">
                        123 Sports Avenue, Cricket Stadium, Mumbai, India 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <Phone className="mr-4 h-6 w-6 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-300" />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Phone Number
                      </h3>
                      <p className="text-gray-300">+91 98765 43210</p>
                      <p className="text-gray-300">+91 12345 67890</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <Mail className="mr-4 h-6 w-6 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-300" />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Email Address
                      </h3>
                      <p className="text-gray-300">info@bookmysports.com</p>
                      <p className="text-gray-300">support@bookmysports.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <Clock className="mr-4 h-6 w-6 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-300" />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Working Hours
                      </h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-300">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648642705274!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Social Media - Centered */}
          <div className="mx-auto mt-16 max-w-md rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm animate-on-scroll opacity-0 transition-all duration-700 delay-300 translate-y-8">
            <h3 className="mb-4 text-xl font-medium text-white">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/50"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white transition-all duration-300 hover:scale-110 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-400/50"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 text-white transition-all duration-300 hover:scale-110 hover:from-yellow-300 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/50"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Add CSS for animations */}
      <style jsx global>{`
        .animate-on-scroll {
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        /* Button Border Animation */
        .button-border-animation {
          position: relative;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .button-border-animation::before,
        .button-border-animation::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          border-radius: 0.375rem;
          pointer-events: none;
        }

        .button-border-animation::before {
          border: 2px solid transparent;
          background: linear-gradient(90deg, #ff3e3e, #ff267e, #ff0000, #ff3e3e)
            border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: border-rotate 4s linear infinite;
          background-size: 400% 100%;
        }

        .button-border-animation::after {
          background: transparent;
          border: 0px solid transparent;
          transition: all 0.3s ease;
        }

        .button-border-animation:hover::after {
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(255, 62, 62, 0.5);
        }

        @keyframes border-rotate {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 400% 0;
          }
        }

        @keyframes border-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
