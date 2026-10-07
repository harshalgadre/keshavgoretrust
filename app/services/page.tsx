import Link from 'next/link'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const services: Array<{ title: string; href?: string; children?: Array<{ title: string; href: string }> }> = [
  { title: 'Dental Service', href: '/services/dental-service' },
  { title: 'मृणाल ताई दालन', href: '/services/mrunal-tai-dalan' },
  { title: 'य. दि. फडके प्रगत संशोधन केंद्र', href: '/services/yd-phadke-research-center' },
  {
    title: 'ग्रंथालय',
    children: [
      { title: 'केशव गोरे स्मारक ट्रस्ट संदर्भ', href: '/services/library-kgst-reference' },
      { title: 'केशव गोरे स्मारक ट्रस्ट संचालित साने गुरुजी ग्रंथालय', href: '/services/library-sane-guruji' },
    ],
  },
  {
    title: 'अभ्यासिका',
    children: [
      { title: 'केशव गोरे स्मारक ट्रस्ट आरे रोड', href: '/services/study-are-road' },
      { title: 'केशव गोरे स्मारक ट्रस्ट कल्याण केंद्र', href: '/services/study-kalyan-center' },
    ],
  },
  { title: 'केशव गोरे स्मारक ट्रस्ट सभागृह', href: '/services/trust-auditorium' },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Navigation />
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center" lang="mr">
          <p className="text-lg font-semibold mb-2">केशव गोरे स्मारक ट्रस्ट</p>
          <h1 className="text-4xl font-bold">सेवा</h1>
        </div>
      </section>
      <main className="py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" lang="mr">
          {services.map((service) => (
            <section key={service.title} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>
              {service.href && (
                <Link href={service.href} className="text-secondary font-semibold hover:text-secondary-dark">
                  {service.title === 'Dental Service' ? 'दंत सेवा पहा' : 'अधिक माहिती'}
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
