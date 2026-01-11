'use client'

import Link from 'next/link'
import { BookOpen, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/themas', label: 'Themas' },
    { href: '/visie', label: 'Visie' },
    { href: '/didactiek', label: 'Didactiek' },
    { href: '/partners', label: 'Partners' },
    { href: '/verantwoording', label: 'Verantwoording' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <BookOpen className="h-6 w-6 text-deep-water-blue group-hover:text-polder-green transition-colors" />
            <span className="text-xl font-serif font-bold text-deep-water-blue group-hover:text-polder-green transition-colors">
              De West-Friese Wereld
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:text-deep-water-blue font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="md:hidden text-gray-700 hover:text-deep-water-blue transition-colors p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col space-y-6 mt-4">
                <div className="flex items-center space-x-2 mb-6 pb-6 border-b border-gray-200">
                  <BookOpen className="h-6 w-6 text-deep-water-blue" />
                  <span className="text-xl font-serif font-bold text-deep-water-blue">
                    De West-Friese Wereld
                  </span>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link 
                        href={link.href}
                        className="text-gray-700 hover:text-deep-water-blue font-medium transition-colors py-2 text-lg"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
