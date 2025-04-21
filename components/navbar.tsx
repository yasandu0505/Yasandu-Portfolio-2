"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.includes("/projects/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (isProjectPage) {
      window.location.href = `/${sectionId}`;
      return;
    }

    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
              I'm Yasii
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                className="text-foreground/70 hover:text-foreground"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/yasandu0505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/yasandu-imanjith-17b760278"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <Link href="/resume.pdf" download>
                <DownloadIcon className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-16 z-50 border-b bg-background p-4 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <div className="mt-4 flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <Link href="/resume.pdf" download>
                    <DownloadIcon className="h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
