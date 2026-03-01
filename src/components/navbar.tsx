"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Check-In", href: "/dashboard" },
    { name: "Wellness", href: "/wellness" },
    { name: "Joy Missions", href: "/missions" },
    { name: "Analytics", href: "/analytics" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full 
          bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/basil.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-white font-semibold">CheerBoard</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                ${
                  pathname === link.href
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-lg p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close button */}
          <button className="text-white mb-6" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>

          {/* Links */}
          <div className="flex flex-col gap-4 ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm transition
                ${
                  pathname === link.href
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 border-t border-white/20 pt-4">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}