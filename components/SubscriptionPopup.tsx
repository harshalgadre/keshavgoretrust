'use client'

import { useEffect, useState } from 'react'

export default function SubscriptionPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000) // Show after 1 minute

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  const handleSubscribe = () => {
    const email = (document.getElementById('email-input') as HTMLInputElement)?.value
    if (email) {
      alert('Thank you for subscribing with: ' + email)
      closePopup()
    } else {
      alert('Please enter a valid email address')
    }
  }

  const handleGoogleSignIn = () => {
    alert('Continue with Google clicked!')
    closePopup()
  }

  const handleFacebookSignIn = () => {
    alert('Continue with Facebook clicked!')
    closePopup()
  }

  if (!isVisible) return null

  return (
    <div
      id="subscription-popup"
      className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup()
      }}
    >
      <div
        className={`bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl transform transition-transform duration-300 overflow-hidden ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <div className="bg-gradient-to-r from-primary to-primary-light p-6 relative">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-dark hover:text-dark/70 transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50"
          >
            <i className="fas fa-times"></i>
          </button>
          <h2 className="text-2xl font-bold text-dark">Join Our Community</h2>
          <p className="text-dark/80">Stay updated with our latest news, events, and impact stories.</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                type="email"
                id="email-input"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
          </div>

          <button
            onClick={handleSubscribe}
            className="w-full bg-primary text-dark px-4 py-3 rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-lg mb-4 flex items-center justify-center"
          >
            <span>Subscribe to Newsletter</span>
            <i className="fas fa-paper-plane ml-2"></i>
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-white border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="fab fa-google mr-3"></i>
              <span>Continue with Google</span>
            </button>

            <button
              onClick={handleFacebookSignIn}
              className="w-full flex items-center justify-center bg-[#1877F2] text-white px-4 py-3 rounded-lg hover:bg-[#166FE5] transition-colors"
            >
              <i className="fab fa-facebook-f mr-3"></i>
              <span>Continue with Facebook</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            By subscribing, you agree to our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>{' '}
            and consent to receive updates from Keshav Gore Smarak Trust.
          </p>
        </div>
      </div>
    </div>
  )
}

