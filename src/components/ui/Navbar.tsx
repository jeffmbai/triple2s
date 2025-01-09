"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type TVariant = "dropdown" | "bordered"

// We've simplified the interfaces to just what we need
interface NavItem {
  id: number;
  name: string;
  href: string;
  icon?: boolean;
  variant?: TVariant
}

interface NavButtonProps {
  icon?: boolean;
  variant?: TVariant;
  children: React.ReactNode;
  className?: string;
  href: string;
}

function NavButton({
  icon,
  children,
  className = "",
  href,
  variant,
}: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "bordered") {
    return (
      <div className="p-[3px] bg-gradient-to-r from-[#3301E0] to-[#CD02DF] rounded-full">
        <div className="bg-black rounded-full hover:bg-transparent transition-all duration-300 ease-in-out cursor-pointer px-4 md:px-8 py-2">{children}</div>
      </div>
    );
  }
  return (
    <Link
      href={href}
      className={`
        group
        relative
        inline-flex items-center justify-center
        rounded-full border border-[#ffffff4d]
        px-4 md:px-8 py-2
        text-base text-white
        overflow-hidden
        transition-all duration-300 ease-in-out
        hover:border-transparent
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        focus:ring-offset-black
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      {icon && <ChevronDown className="ml-3.5 w-5 h-5 relative z-10" />}
      <span
        className="absolute inset-0 bg-black transition-opacity duration-200 ease-in-out"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#3301E0] to-[#CD02DF] transition-opacity duration-200 ease-in-out"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation data without dropdown items
  const navButtonData: NavItem[] = [
    // {
    //   id: 0,
    //   name: "Services",
    //   href: "/services",
    //   icon: true,
    // },
    {
      id: 1,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 2,
      name: "The Team",
      href: "/team",
    },
    {
      id: 3,
      name: "Book a Call",
      href: "/book-a-call",
      variant: "bordered"
    },
  ];

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between lg:py-8">
        {/* Logo with hover effect */}
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={46}
            height={32}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="relative group">
            <NavButton
              href="/book-a-call"
              icon={true}
              className="group-hover:hidden"
            >
              Services
            </NavButton>

            <div className="opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 absolute p-[40px] right-0 -top-[30px] w-[444px] hidden mt-2 space-y-2 bg-[rgba(21, 21, 21, 0.40)] rounded-3xl group-hover:block text-white bg-opacity-10 backdrop-blur-3xl border-white/20 shadow-lg">
              <div className="flex flex-col gap-[40px]">
                <p className="border-b text-2xl leading-7 text-white border-gray-600 pb-[40px] font-light">
                  Services
                </p>
                <div className="flex flex-wrap gap-[16px]">
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    SEO
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Influencer Marketing
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Google Ads
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Video Marketing
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Paid Social
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Public Relations
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Social Media
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Website Design
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Facebook Ads Agency
                  </div>
                  <div className="w-[45%] cursor-pointer hover:text-white/80 font-light transition duration-200 text-base leading-7">
                    Mobile App Development
                  </div>
                </div>
              </div>
            </div>
          </div>
          {navButtonData.map((item) => (
            <NavButton key={item.id} href={item.href} icon={item.icon} variant={item.variant}>
              {item.name}
            </NavButton>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation with smooth transitions */}
      <div
        id="mobile-menu"
        className={`
          transform transition-all duration-300 ease-in-out z-50
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }
          md:hidden
        `}
      >
        <nav className="absolute top-full left-0 right-0 bg-black/95 border-t border-[#ffffff1a] overflow-hidden">
          {navButtonData.map((item) => (
            <NavButton
              key={item.id}
              href={item.href}
              icon={item.icon}
              className="w-full justify-start rounded-none py-4 border-none hover:bg-white/5"
            >
              {item.name}
            </NavButton>
          ))}
        </nav>
      </div>
    </header>
  );
}
