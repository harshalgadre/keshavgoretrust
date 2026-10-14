import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Navigation />
      <main aria-label="Projects" className="container mx-auto min-h-[40vh] px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-dark">Projects</h1>
        <div className="space-y-6">
          <section id="family-development-project" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-dark">Family Development Project (FDP)</h2>
          </section>
          <section id="mrunal-gore-counseling-center" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-dark">Mrunal Gore Counseling Center</h2>
          </section>
        </div>
      </main>
      <Footer />
      <SubscriptionPopup />
    </>
  )
}
