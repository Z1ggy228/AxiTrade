import { TrendingUp, BarChart3, LineChart, Zap, Target, DollarSign } from 'lucide-react';

export default function Trading() {
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
              Advanced Trading Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 px-4">
              Trade with confidence using professional-grade tools and real-time market data
            </p>
            <a
              href="https://cabinet.globalaxitrade.com/auth/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
            >
              Start Trading Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trading Features
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Everything you need to succeed in the financial markets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Advanced Charts</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Multiple chart types with technical indicators and drawing tools
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Fast Execution</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Lightning-fast order execution with no requotes
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <LineChart className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Real-Time Data</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Live market prices and news feeds for informed trading decisions
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Risk Management</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Advanced stop-loss and take-profit tools to manage your risk
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Low Spreads</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Competitive spreads starting from 0.0 pips on major currency pairs
              </p>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Copy Trading</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Follow and copy successful traders automatically
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trading Instruments
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Access global markets from one platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-5 sm:p-6 rounded-xl text-center hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Forex</h3>
              <p className="text-sm sm:text-base text-gray-600">60+ currency pairs</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl text-center hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Stocks</h3>
              <p className="text-sm sm:text-base text-gray-600">Global equities</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl text-center hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Commodities</h3>
              <p className="text-sm sm:text-base text-gray-600">Gold, Oil, Silver</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl text-center hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Crypto</h3>
              <p className="text-sm sm:text-base text-gray-600">Major cryptocurrencies</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
