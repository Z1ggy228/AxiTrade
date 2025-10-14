import { Target, Award, Users, Globe } from 'lucide-react';

export default function About() {
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
              About AxiTrade
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 px-4">
              Your trusted partner in financial trading excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Founded with a vision to democratize access to financial markets, AxiTrade has grown
              into a leading online brokerage platform serving traders worldwide. We believe that
              everyone should have the opportunity to participate in global financial markets with
              the same tools and resources available to professional traders.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Over the years, we've built a reputation for transparency, innovation, and exceptional
              customer service. Our platform combines cutting-edge technology with user-friendly design,
              making it easy for both beginners and experienced traders to achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Transparency</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Clear pricing and honest communication in everything we do
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Committed to providing the best trading experience possible
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Customer First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your success is our success - we're here to support you
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Continuously evolving to meet the needs of modern traders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">250K+</div>
              <div className="text-sm sm:text-base text-gray-600">Active Traders</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">$2B+</div>
              <div className="text-sm sm:text-base text-gray-600">Trading Volume</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">150+</div>
              <div className="text-sm sm:text-base text-gray-600">Countries Served</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-500 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
              Be part of a global network of successful traders
            </p>
            <a
              href="https://cabinet.globalaxitrade.com/auth/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-500 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-50 transition"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
