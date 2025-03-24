import { Button } from "../ui/button"
import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo2.webp"

export function Header() {
  const location = useLocation()
  
  return (
    <header className="border-b border-gray-700 bg-white backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-black">
          <img src={logo} alt="Logo" className="h-20 w-auto" /> 
          </Link>
          
          <div className="flex gap-4 text-black">   
            <Button 
              className={`hover:bg-pink-400 ${location.pathname === "/" ? "text-black" : ""}`} 
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              className={`hover:bg-pink-400 ${location.pathname === "/shop" ? "text-black" : ""}`} 
              asChild
            >
              <Link to="/shop">Shop</Link>
            </Button>
            <Button 
              className={`hover:bg-pink-400 ${location.pathname === "/sell" ? "text-black" : ""}`} 
              asChild
            >
              <Link to="/sell">Sell</Link>
            </Button>
            <Button 
              className={`hover:bg-pink-400 ${location.pathname === "/about" ? "text-black" : ""}`} 
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
            <Button 
              className={`hover:bg-pink-400 ${location.pathname === "/contact" ? "text-black" : ""}`} 
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <div className="flex gap-4 text-black">
            <Button 
              className="bg-pink-500 px-8 text-white hover:bg-pink-400 rounded-full" 
              asChild
            >
              <Link to="/buyer-signup">Signup</Link>
            </Button>

            <Button 
              className="border border-pink-300 px-8 text-black hover:bg-pink-400 rounded-full" 
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
