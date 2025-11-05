"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 md:pt-4 z-50">
      <div className="flex flex-col h-16 items-center justify-center">
        <div className="flex items-center">
          <nav className="hidden md:flex lg:flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#8c6350] text-xl hover:text-[#8c6350]/80 hover:text-2xl transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <hr className="w-1/3 my-2 hidden md:block border-black" />
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X color="black" className="h-5 w-5 " />
            ) : (
              <Menu color="black" className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-14 z-40 md:hidden",
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in-20",
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="container flex flex-col items-center gap-6 md:pt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
