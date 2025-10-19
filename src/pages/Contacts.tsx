import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-500 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 px-4">
              We're here to help you succeed. Reach out anytime!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Have questions about our platform? Our support team is available 24/7 to assist you.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600">support@globalaxitrade.com</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-sm sm:text-base text-gray-600">+44 74 8886 4747</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      24/7 Customer Support<br />
                      Trading Platform: Always Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">How do I open an account?</h3>
              <p className="text-sm sm:text-base text-gray-600">Click "Register" and complete the simple online form in minutes.</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">What is the minimum deposit?</h3>
              <p className="text-sm sm:text-base text-gray-600">Standard accounts start from just $250.</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">How long do withdrawals take?</h3>
              <p className="text-sm sm:text-base text-gray-600">Typically processed within 24-48 hours.</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Is my money safe?</h3>
              <p className="text-sm sm:text-base text-gray-600">Yes, we use industry-leading security measures and are fully regulated.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
