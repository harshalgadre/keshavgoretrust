import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const trustees = [
  { name: 'Mr. Pramod Nigudkar', role: 'Executive Trustee' },
  { name: 'Mrs. Anjali Vartak', role: 'Trustee' },
  { name: 'Mr. Yuvraj Mohite', role: 'Trustee' },
  { name: 'Mr. Sahil Joshi', role: 'Trustee' },
  { name: 'Mr. Bhushan Thakur', role: 'Trustee' },
  { name: 'Mr. Umesh Kadam', role: 'Trustee' },
  { name: 'Mr. Ashutosh Shirke', role: 'Trustee' },
]

export default function TrusteesPage() {
  return (
    <>
      <Header />
      <Navigation />

      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:200px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Trustees</h1>
          <div className="flex justify-center mt-4">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="text-sm font-medium text-dark hover:text-primary-dark">Home</Link></li>
                <li aria-hidden="true" className="text-dark">/</li>
                <li><span className="text-sm font-medium text-dark">Our Trustees</span></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Board of Trustees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustees.map((trustee) => (
              <div key={trustee.name} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold">{trustee.name}</h3>
                <p className="text-gray-600 mt-2">{trustee.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}
