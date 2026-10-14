import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const doctors = [
  {
    number: '1.',
    name: ['Dr. Aishwarya Tendulkar', '(BDS) Dental Surgeon', 'Dr. Bhagyashri Musale', '(BDS) Dental Surgeon'],
    schedule: ['Monday to Saturday: 8:30 am–10:30 am', 'Wednesday: 5:30 pm–8:00 pm'],
  },
  {
    number: '3.',
    name: ['Dr. Anuja Uttkar', '(BDS) Dental Surgeon'],
    schedule: ['Monday to Saturday', '2:00 pm–4:00 pm'],
  },
  {
    number: '4.',
    name: ['Dr. Pooja Potre', '(BDS) Dental Surgeon'],
    schedule: ['Monday to Saturday', '5:30 pm–8:30 pm'],
  },
  {
    number: '5.',
    name: ['Dr. Pramila Joshi', '(BDS) Dental Surgeon'],
    schedule: ['Monday to Saturday', '5:30 pm–8:30 pm'],
  },
  {
    number: '6.',
    name: ['Dr. Jayesh Ghodke', 'Psychiatrist'],
    schedule: ['Tuesday and Friday', '8:00 pm–9:30 pm'],
  },
  {
    number: '7.',
    name: ['Dr. Pravin Punamia', 'Ophthalmologist'],
    schedule: ['Monday', '12:00 pm–1:00 pm'],
  },
  {
    number: '8.',
    name: ['Dr. C. C. Chinchalkar', 'Dr. Purvi Kher', 'Ophthalmologist', 'Dermatologist'],
    schedule: ['Saturday', 'Wednesday: 5:30 pm–8:00 pm', '6:00 pm–8:00 pm'],
  },
  {
    number: '10.',
    name: ['Dr. Akshay Melay', '(MDS) Endodontist (Implants)'],
    schedule: ['Wednesday', '3:30 pm'],
  },
  {
    number: '11.',
    name: ['Dr. Jignesh Sejpal', '(MDS) Dental Surgeon'],
    schedule: ['Fourth Saturday', '8:30 am–10:00 am'],
  },
  {
    number: '12.',
    name: ['Dr. Aniket Chandaniya', '(MDS) Endodontist'],
    schedule: ['First and third Thursday: 2:00 pm–4:00 pm', 'Second and fourth Thursday: 6:00 pm–8:00 pm'],
  },
  {
    number: '13.',
    name: ['Dr. Harsha Nalawade', '(MDS) Dental Surgeon'],
    schedule: ['Tuesday', '6:00 pm–8:00 pm'],
  },
  {
    number: '14.',
    name: ['Dr. Chaitanya Mantri', 'Occupational Therapist'],
    schedule: ['Monday: 5:00 pm–7:00 pm', 'Wednesday and Thursday: 6:00 pm–8:00 pm', 'Saturday: 10:00 am–12:00 pm'],
  },
]

export default function DentalServicePage() {
  return (
    <>
      <Header />
      <Navigation />

      <section className="bg-primary py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Keshav Gore Smarak Trust</p>
          <h1 className="text-3xl sm:text-5xl font-bold">Dental Department and Health Center</h1>
          <a href="tel:9321091313" className="inline-block mt-5 text-lg font-semibold hover:text-secondary">
            Phone: 9321091313
          </a>
        </div>
      </section>

      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-cream">
                  <th scope="col" className="border-b p-4 font-bold">No.</th>
                  <th scope="col" className="border-b p-4 font-bold">Doctor and Specialty</th>
                  <th scope="col" className="border-b p-4 font-bold">Schedule</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.number} className="odd:bg-white even:bg-gray-50 align-top">
                    <td className="border-b p-4 whitespace-nowrap">{doctor.number}</td>
                    <td className="border-b p-4">
                      {doctor.name.map((line, index) => <div key={`${doctor.number}-name-${index}`}>{line}</div>)}
                    </td>
                    <td className="border-b p-4">
                      {doctor.schedule.map((line, index) => <div key={`${doctor.number}-time-${index}`}>{line}</div>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
      <SubscriptionPopup />
    </>
  )
}
