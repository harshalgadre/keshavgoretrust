'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Preloader
    const preloader = document.getElementById('preloader')
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0'
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 300)
      }, 500)
    }

    // Back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Preloader */}
      <div id="preloader" className="fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-300">
        <div className="w-12 h-12 border-4 border-primary-light rounded-full border-t-primary animate-spin"></div>
      </div>

      <Header />
      <Navigation />

      {/* News Ticker */}
      <div className="bg-secondary/10 py-2 overflow-hidden border-y border-secondary/20">
        <div className="whitespace-nowrap">
          <div className="inline-block animate-[ticker_30s_linear_infinite]">
            <span className="mx-4 font-medium text-dark">COVID-19 Relief: Distributed 5000+ food packages to families in need</span>
            <span className="mx-4 font-medium text-secondary">|</span>
            <span className="mx-4 font-medium text-dark">New Educational Scholarship Program Launched - Apply Now</span>
            <span className="mx-4 font-medium text-secondary">|</span>
            <span className="mx-4 font-medium text-dark">Upcoming Health Camp on July 15th at Mumbai Center</span>
            <span className="mx-4 font-medium text-secondary">|</span>
            <span className="mx-4 font-medium text-dark">Annual Report 2023 Now Available for Download</span>
            <span className="mx-4 font-medium text-secondary">|</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-primary-light/20 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10' stroke='%23AFDDFF' fill='none' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full mb-4 font-medium">
                Empowering Communities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary">
                A Relentless Pursuit for <span className="text-secondary">Social Change</span>
              </h2>
              <p className="text-lg md:text-xl text-dark/70 mb-8 max-w-xl mx-auto md:mx-0">
                Working tirelessly to ensure every individual has access to education, healthcare, and equal opportunities
                for a better future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg inline-block text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/donation"
                  className="bg-transparent border-2 border-secondary text-secondary px-8 py-3 rounded-full font-medium transition-all hover:bg-secondary hover:text-white hover:-translate-y-1 hover:shadow-lg inline-block text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-light/30 rounded-full"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <img
                    src="/images/hero-image.jpg"
                    alt="Community Impact"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-light/20 text-primary rounded-full mb-4 font-medium">
              Our Work
            </div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Our Recent Initiatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest projects and how we&apos;re making a difference in communities across Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-light/20">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Education
                </div>
                <img
                  src="/images/education.jpg"
                  alt="Education Initiative"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Education Scholarship Program</h3>
                <p className="text-gray-600 mb-4">
                  Providing financial support to 200+ underprivileged students to pursue higher education.
                </p>
                <Link
                  href="/initiatives/education"
                  className="text-secondary font-semibold inline-flex items-center group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-light/20">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Healthcare
                </div>
                <img
                  src="/images/healthcare.jpg"
                  alt="Healthcare Initiative"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Rural Health Camps</h3>
                <p className="text-gray-600 mb-4">
                  Organizing free health check-ups and medicine distribution in remote villages of Maharashtra.
                </p>
                <Link
                  href="/initiatives/healthcare"
                  className="text-secondary font-semibold inline-flex items-center group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-light/20">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Empowerment
                </div>
                <img
                  src="/images/women.jpg"
                  alt="Women Empowerment"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Women Empowerment Program</h3>
                <p className="text-gray-600 mb-4">
                  Training women in vocational skills to achieve financial independence and self-reliance.
                </p>
                <Link
                  href="/initiatives/women"
                  className="text-secondary font-semibold inline-flex items-center group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-cream/30 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10' stroke='%23AFDDFF' fill='none' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full mb-4 font-medium">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Making a Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For over three decades, we&apos;ve been making a meaningful difference in thousands of lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary-light/30 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar-check text-primary text-2xl"></i>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-xl font-medium">Years of Service</div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-secondary text-2xl"></i>
              </div>
              <div className="text-5xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-xl font-medium">Lives Impacted</div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary-light/30 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-project-diagram text-primary text-2xl"></i>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-xl font-medium">Projects Completed</div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-secondary text-2xl"></i>
              </div>
              <div className="text-5xl font-bold text-secondary mb-2">20+</div>
              <div className="text-xl font-medium">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-light/20 text-primary rounded-full mb-4 font-medium">
              Join Us
            </div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join us in our upcoming activities and be a part of the change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-light/20">
              <div className="bg-primary p-6 text-center md:w-1/4 flex flex-col justify-center">
                <span className="text-4xl font-bold text-white">15</span>
                <span className="text-lg font-medium text-white/90">July</span>
                <span className="text-sm text-white/80">2023</span>
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-primary">Health Camp</h3>
                <p className="text-gray-600 mb-2">Free health check-up and medicine distribution.</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="fas fa-map-marker-alt mr-2 text-secondary"></i>
                  <span>Mumbai Center, Bandra East</span>
                </div>
                <Link
                  href="/events/health-camp"
                  className="text-secondary font-semibold inline-flex items-center group"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-light/20">
              <div className="bg-secondary p-6 text-center md:w-1/4 flex flex-col justify-center">
                <span className="text-4xl font-bold text-white">22</span>
                <span className="text-lg font-medium text-white/90">July</span>
                <span className="text-sm text-white/80">2023</span>
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-primary">Educational Workshop</h3>
                <p className="text-gray-600 mb-2">Career guidance for high school students.</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="fas fa-map-marker-alt mr-2 text-secondary"></i>
                  <span>Kalyan Branch Office</span>
                </div>
                <Link
                  href="/events/educational-workshop"
                  className="text-secondary font-semibold inline-flex items-center group"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/calendar"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-primary-dark"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-light/20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10' stroke='%23AFDDFF' fill='none' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full mb-4 font-medium">
              Newsletter
            </div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Stay Updated</h2>
            <p className="text-gray-700 mb-8">Subscribe to our newsletter to receive updates about our work and upcoming events.</p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for subscribing!')
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary border border-primary-light/30"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-secondary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg transition-all z-50 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <SubscriptionPopup />
    </>
  )
}
