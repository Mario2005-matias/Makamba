import type React from "react";
import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Logo from "../assets/logo/VT.png";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationItem {
  name: string;
  href: string;
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems: NavigationItem[] = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Sobre", href: "/sobre" },
      { name: "Serviços", href: "/Servicos" },
      { name: "Testemunhas", href: "/testemunhas" },
      { name: "FQAs", href: "/faq" },
      { name: "Contacto", href: "/Contacto" },
    ],
    []
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, mounted]);

  return (
    <>
      <header id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => handleNavigate("/")}
                className="flex-shrink-0 flex items-center focus:outline-none"
              >
                <img src={Logo} alt="makamba tec Logotipo" className="w-40" />
              </button>
            </div>

            <nav className="hidden min-[924px]:flex space-x-3">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Button
                    key={item.name}
                    onClick={() => handleNavigate(item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none ${
                      isActive
                        ? "text-[#FF6700]"
                        : isScrolled
                        ? "text-gray-700 dark:text-white hover:text-[#FF6700]"
                        : "text-gray-800 hover:text-[#FF6700]"
                    }`}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </nav>

            <div className="hidden min-[924px]:flex items-center space-x-4">
              <ModeToggle />
              <Button
                onClick={() => handleNavigate("/contacto")}
                className="bg-[#FF6700] text-white hover:bg-[#CC191B] hover:duration-300"
              >
                Contacto
              </Button>
            </div>

            <div className="min-[924px]:hidden flex items-center space-x-2">
              <ModeToggle />
              <button
                onClick={toggleMobileMenu}
                className={`p-2 transition-colors duration-200 focus:outline-none ${
                  isScrolled
                    ? "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-sm"
                }`}
              >
                <Menu className="h-6 w-6 hover:rotate-90 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 min-[924px]:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <button
              onClick={() => handleNavigate("/")}
              className="flex items-center focus:outline-none"
            >
              <img src={Logo} alt="makamba tec Logotipo" className="w-40" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item.href)}
                    className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg focus:outline-none ${
                      isActive
                        ? "text-[#FF6700] bg-orange-50 dark:bg-orange-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF6700] hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8">
              <Button
                onClick={() => handleNavigate("/contacto")}
                className="w-full bg-[#FF6700] text-white hover:bg-[#CC191B] hover:duration-300 transition-colors duration-200"
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
