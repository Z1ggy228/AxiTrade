import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (user) {
      loadUnreadCount();
      const interval = setInterval(loadUnreadCount, 30000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const loadUnreadCount = async () => {
    try {
      const { count, error } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'new');

      if (error) throw error;
      setUnreadCount(count || 0);
    } catch (error) {
      console.error('Error loading unread count:', error);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/trading', label: 'Trading' },
    { path: '/about', label: 'About' },
    { path: '/contacts', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img src="/axi icon.png" alt="Axi Trade" className="h-16 sm:h-20 lg:h-32" />
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
                href="https://www.instagram.com/axitradeofficial?igsh=eGN6NjhkN2Q1dzRs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block p-2 hover:bg-green-50 rounded-lg transition"
                aria-label="Instagram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-7 sm:h-7">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FED373', stopOpacity: 1 }} />
                      <stop offset="25%" style={{ stopColor: '#F15245', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#D92E7F', stopOpacity: 1 }} />
                      <stop offset="75%" style={{ stopColor: '#9B36B7', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#515ECF', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)"/>
                </svg>
              </a>
              <a
                href="https://t.me/axi_trade"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block p-2 hover:bg-green-50 rounded-lg transition"
                aria-label="Telegram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-7 sm:h-7">
                  <circle cx="12" cy="12" r="10" fill="#0088cc"/>
                  <path d="M7.5 11.5L16.5 8L14 16L11 13.5L9 15.5L8.5 13L7.5 11.5Z" fill="white"/>
                  <path d="M16.5 8L11 13.5L9 15.5" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
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
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="px-4 py-2 text-sm text-gray-500 font-medium">Follow Us</p>
                  <div className="flex items-center justify-center gap-4 px-4 py-2">
                    <a
                      href="https://www.instagram.com/axitradeofficial?igsh=eGN6NjhkN2Q1dzRs&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-green-50 rounded-lg transition"
                      aria-label="Instagram"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="instagram-gradient-mobile" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#FED373', stopOpacity: 1 }} />
                            <stop offset="25%" style={{ stopColor: '#F15245', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#D92E7F', stopOpacity: 1 }} />
                            <stop offset="75%" style={{ stopColor: '#9B36B7', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#515ECF', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient-mobile)" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient-mobile)" strokeWidth="2" fill="none"/>
                        <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient-mobile)"/>
                      </svg>
                    </a>
                    <a
                      href="https://t.me/axi_trade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-green-50 rounded-lg transition"
                      aria-label="Telegram"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#0088cc"/>
                        <path d="M7.5 11.5L16.5 8L14 16L11 13.5L9 15.5L8.5 13L7.5 11.5Z" fill="white"/>
                        <path d="M16.5 8L11 13.5L9 15.5" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
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
                <img src="/axi icon.png" alt="Axi Trade" className="h-12 sm:h-24 md:h-28 brightness-0 invert opacity-90" />
              </div>
              <p className="text-center text-xs sm:text-base md:text-lg text-gray-400 max-w-2xl px-4">
                Professional trading platform for global financial markets
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4 sm:pt-10">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <a
                    href="https://www.instagram.com/axitradeofficial?igsh=eGN6NjhkN2Q1dzRs&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-800 rounded-lg transition"
                    aria-label="Instagram"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-7 sm:h-7">
                      <defs>
                        <linearGradient id="instagram-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#FED373', stopOpacity: 1 }} />
                          <stop offset="25%" style={{ stopColor: '#F15245', stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: '#D92E7F', stopOpacity: 1 }} />
                          <stop offset="75%" style={{ stopColor: '#9B36B7', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#515ECF', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient-footer)" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient-footer)" strokeWidth="2" fill="none"/>
                      <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient-footer)"/>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/axi_trade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-800 rounded-lg transition"
                    aria-label="Telegram"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-7 sm:h-7">
                      <circle cx="12" cy="12" r="10" fill="#0088cc"/>
                      <path d="M7.5 11.5L16.5 8L14 16L11 13.5L9 15.5L8.5 13L7.5 11.5Z" fill="white"/>
                      <path d="M16.5 8L11 13.5L9 15.5" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">&copy; 2025 AxiTrade. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
