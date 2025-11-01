'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function EventDetailsPage({ params }: { params: { eventId: string } }) {
  // In a real application, you would fetch event details based on eventId
  const event = {
    id: params.eventId,
    title: 'Health Camp',
    date: 'July 15, 2023',
    time: '10:00 AM - 4:00 PM',
    location: 'Mumbai Center',
    address: 'Bandra East, Mumbai 400051',
    description:
      'Free health check-up and medicine distribution for underprivileged communities. Join us for a comprehensive health camp that includes general health check-ups, blood pressure and blood sugar tests, consultations with qualified doctors, and free distribution of essential medicines.',
    fullDescription: `Our health camps are designed to bring quality healthcare services directly to the communities that need them most. This comprehensive health camp will provide:

- General health check-ups
- Blood pressure and blood sugar screening
- Consultation with qualified doctors
- Free distribution of essential medicines
- Health awareness sessions
- Nutritional counseling

This initiative is part of our ongoing commitment to improving healthcare access for underprivileged communities. We work with a team of dedicated healthcare professionals who volunteer their time to make these camps possible.`,
    category: 'Healthcare',
    contact: 'Dr. Sunita Sharma - 9876543210',
    registrationLink: '/events/register/' + params.eventId,
  }

  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{event.title}</h1>
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
                    <Link href="/calendar" className="text-sm font-medium text-dark hover:text-primary-dark">
                      Events
                    </Link>
                  </div>
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
                    <span className="text-sm font-medium text-dark">{event.title}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6">About This Event</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">{event.fullDescription}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-dark"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Time</h3>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-calendar text-dark"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Date</h3>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-dark"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-gray-600">{event.location}</p>
                      <p className="text-gray-600">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Register Now</h3>
                <p className="text-gray-600 mb-6">Join us for this event and be a part of the change.</p>
                <Link
                  href={event.registrationLink}
                  className="block w-full bg-primary text-dark px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg text-center mb-4"
                >
                  Register for Event
                </Link>
                <div className="border-t pt-4">
                  <h4 className="font-bold mb-2">Contact Person</h4>
                  <p className="text-gray-600">{event.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}

