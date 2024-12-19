import Link from 'next/link'
    import { Button } from "@/components/ui/button"
    import { Search } from 'lucide-react'

    export default function Header() {
      return (
        <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="text-2xl font-serif font-bold text-primary">
                4rooms<span className="text-white">.ai</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/events" className="text-gray-300 hover:text-primary transition-colors">Events</Link>
                <Link href="/rooms" className="text-gray-300 hover:text-primary transition-colors">Rooms</Link>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="default">Sign In</Button>
              </div>
            </div>
          </div>
        </header>
      )
    }
