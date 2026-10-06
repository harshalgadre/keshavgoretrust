import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Navigation />
      <main aria-label="Projects" className="min-h-[40vh]" />
      <Footer />
      <SubscriptionPopup />
    </>
  )
}
