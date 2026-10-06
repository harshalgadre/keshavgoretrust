'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function AboutPage() {
  return (
    <>
      <Header />
      <Navigation />

      {/* Page Header */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
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
                    <span className="text-sm font-medium text-dark">About Us</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Our History
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></span>
              </h2>
              <p className="mb-4">
                Keshav Gore Smarak Trust was established in 1983 in memory of the late Shri Keshav Gore, a dedicated
                social worker who devoted his life to serving the underprivileged communities in Maharashtra.
              </p>
              <p className="mb-4">
                Founded by a group of like-minded individuals who shared Shri Gore&apos;s vision of social equality and
                justice, the trust began its journey with small-scale educational initiatives in Mumbai&apos;s suburban
                areas.
              </p>
              <p>
                Over the decades, the trust has expanded its reach and diversified its programs to address various social
                challenges, while staying true to its founding principles of compassion, integrity, and community service.
              </p>
            </div>
            <div>
              <img src="/images/history.jpg" alt="Trust History" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by our founding principles, we work towards creating a more equitable society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-eye text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p>
                To foster a society rooted in equality, inclusivity, and progressive development, where every individual is empowered to thrive with dignity, access opportunities, and contribute to a harmonious and enlightened community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <ul className="list-disc pl-5 space-y-3">
                <li>To spearhead impactful initiatives in education, health, housing, sports, arts, literature, and governance, fostering holistic growth and development.</li>
                <li>To empower marginalized communities, including scheduled castes, tribes, and women, through education, training, and employment opportunities, ensuring social dignity and independence.</li>
                <li>To create an inclusive environment where projects and opportunities are accessible to all, promoting social harmony and unity beyond caste, religion, gender, or class distinctions.</li>
                <li>To enhance societal awareness and enlightenment through programs, research, study groups, and publications that inspire progressive thinking and societal advancement.</li>
                <li>To drive rural and local self-governance initiatives, enabling sustainable community development and self-reliance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-gray-600">Empathy and care for all communities we serve</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">Transparency and honesty in all our actions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-gray-600">Embracing diversity and equal opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-seedling text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">Long-term impact and sustainable solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key achievements in our journey of creating positive social impact.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden md:block"></div>

            {/* Milestone 1 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">1983</h3>
                    <h4 className="text-lg font-semibold mb-2">Establishment of the Trust</h4>
                    <p className="text-gray-600">Keshav Gore Smarak Trust was officially registered as a charitable trust in Mumbai.</p>
                  </div>
                </div>
                <div className="hidden md:block md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary">
                    <h3 className="text-xl font-bold mb-2 text-secondary">1990</h3>
                    <h4 className="text-lg font-semibold mb-2">First Educational Center</h4>
                    <p className="text-gray-600">
                      Opened our first educational center in Bandra East, providing after-school support to underprivileged children.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">1998</h3>
                    <h4 className="text-lg font-semibold mb-2">Expansion to Rural Areas</h4>
                    <p className="text-gray-600">
                      Extended our programs to rural Maharashtra, focusing on healthcare and education in remote villages.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary">
                    <h3 className="text-xl font-bold mb-2 text-secondary">2005</h3>
                    <h4 className="text-lg font-semibold mb-2">Women Empowerment Initiative</h4>
                    <p className="text-gray-600">
                      Launched dedicated programs for women&apos;s education, health, and economic empowerment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 5 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">2020</h3>
                    <h4 className="text-lg font-semibold mb-2">COVID-19 Relief Work</h4>
                    <p className="text-gray-600">
                      Mobilized resources to provide emergency relief during the pandemic, reaching over 10,000 families.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:pl-12"></div>
              </div>
            </div>

            {/* Milestone 6 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-lg z-10 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary">
                    <h3 className="text-xl font-bold mb-2 text-secondary">2023</h3>
                    <h4 className="text-lg font-semibold mb-2">Digital Transformation</h4>
                    <p className="text-gray-600">
                      Embracing technology to expand our reach and enhance program delivery across all initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Legal Status</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our trust is registered and compliant with all legal requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Trust Registration</h3>
              <p className="text-gray-600 mb-2">Registered under the Bombay Public Trust Act, 1950</p>
              <p className="font-medium">Registration No: E-13170 (Mumbai)</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hand-holding-usd text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Income Tax</h3>
              <p className="text-gray-600 mb-2">Registered under Section 12A & 80G of Income Tax Act</p>
              <p className="font-medium">PAN: AAATK4567G</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-globe text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">FCRA Registration</h3>
              <p className="text-gray-600 mb-2">Registered under Foreign Contribution Regulation Act</p>
              <p className="font-medium">FCRA No: 083781234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from the people whose lives have been transformed by our work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 left-8 text-6xl text-primary opacity-20">&quot;</div>
              <p className="mb-6 relative z-10">
                The scholarship from Keshav Gore Smarak Trust helped me complete my engineering degree. Today, I am
                working as a software engineer and supporting my family. I will always be grateful for their support
                during my difficult times.
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial1.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Rajesh Patil</h4>
                  <p className="text-sm text-gray-600">Software Engineer, Pune</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 left-8 text-6xl text-secondary opacity-20">&quot;</div>
              <p className="mb-6 relative z-10">
                The vocational training program by the trust taught me tailoring skills and helped me set up my own small
                business. Now I can earn a decent income and support my children&apos;s education. This has given me
                financial independence and confidence.
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial2.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sunita Sharma</h4>
                  <p className="text-sm text-gray-600">Entrepreneur, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 left-8 text-6xl text-primary opacity-20">&quot;</div>
              <p className="mb-6 relative z-10">
                Our village faced severe water scarcity until the Keshav Gore Smarak Trust implemented a water
                conservation project. Now we have access to clean water throughout the year, which has improved our
                health and agricultural productivity.
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial3.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Ramesh Jadhav</h4>
                  <p className="text-sm text-gray-600">Farmer, Satara District</p>
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
