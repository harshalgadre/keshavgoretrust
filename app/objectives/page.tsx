'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function ObjectivesPage() {
  const [activeCategory, setActiveCategory] = useState('education')

  const objectives = {
    education: {
      title: 'Education',
      icon: 'fa-graduation-cap',
      shortTerm: [
        'Provide scholarships to 500+ underprivileged students annually',
        'Establish 10 after-school support centers',
        'Organize digital literacy training for 1000+ individuals',
        'Conduct teacher development workshops',
      ],
      longTerm: [
        'Improve literacy rates in target communities by 30%',
        'Increase high school completion rates by 25%',
        'Establish a network of quality educational institutions',
        'Create pathways for higher education and career opportunities',
      ],
    },
    healthcare: {
      title: 'Healthcare',
      icon: 'fa-heartbeat',
      shortTerm: [
        'Conduct monthly health camps in 20+ locations',
        'Provide free medical consultations to 5000+ individuals',
        'Distribute essential medicines to 3000+ families',
        'Organize health awareness campaigns',
      ],
      longTerm: [
        'Reduce maternal and infant mortality rates',
        'Improve access to preventive healthcare services',
        'Establish permanent health centers in underserved areas',
        'Create sustainable healthcare delivery models',
      ],
    },
    women: {
      title: 'Women Empowerment',
      icon: 'fa-venus',
      shortTerm: [
        'Train 500+ women in vocational skills annually',
        'Establish 15 self-help groups',
        'Provide microfinance support to 200+ women entrepreneurs',
        'Conduct leadership development workshops',
      ],
      longTerm: [
        'Increase women&apos;s economic participation by 40%',
        'Create 100+ successful women-led businesses',
        'Reduce gender-based violence through awareness',
        'Build a network of empowered women leaders',
      ],
    },
    rural: {
      title: 'Rural Development',
      icon: 'fa-tractor',
      shortTerm: [
        'Implement water conservation projects in 10 villages',
        'Promote sustainable agriculture practices',
        'Establish skill development centers',
        'Organize community development programs',
      ],
      longTerm: [
        'Improve agricultural productivity by 30%',
        'Ensure year-round water availability in target areas',
        'Create sustainable livelihood opportunities',
        'Build resilient rural communities',
      ],
    },
    environment: {
      title: 'Environment',
      icon: 'fa-leaf',
      shortTerm: [
        'Plant 10,000+ trees annually',
        'Organize environmental awareness campaigns',
        'Promote waste management practices',
        'Conduct workshops on sustainable living',
      ],
      longTerm: [
        'Achieve carbon neutrality in our operations',
        'Create green spaces in urban areas',
        'Promote renewable energy adoption',
        'Build environmentally conscious communities',
      ],
    },
  }

  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Objectives</h1>
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
                    <span className="text-sm font-medium text-dark">Our Objectives</span>
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
            <h2 className="text-3xl font-bold mb-6">Our Mission & Goals</h2>
            <p className="text-gray-600">
              At Keshav Gore Smarak Trust, we are committed to creating sustainable social impact through targeted
              interventions in education, healthcare, women empowerment, and rural development. Our objectives are guided
              by our vision of a just and equitable society where every individual has the opportunity to lead a dignified
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(objectives).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full shadow-md transition-colors ${
                  activeCategory === key
                    ? 'bg-primary text-dark'
                    : 'bg-white hover:bg-primary hover:text-dark'
                }`}
              >
                {objectives[key as keyof typeof objectives].title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className={`fas ${objectives[activeCategory as keyof typeof objectives].icon} text-2xl`}></i>
              </div>
              <h2 className="text-3xl font-bold">{objectives[activeCategory as keyof typeof objectives].title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Short-term Goals</h3>
                <ul className="space-y-4">
                  {objectives[activeCategory as keyof typeof objectives].shortTerm.map((goal, index) => (
                    <li key={index} className="flex">
                      <div className="mr-3 mt-1 text-primary">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>{goal}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Long-term Goals</h3>
                <ul className="space-y-4">
                  {objectives[activeCategory as keyof typeof objectives].longTerm.map((goal, index) => (
                    <li key={index} className="flex">
                      <div className="mr-3 mt-1 text-primary">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>{goal}</div>
                    </li>
                  ))}
                </ul>
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

