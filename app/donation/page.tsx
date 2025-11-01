'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')

  const amounts = [500, 1000, 2500, 5000]

  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Support Our Cause</h1>
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
                    <span className="text-sm font-medium text-dark">Donate</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-gray-600 mb-4">
              Your contribution, no matter how small, can make a significant impact in the lives of those we serve. By
              donating to Keshav Gore Smarak Trust, you become a partner in our mission to create positive social
              change.
            </p>
            <p className="text-gray-600">
              We ensure that your donation is used effectively and transparently to support our various programs in
              education, healthcare, women empowerment, and rural development.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Donation Option</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* One-time Donation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-2xl font-bold">One-time Donation</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Make a one-time contribution to support our ongoing programs and initiatives.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setDonationType('one-time')
                      }}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedAmount === amount && donationType === 'one-time'
                          ? 'bg-primary border-primary text-dark'
                          : 'border-gray-300 hover:bg-primary hover:border-primary'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedAmount(null)
                      setDonationType('one-time')
                    }}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedAmount === null && donationType === 'one-time'
                        ? 'bg-primary border-primary text-dark'
                        : 'border-gray-300 hover:bg-primary hover:border-primary'
                    }`}
                  >
                    Other
                  </button>
                </div>
                <button
                  onClick={() => setDonationType('one-time')}
                  className="w-full bg-primary text-dark px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Monthly Donation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-2xl font-bold">Monthly Donation</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Set up a recurring monthly donation to provide sustained support to our programs and initiatives.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setDonationType('monthly')
                      }}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedAmount === amount && donationType === 'monthly'
                          ? 'bg-primary border-primary text-dark'
                          : 'border-gray-300 hover:bg-primary hover:border-primary'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedAmount(null)
                      setDonationType('monthly')
                    }}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedAmount === null && donationType === 'monthly'
                        ? 'bg-primary border-primary text-dark'
                        : 'border-gray-300 hover:bg-primary hover:border-primary'
                    }`}
                  >
                    Other
                  </button>
                </div>
                <button
                  onClick={() => setDonationType('monthly')}
                  className="w-full bg-primary text-dark px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Donate Monthly
                </button>
              </div>
            </div>

            {/* Sponsor a Program */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-2xl font-bold">Sponsor a Program</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Sponsor a specific program or initiative that aligns with your values and interests.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-primary text-dark text-center px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          {donationType && (
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Donation Details</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert(`Thank you for your ${donationType} donation of ₹${selectedAmount || 'custom amount'}!`)
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Donation Amount</label>
                  <input
                    type="number"
                    value={selectedAmount || ''}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <button
                  type="submit"
                  className="w-full bg-primary text-dark px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}

