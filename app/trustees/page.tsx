'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function TrusteesPage() {
  const trustees = [
    {
      name: 'Dr. Anand Patil',
      role: 'Chairperson',
      image: '/images/trustee1.jpg',
      bio: 'Dr. Patil is a renowned educator with over 30 years of experience in the field of education. He has been associated with the trust since its inception and has played a pivotal role in shaping its educational initiatives.',
      contributions: [
        'Established 5 educational centers in underprivileged areas',
        'Developed scholarship programs benefiting 1000+ students',
        'Authored several papers on inclusive education',
      ],
      email: 'anand.patil@kgstrust.org',
    },
    {
      name: 'Dr. Sunita Sharma',
      role: 'Vice Chairperson',
      image: '/images/trustee2.jpg',
      bio: 'Dr. Sharma is a healthcare professional specializing in public health. With her expertise in community health programs, she has been instrumental in developing and implementing the trust\'s healthcare initiatives.',
      contributions: [
        'Established mobile health clinics serving remote villages',
        'Developed maternal and child health programs',
        'Led COVID-19 relief efforts reaching 10,000+ families',
      ],
      email: 'sunita.sharma@kgstrust.org',
    },
    {
      name: 'Mr. Rajesh Mehta',
      role: 'Treasurer',
      image: '/images/trustee3.jpg',
      bio: 'Mr. Mehta is a financial expert with extensive experience in corporate finance and non-profit management. He oversees the financial operations of the trust, ensuring transparency and accountability.',
      contributions: [
        'Implemented robust financial management systems',
        'Secured funding from national and international donors',
        'Developed sustainable revenue models for trust programs',
      ],
      email: 'rajesh.mehta@kgstrust.org',
    },
    {
      name: 'Ms. Priya Desai',
      role: 'Secretary',
      image: '/images/trustee4.jpg',
      bio: 'Ms. Desai is a social activist with a background in women\'s rights and community development. She leads the trust\'s women empowerment programs and advocacy initiatives.',
      contributions: [
        'Established vocational training centers for women',
        'Developed microfinance programs for women entrepreneurs',
        'Led advocacy campaigns for women\'s rights and gender equality',
      ],
      email: 'priya.desai@kgstrust.org',
    },
    {
      name: 'Mr. Suresh Joshi',
      role: 'Trustee',
      image: '/images/trustee5.jpg',
      bio: 'Mr. Joshi is a retired civil servant with extensive experience in public administration. His knowledge of government policies and programs has been valuable in navigating regulatory frameworks and building partnerships with government agencies.',
      contributions: [
        'Facilitated partnerships with government departments',
        'Advised on policy advocacy strategies',
        'Helped secure government grants for trust programs',
      ],
      email: 'suresh.joshi@kgstrust.org',
    },
    {
      name: 'Dr. Amit Kumar',
      role: 'Trustee',
      image: '/images/trustee6.jpg',
      bio: 'Dr. Kumar is an environmental scientist specializing in sustainable development. He leads the trust\'s environmental initiatives and advises on sustainability aspects of all programs.',
      contributions: [
        'Developed water conservation projects in drought-prone areas',
        'Implemented renewable energy solutions for rural communities',
        'Conducted environmental awareness programs in schools',
      ],
      email: 'amit.kumar@kgstrust.org',
    },
  ]

  const advisors = [
    {
      name: 'Prof. Ramesh Rao',
      role: 'Education Expert',
      image: '/images/advisor1.jpg',
      description: 'Professor at Mumbai University with expertise in educational policy and curriculum development.',
    },
    {
      name: 'Dr. Meena Shah',
      role: 'Healthcare Expert',
      image: '/images/advisor2.jpg',
      description: 'Public health specialist with experience in designing community health programs.',
    },
    {
      name: 'Mr. Vikram Singh',
      role: 'Legal Advisor',
      image: '/images/advisor3.jpg',
      description: 'Senior advocate providing legal guidance on trust operations and compliance matters.',
    },
  ]

  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Trustees</h1>
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
                    <span className="text-sm font-medium text-dark">Our Trustees</span>
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
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-gray-600">
              Our trustees bring diverse expertise and a shared commitment to social welfare. With backgrounds in
              education, healthcare, business, and public service, they provide strategic guidance to fulfill our mission
              of creating positive social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Trustees Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{trustee.name}</h3>
                    <p className="text-white/80">{trustee.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{trustee.bio}</p>
                  <h4 className="font-bold mb-2">Notable Contributions:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    {trustee.contributions.map((contribution, i) => (
                      <li key={i}>{contribution}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:text-secondary transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary hover:text-secondary transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`mailto:${trustee.email}`} className="text-primary hover:text-secondary transition-colors">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advisory board consists of experts who provide specialized guidance in various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{advisor.name}</h3>
                    <p className="text-gray-600">{advisor.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{advisor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            We are always looking for passionate individuals to join our team as volunteers, partners, or supporters.
            Together, we can create a more equitable and just society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-dark text-white px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}

