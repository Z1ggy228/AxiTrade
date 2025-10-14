import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/trading', label: 'Trading' },
    { path: '/about', label: 'About' },
    { path: '/contacts', label: 'Contacts' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img src="/axi Black .png" alt="Axi Trade" className="h-16 sm:h-20 lg:h-32" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2.5 text-base whitespace-nowrap rounded-lg transition font-medium ${
                    location.pathname === link.path
                      ? 'bg-green-500 text-white font-semibold'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="https://cabinet.globalaxitrade.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition font-medium"
              >
                Login
              </a>
              <a
                href="https://cabinet.globalaxitrade.com/auth/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
              >
                Register
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:bg-green-50 rounded-lg transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-base rounded-lg transition font-medium ${
                      location.pathname === link.path
                        ? 'bg-green-500 text-white font-semibold'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16 sm:pt-16 md:pt-20">{children}</main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-4 sm:mb-12">
              <div className="mb-3 sm:mb-6">
                <img src="/axi Black .png" alt="Axi Trade" className="h-12 sm:h-24 md:h-28 brightness-0 invert opacity-90" />
              </div>
              <p className="text-center text-xs sm:text-base md:text-lg text-gray-400 max-w-2xl px-4">
                Professional trading platform for global financial markets
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4 sm:pt-10">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500">&copy; 2025 AxiTrade. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
