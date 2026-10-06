'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function ContactPage() {
  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <div className="flex justify-center mt-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-sm font-medium text-dark hover:text-primary-dark">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-dark mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="text-sm font-medium text-dark">Contact Us</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Head Office */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-dark text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Head Office</h3>
              <p className="text-gray-600 mb-4">
                Keshav Gore Smarak Trust, Navin Varsha Colony (E), Kher Nagar, Bandra (E) - Mumbai 400051
              </p>
              <div className="flex items-center justify-center mb-2">
                <i className="fas fa-phone-alt text-primary mr-2"></i>
                <span>+91-22-12345678</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a href="mailto:kgstmtnl@gmail.com" className="hover:text-primary">
                  kgstmtnl@gmail.com
                </a>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-dark text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Kalyan Branch</h3>
              <p className="text-gray-600 mb-4">
                Keshav Gore Smarak Trust, Kalyan Branch, Mumbai Nagar, 1st Railway Line, Teen Haat Naka, Kalyan (E) -
                421303
              </p>
              <div className="flex items-center justify-center mb-2">
                <i className="fas fa-phone-alt text-primary mr-2"></i>
                <span>+91-251-12345678</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a href="mailto:kgstkalyan@gmail.com" className="hover:text-primary">
                  kgstkalyan@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-dark text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <div className="text-gray-600 space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your message! We will get back to you soon.')
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-dark px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}

