import { TrendingUp, Shield, Clock, Users, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              Discover the Ultimate<br className="hidden sm:block" /><span className="sm:hidden"> </span>Brokerage Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 px-4">
              Unlock your financial potential with cutting-edge trading tools and expert support
            </p>
            <a
              href="https://cabinet.globalaxitrade.com/auth/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
            >
              Get Started
            </a>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gray-900">5+</div>
                <div className="text-xs sm:text-base text-gray-700">Years Trading Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gray-900">24/7</div>
                <div className="text-xs sm:text-base text-gray-700">Online Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gray-900">250K+</div>
                <div className="text-xs sm:text-base text-gray-700">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Experience trading excellence with our comprehensive suite of features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Advanced Trading Tools</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Access professional-grade charts, indicators, and analysis tools for informed decisions
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Secure & Regulated</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your funds are protected with industry-leading security measures and regulations
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">24/7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Round-the-clock customer service to assist you whenever you need help
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Global Community</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Join thousands of traders worldwide and share insights and strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We're committed to democratizing access to financial markets by providing
                cutting-edge technology, educational resources, and transparent trading conditions.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Our platform empowers traders of all levels to achieve their financial goals
                through innovative tools, competitive spreads, and unparalleled customer support.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/2025-10-14_17-02-37 copy.png"
                alt="Trading Platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Start Trading in 3 Simple Steps
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Begin your trading journey today
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Create Account</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Sign up in minutes with our streamlined registration process
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Fund Your Account</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Deposit funds securely using various payment methods
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Start Trading</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Access markets and execute trades with our intuitive platform
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Real experiences from our valued traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="John Smith"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">John Smith</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "My experience with the platform has been excellent. The profits exceeded my expectations, and my personal account manager supported me every step of the way. Truly grateful!"
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="/Screenshot_14 copy copy.png"
                  alt="Ahmed Al-Farsi"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Ahmed Al-Farsi</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "A very reliable platform. My account manager was professional and helped me with every detail. I felt safe while trading."
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Olivia Brown"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Olivia Brown</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "Thank you for the great results! I was able to achieve real profits, and the guidance from my account manager was spot on from the beginning."
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Mona Hussein"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Mona Hussein</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "I'm new to trading, but with the support I received—especially from my personal manager—I was able to move forward confidently. Thank you!"
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="David Lee"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">David Lee</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "An excellent and user-friendly platform. Most importantly, my account manager gave me strategies that worked 100%. Much appreciated!"
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Rami Khalil"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Rami Khalil</h4>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic">
                "I appreciated the transparency and clarity from the start. My account manager was always available to answer any questions. Very professional platform."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <details className="bg-white rounded-lg p-4 sm:p-6 cursor-pointer hover:bg-green-50 transition group">
              <summary className="font-semibold text-base sm:text-lg text-gray-900 flex items-center justify-between">
                What is the minimum deposit required?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                The minimum deposit varies by account type, starting from as low as $250 for standard accounts.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 sm:p-6 cursor-pointer hover:bg-green-50 transition group">
              <summary className="font-semibold text-base sm:text-lg text-gray-900 flex items-center justify-between">
                How long does withdrawal processing take?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                Withdrawals are typically processed within 24-48 hours, depending on your payment method.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 sm:p-6 cursor-pointer hover:bg-green-50 transition group">
              <summary className="font-semibold text-base sm:text-lg text-gray-900 flex items-center justify-between">
                Is the platform available on mobile?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                Yes, we offer fully-featured mobile apps for both iOS and Android devices.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 sm:p-6 cursor-pointer hover:bg-green-50 transition group">
              <summary className="font-semibold text-base sm:text-lg text-gray-900 flex items-center justify-between">
                What markets can I trade?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                Access forex, stocks, commodities, indices, and cryptocurrencies all from one platform.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
