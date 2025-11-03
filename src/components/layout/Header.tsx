import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/dsnextlogo-nobg.png";
import { useIndustryList } from "../../hooks/useIndustries";
import { useExpertiseCards } from "../../hooks/useSupabaseData";

interface NavLink {
  text: string;
  href: string;
  dropdown?: Array<{
    text: string;
    href: string;
  }>;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    { text: "Home", href: "/" },
    {
      text: "Our Expertise",
      href: "/expertise",
      dropdown: [
        { text: "Mobile Development", href: "/expertise/mobile" },
        { text: "Web Development", href: "/expertise/web" },
        { text: "Data Management", href: "/expertise/data" },
      ],
    },
    {
      text: "Industries",
      href: "/industries",
      dropdown: [
        { text: "Fintech", href: "/industries/fintech" },
        { text: "Healthcare", href: "/industries/healthcare" },
        { text: "Retail", href: "/industries/retail" },
      ],
    },
    { text: "Our People", href: "/people" },
    {
      text: "About Us",
      href: "/about",
    },
    { text: "Contact Us", href: "/contact" },
  ]);
  const { industries } = useIndustryList();
  const { expertise } = useExpertiseCards();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (industries) {
      const newNavLinks = navLinks.map((link) => {
        if (link.text === "Industries") {
          return {
            ...link,
            dropdown: industries.map((industry) => ({
              text: industry.title,
              href: `/industries/${industry.slug}`,
            })),
          };
        }
        return link;
      });
      setNavLinks(newNavLinks);
    }
    if (expertise) {
      const newNavLinks = navLinks.map((link) => {
        if (link.text === "Our Expertise") {
          return {
            ...link,
            dropdown: expertise.map((expertise) => ({
              text: expertise.title,
              href: `/expertise/${expertise.slug}`,
            })),
          };
        }
        return link;
      });
      setNavLinks(newNavLinks);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (index: number) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = (currentIndex: number) => {
    const timer = setTimeout(() => {
      if (activeDropdown === currentIndex) {
        setActiveDropdown(null);
      }
    }, 300);
    setDropdownTimer(timer);
  };

  const isScrolled = scrollPosition > 10;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isScrolled || isOpen ? "text-blue-600" : "text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="Logo" width={150} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.dropdown && handleDropdownEnter(index)}
                onMouseLeave={() => link.dropdown && handleDropdownLeave(index)}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-medium ${
                    isScrolled ? "text-gray-800" : "text-gray-200"
                  } hover:text-blue-600 transition-colors duration-300 flex items-center py-2`}
                >
                  {link.text}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {link.dropdown && activeDropdown === index && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                    onMouseEnter={() => handleDropdownEnter(index)}
                    onMouseLeave={() => handleDropdownLeave(index)}
                  >
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md focus:outline-none ${
              isScrolled || isOpen ? "text-gray-800" : "text-gray-800"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link, index) => (
              <div key={index} className="py-1">
                <div
                  className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-blue-50"
                  onClick={() => link.dropdown && handleDropdownEnter(index)}
                >
                  <Link
                    to={link.href}
                    className="text-gray-800 hover:text-blue-600 block w-full"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                  {link.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {link.dropdown && activeDropdown === index && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-md hover:text-blue-600"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
