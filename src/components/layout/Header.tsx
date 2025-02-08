import { Button } from "../ui/button"
import { Link, useLocation } from "react-router-dom"

export function Header() {
  const location = useLocation()
  
  return (
    <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            Demo App
          </Link>
          
          <div className="flex gap-4">
            <Button
              variant={location.pathname === "/" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={location.pathname === "/about" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            <Button
              variant={location.pathname === "/login" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
} 