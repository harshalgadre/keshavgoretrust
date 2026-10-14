import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const services: Array<{ title: string; href?: string; children?: Array<{ title: string; href: string }> }> = [
  { title: 'Dental Service', href: '/services/dental-service' },
  { title: 'Mrunal Tai Gallery', href: '/services/mrunal-tai-dalan' },
  { title: 'Y. D. Phadke Advanced Research Center', href: '/services/yd-phadke-research-center' },
  {
    title: 'Libraries',
    children: [
      { title: 'Keshav Gore Smarak Trust Reference Library', href: '/services/library-kgst-reference' },
      { title: 'Sane Guruji Library (operated by Keshav Gore Smarak Trust)', href: '/services/library-sane-guruji' },
    ],
  },
  {
    title: 'Study Rooms',
    children: [
      { title: 'Keshav Gore Smarak Trust Study Room, Aarey Road', href: '/services/study-are-road' },
      { title: 'Keshav Gore Smarak Trust Study Room, Kalyan Center', href: '/services/study-kalyan-center' },
    ],
  },
  { title: 'Keshav Gore Smarak Trust Auditorium', href: '/services/trust-auditorium' },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Navigation />
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Keshav Gore Smarak Trust</p>
          <h1 className="text-4xl font-bold">Services</h1>
        </div>
      </section>
      <main className="py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <section key={service.title} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>
              {service.href && (
                <Link href={service.href} className="text-secondary font-semibold hover:text-secondary-dark">
                  {service.title === 'Dental Service' ? 'View dental services' : 'More information'}
                </Link>
              )}
              {service.children && (
                <ul className="space-y-3">
                  {service.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="text-secondary font-semibold hover:text-secondary-dark">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <SubscriptionPopup />
    </>
  )
}
