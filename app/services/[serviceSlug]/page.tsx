import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const serviceTitles: Record<string, string> = {
  'mrunal-tai-dalan': 'मृणाल ताई दालन',
  'yd-phadke-research-center': 'य. दि. फडके प्रगत संशोधन केंद्र',
  'library-kgst-reference': 'केशव गोरे स्मारक ट्रस्ट संदर्भ',
  'library-sane-guruji': 'केशव गोरे स्मारक ट्रस्ट संचालित साने गुरुजी ग्रंथालय',
  'study-are-road': 'केशव गोरे स्मारक ट्रस्ट आरे रोड',
  'study-kalyan-center': 'केशव गोरे स्मारक ट्रस्ट कल्याण केंद्र',
  'trust-auditorium': 'केशव गोरे स्मारक ट्रस्ट सभागृह',
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
        <div className="container mx-auto px-4 text-center" lang="mr">
          <p className="text-lg font-semibold mb-2">केशव गोरे स्मारक ट्रस्ट</p>
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <nav className="mt-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2 text-sm">
              <li><Link href="/" className="hover:text-secondary">मुख्यपृष्ठ</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-secondary">सेवा</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="min-h-[40vh] py-12">
        <div className="container mx-auto px-4" lang="mr">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
        </div>
      </main>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}
