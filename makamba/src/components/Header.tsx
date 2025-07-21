import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationItem {
  name: string;
  href: string;
}

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

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo icon with building bars */}
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-3">
                <div className="flex space-x-0.5">
                  <div className="w-1 h-5 bg-white"></div>
                  <div className="w-1 h-6 bg-white"></div>
                  <div className="w-1 h-4 bg-white"></div>
                  <div className="w-1 h-6 bg-white"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-black">Elitebuilders</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side - Search and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className='bg-black'>Contacto</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-black transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-black transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="bg-black">Contacto</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;