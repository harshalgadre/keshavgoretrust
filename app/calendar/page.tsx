'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'
import calendar from '@/data/calendar.json'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function formatEventDate(date: string, type: string) {
  if (type === 'annual') {
    const [month, day] = date.split('-').map(Number)
    return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long' }).format(new Date(2024, month - 1, day))
  }

  const [year, month, day] = date.split('-').map(Number)
  return new Intl.DateTimeFormat('en', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(year, month - 1, day))
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">{label}: </span>{value}
    </p>
  )
}

function getMarkers(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const dateString = `${date.getFullYear()}-${month}-${day}`
  const markers = calendar.datedEvents
    .filter((event) => event.type === 'annual'
      ? event.date === `${month}-${day}`
      : event.date === dateString)
    .map((event) => ({ id: event.id, title: event.title, color: 'bg-amber-500' }))

  calendar.regularPrograms
    .filter((program) => program.weekdays.includes(date.getDay()))
    .forEach((program) => markers.push({ id: program.id, title: program.title, color: 'bg-blue-500' }))

  return markers
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(() => new Date())
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const calendarCells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ]

  const changeMonth = (amount: number) => {
    setCurrentDate((date) => new Date(date.getFullYear(), date.getMonth() + amount, 1))
  }

  return (
    <>
      <Header />
      <Navigation />

      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Events Calendar</h1>
          <div className="flex justify-center mt-4">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="text-sm font-medium text-dark hover:text-primary-dark">Home</Link></li>
                <li aria-hidden="true" className="text-dark">/</li>
                <li><span className="text-sm font-medium text-dark">Events Calendar</span></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section aria-label="Monthly events calendar" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-14">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                aria-label="Previous month"
                className="rounded-full w-11 h-11 bg-cream hover:bg-primary transition-colors"
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold">{monthNames[month]} {year}</h2>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                aria-label="Next month"
                className="rounded-full w-11 h-11 bg-cream hover:bg-primary transition-colors"
              >
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>

            <div className="grid grid-cols-7 border-l border-t">
              {weekdays.map((day) => (
                <div key={day} className="border-r border-b bg-cream py-3 text-center text-xs sm:text-sm font-semibold">
                  <span className="hidden sm:inline">{day}</span>
                  <span className="sm:hidden">{day.slice(0, 3)}</span>
                </div>
              ))}
              {calendarCells.map((day, index) => {
                if (day === null) return <div key={`empty-${index}`} className="border-r border-b min-h-20 sm:min-h-28 bg-gray-50/60" />

                const date = new Date(year, month, day)
                const markers = getMarkers(date)
                const isToday = new Date().toDateString() === date.toDateString()
                return (
                  <div key={day} className="border-r border-b min-h-20 sm:min-h-28 p-1.5 sm:p-3">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm ${isToday ? 'bg-primary font-bold' : ''}`}>
                      {day}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-2" aria-label={markers.length ? markers.map((marker) => marker.title).join(', ') : undefined}>
                      {markers.map((marker) => (
                        <span key={marker.id} className="relative flex h-3 w-3" title={marker.title}>
                          <span className={`absolute inline-flex h-full w-full rounded-full ${marker.color} opacity-60 animate-ping`}></span>
                          <span className={`relative inline-flex h-3 w-3 rounded-full ${marker.color}`}></span>
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-500"></span>Special and memorial events</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-500"></span>Regular programs</span>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section aria-labelledby="dated-events-heading">
              <h2 id="dated-events-heading" className="text-3xl font-bold mb-6">Special &amp; Memorial Events</h2>
              <div className="space-y-5">
                {calendar.datedEvents.map((event) => (
                  <article key={event.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-500">
                    <p className="text-sm font-semibold text-primary-dark mb-2">
                      {formatEventDate(event.date, event.type)}{event.type === 'annual' ? ' · Every year' : ''}
                    </p>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <div className="space-y-1">
                      <Detail label="Presenter" value={event.presenter} />
                      <Detail label="Time" value={event.time} />
                      <Detail label="Location" value={event.location} />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="regular-programs-heading">
              <h2 id="regular-programs-heading" className="text-3xl font-bold mb-6">Regular Programs</h2>
              <div className="space-y-5">
                {calendar.regularPrograms.map((program) => (
                  <article key={program.id} className="bg-cream rounded-lg p-6 border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-primary-dark mb-2">{program.days}</p>
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <div className="space-y-1">
                      <Detail label="Presenter" value={program.presenter} />
                      <Detail label="Time" value={program.time} />
                      <Detail label="Location" value={program.location} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}
