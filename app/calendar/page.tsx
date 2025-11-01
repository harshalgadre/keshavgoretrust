'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EventModal from '@/components/EventModal'
import SubscriptionPopup from '@/components/SubscriptionPopup'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  address: string
  description: string
  contact: string
  category: string
  icon: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Health Camp',
    date: '2023-07-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Mumbai Center',
    address: 'Bandra East, Mumbai 400051',
    description: 'Free health check-up and medicine distribution for underprivileged communities.',
    contact: 'Dr. Sunita Sharma - 9876543210',
    category: 'healthcare',
    icon: 'fa-heartbeat',
  },
  {
    id: 2,
    title: 'Educational Workshop',
    date: '2023-07-22',
    time: '11:00 AM - 2:00 PM',
    location: 'Kalyan Branch Office',
    address: 'Kalyan East, Thane 421306',
    description: 'Career guidance workshop for high school students.',
    contact: 'Mr. Rajesh Patil - 9876543211',
    category: 'education',
    icon: 'fa-graduation-cap',
  },
  {
    id: 3,
    title: 'Women Entrepreneurship Workshop',
    date: '2023-07-29',
    time: '10:00 AM - 3:00 PM',
    location: 'Mumbai Center',
    address: 'Bandra East, Mumbai 400051',
    description: 'Training workshop on business skills for women entrepreneurs.',
    contact: 'Ms. Priya Desai - 9876543212',
    category: 'women',
    icon: 'fa-venus',
  },
  {
    id: 4,
    title: 'Tree Plantation Drive',
    date: '2023-08-05',
    time: '8:00 AM - 12:00 PM',
    location: 'Yeoor Hills',
    address: 'Thane West, Thane 400610',
    description: 'Community tree plantation event to promote environmental conservation.',
    contact: 'Mr. Amit Kumar - 9876543213',
    category: 'environment',
    icon: 'fa-leaf',
  },
]

const featuredEvents = [
  {
    date: 15,
    month: 'July',
    year: '2023',
    title: 'Health Camp',
    category: 'Healthcare',
    categoryColor: 'bg-blue-100 text-blue-800',
    description: 'Free health check-up and medicine distribution for underprivileged communities.',
    location: 'Mumbai Center, Bandra East',
    time: '10:00 AM - 4:00 PM',
    link: '/events/health-camp',
  },
  {
    date: 22,
    month: 'July',
    year: '2023',
    title: 'Educational Workshop',
    category: 'Education',
    categoryColor: 'bg-green-100 text-green-800',
    description: 'Career guidance workshop for high school students.',
    location: 'Kalyan Branch Office',
    time: '11:00 AM - 2:00 PM',
    link: '/events/educational-workshop',
  },
  {
    date: 29,
    month: 'July',
    year: '2023',
    title: 'Women Entrepreneurship Workshop',
    category: 'Women',
    categoryColor: 'bg-pink-100 text-pink-800',
    description: 'Training workshop on business skills for women entrepreneurs.',
    location: 'Mumbai Center, Bandra East',
    time: '10:00 AM - 3:00 PM',
    link: '/events/women-entrepreneurship',
  },
  {
    date: 5,
    month: 'August',
    year: '2023',
    title: 'Tree Plantation Drive',
    category: 'Environment',
    categoryColor: 'bg-green-100 text-green-800',
    description: 'Community tree plantation event to promote environmental conservation.',
    location: 'Thane, Yeoor Hills',
    time: '8:00 AM - 12:00 PM',
    link: '/events/tree-plantation',
  },
]

const regularPrograms = [
  {
    image: '/images/education-program.jpg',
    title: 'After-School Support',
    description: 'Educational support for underprivileged children to improve their academic performance.',
    schedule: 'Monday to Friday',
    time: '4:00 PM - 6:00 PM',
    location: 'All Centers',
    link: '/programs/after-school',
  },
  {
    image: '/images/healthcare-program.jpg',
    title: 'Health Consultation',
    description: 'Free health consultation services for community members at our centers.',
    schedule: 'Every Wednesday',
    time: '10:00 AM - 1:00 PM',
    location: 'Mumbai and Kalyan Centers',
    link: '/programs/health-consultation',
  },
  {
    image: '/images/women-program.jpg',
    title: "Women's Skill Development",
    description: 'Vocational training sessions for women to develop marketable skills.',
    schedule: 'Tuesday and Thursday',
    time: '2:00 PM - 5:00 PM',
    location: 'All Centers',
    link: '/programs/women-skill',
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case 'education':
      return 'bg-green-100 text-green-800'
    case 'healthcare':
      return 'bg-blue-100 text-blue-800'
    case 'women':
      return 'bg-pink-100 text-pink-800'
    case 'rural':
      return 'bg-yellow-100 text-yellow-800'
    case 'environment':
      return 'bg-emerald-100 text-emerald-800'
    default:
      return 'bg-cream text-gray-800'
  }
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [eventFilter, setEventFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const getCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate()

    const days: Array<{
      day: number
      isCurrentMonth: boolean
      isToday: boolean
      dateString: string
    }> = []

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        dateString: '',
      })
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const today = new Date()
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()

      days.push({
        day,
        isCurrentMonth: true,
        isToday,
        dateString,
      })
    }

    // Next month's days to fill the grid
    const totalCells = 42 // 6 rows x 7 days
    const remainingCells = totalCells - days.length
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
        dateString: '',
      })
    }

    return days
  }

  const getDayEvents = (dateString: string) => {
    return events.filter((event) => event.date === dateString)
  }

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const calendarDays = getCalendarDays()

  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Events Calendar</h1>
          <div className="flex justify-center mt-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/home" className="text-sm font-medium text-dark hover:text-primary-dark">
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
                    <span className="text-sm font-medium text-dark">Events Calendar</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
                <p className="text-gray-600">Join us in our activities and be a part of the change.</p>
              </div>
              <div className="flex mt-4 md:mt-0">
                <div className="relative">
                  <select
                    id="event-filter"
                    value={eventFilter}
                    onChange={(e) => setEventFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-l-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Events</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="women">Women Empowerment</option>
                    <option value="rural">Rural Development</option>
                    <option value="environment">Environment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select
                    id="location-filter"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-r-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Locations</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kalyan">Kalyan</option>
                    <option value="thane">Thane</option>
                    <option value="pune">Pune</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Navigation */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => navigateMonth('prev')}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fas fa-chevron-left mr-2"></i>
                <span>Previous Month</span>
              </button>
              <h3 className="text-2xl font-bold">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <button
                onClick={() => navigateMonth('next')}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <span>Next Month</span>
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Days of Week */}
              <div className="grid grid-cols-7 bg-cream">
                {daysOfWeek.map((day) => (
                  <div key={day} className="py-2 text-center font-medium">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Dates */}
              <div className="grid grid-cols-7 border-t">
                {calendarDays.map((dayInfo, index) => {
                  const dayEvents = dayInfo.isCurrentMonth ? getDayEvents(dayInfo.dateString) : []
                  return (
                    <div
                      key={index}
                      className={`border p-1 h-32 md:h-36 relative ${
                        dayInfo.isCurrentMonth ? '' : 'text-gray-400'
                      }`}
                    >
                      {dayInfo.isToday ? (
                        <div className="text-sm p-1 bg-primary rounded-full w-6 h-6 flex items-center justify-center">
                          {dayInfo.day}
                        </div>
                      ) : (
                        <div className="text-sm p-1">{dayInfo.day}</div>
                      )}
                      {dayEvents.length > 0 && (
                        <div className="overflow-y-auto max-h-24 md:max-h-28">
                          {dayEvents.map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 mb-1 rounded truncate cursor-pointer ${getCategoryColor(
                                event.category
                              )}`}
                              onClick={() => handleEventClick(event)}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
              >
                <div className="bg-secondary p-4 text-center md:w-1/4 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-white">{event.date}</span>
                  <span className="text-lg font-medium text-white">{event.month}</span>
                  <span className="text-sm text-white">{event.year}</span>
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className={`${event.categoryColor} text-xs font-medium px-2.5 py-0.5 rounded`}>
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="fas fa-clock mr-2"></i>
                    <span>{event.time}</span>
                  </div>
                  <Link
                    href={event.link}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events/all"
              className="bg-primary text-dark px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Regular Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Regular Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${program.image})`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i className="fas fa-clock mr-2"></i>
                    <span>{program.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{program.location}</span>
                  </div>
                  <Link
                    href={program.link}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Calendar */}
      <section className="py-16 bg-cream relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-gray-700 mb-8">
              Subscribe to our calendar to receive notifications about upcoming events and activities.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                const email = (e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement)?.value
                if (email) {
                  alert('Thank you for subscribing!')
                }
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-dark text-white px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe
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

