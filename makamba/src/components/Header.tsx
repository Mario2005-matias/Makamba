import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import Logo from "../assets/logo/VT.png"

interface NavigationItem {
  name: string
  href: string
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`}>
    {children}
  </button>
)

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navigationItems: NavigationItem[] = useMemo(() => [
    { name: "Home", href: "#header" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#services" },
    { name: "Testemunhas", href: "#Testemunhas" },
    { name: "FQAs", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ], [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80 // Height of fixed header
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }

    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  // Handle scroll detection and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)

      // Determine active section
      const sections = navigationItems.map((item) => item.href.replace("#", ""))
      const headerHeight = 80

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop - headerHeight - 100
          if (scrollTop >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navigationItems])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("#sobre")}
                className="flex-shrink-0 flex items-center focus:outline-none"
              >
               <img src={Logo} alt="makamba tec Logotipo" className="w-40" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden min-[924px]:flex space-x-3">
              {navigationItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none ${
                      isActive
                        ? "text-[#FF6700]"
                        : isScrolled
                          ? "text-gray-700 dark:text-white hover:text-[#FF6700]"
                          : "text-gray-800 hover:text-[#FF6700]"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </nav>

            {/* Right side - Mode Toggle and Contact */}
            <div className="hidden min-[924px]:flex items-center space-x-4">
              <ModeToggle />
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="bg-[#FF6700] text-white hover:bg-[#CC191B] hover:duration-300"
              >
                Contacto
              </Button>
            </div>

            {/* Mobile menu button */}
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
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => scrollToSection("#home")} className="flex items-center focus:outline-none">
             <img src={Logo} alt="makamba tec Logotipo" className="w-40" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="px-6 py-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg focus:outline-none ${
                      isActive
                        ? "text-[#FF6700] bg-orange-50 dark:bg-orange-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF6700] hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </nav>

            {/* Contact Button */}
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="w-full bg-[#FF6700] text-white hover:bg-[#CC191B] hover:duration-300 transition-colors duration-200"
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
