import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '../components/ModeToggle';

interface NavigationItem {
  name: string;
  href: string;
}

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <button className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${className}`}>
    {children}
  </button>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Serviços', href: '#' },
    { name: 'FQAs', href: '#' },
    { name: 'Contacto', href: '#' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Previne scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="dark:bg-gray-900 dark:text-white bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo icon with building bars */}
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-3">
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-5 bg-white "></div>
                    <div className="w-1 h-6 bg-white "></div>
                    <div className="w-1 h-4 bg-white "></div>
                    <div className="w-1 h-6 bg-white "></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">MakambaTech</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 dark:text-white rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side - Search and Contact */}
            <div className="hidden md:flex items-center space-x-4">
               <ModeToggle />
              <Button className='dark:bg-white dark:text-black bg-black text-white hover:bg-gray-800'>Contacto</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ModeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-500 hover:text-black transition-colors duration-200"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Sidebar */}
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-3">
                <div className="flex space-x-0.5">
                  <div className="w-1 h-5 bg-white"></div>
                  <div className="w-1 h-6 bg-white"></div>
                  <div className="w-1 h-4 bg-white"></div>
                  <div className="w-1 h-6 bg-white"></div>
                </div>
              </div>
              <span className="text-lg font-bold text-black">Elitebuilders</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-black transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="px-6 py-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg text-base font-medium transition-all duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="mt-8">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
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