import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Navigate to home page
    navigate('/');
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-white backdrop-blur-md border-b border-gray-200 shadow-md"
      : "bg-white"
  }`}
>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-16" : "h-16"
          }`}
        >
          {/* Logo */}
         <div className="flex items-center gap-3">
  {/* First Logo */}
  <button onClick={handleLogoClick} className="cursor-pointer">
  <img
    src="lg.png"
    alt="GMS Logo"
    className="h-14 w-14 bg-white rounded-full object-cover shadow-sm hover:scale-105 transition-transform duration-300"
  />
</button>

  {/* Text Logo */}
  <button onClick={handleLogoClick} className="cursor-pointer">
  <img
    src="gms.png"
    alt="GMS Text Logo"
    className="h-10 object-contain"
  />
</button>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-white/95 to-gray-100/95 backdrop-blur-md border-b border-gray-200 shadow-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 hover:text-gray-900 font-medium py-2 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="w-full border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium mt-4"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
