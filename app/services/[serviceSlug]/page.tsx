import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const serviceTitles: Record<string, string> = {
  'mrunal-tai-dalan': 'Mrunal Tai Gallery',
  'yd-phadke-research-center': 'Y. D. Phadke Advanced Research Center',
  'library-kgst-reference': 'Keshav Gore Smarak Trust Reference Library',
  'library-sane-guruji': 'Sane Guruji Library (operated by Keshav Gore Smarak Trust)',
  'study-are-road': 'Keshav Gore Smarak Trust Study Room, Aarey Road',
  'study-kalyan-center': 'Keshav Gore Smarak Trust Study Room, Kalyan Center',
  'trust-auditorium': 'Keshav Gore Smarak Trust Auditorium',
}

export function generateStaticParams() {
  return Object.keys(serviceTitles).map((serviceSlug) => ({ serviceSlug }))
}

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const title = serviceTitles[params.serviceSlug]
  if (!title) notFound()

  return (
    <>
      <Header />
      <Navigation />

      <section className="bg-primary py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Keshav Gore Smarak Trust</p>
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <nav className="mt-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2 text-sm">
              <li><Link href="/" className="hover:text-secondary">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-secondary">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="min-h-[40vh] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
        </div>
      </main>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}
