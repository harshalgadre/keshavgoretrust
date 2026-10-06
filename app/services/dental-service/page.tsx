import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SubscriptionPopup from '@/components/SubscriptionPopup'

const doctors = [
  {
    number: '१.',
    name: ['डॉ. ऐश्वर्या तेंडुलकर', '(बी.डी.एस.) दंत शल्य चिकित्सक', 'डॉ. भाग्यश्री मुसळे', '(बी.डी.एस.) दंत शल्य चिकित्सक'],
    schedule: ['सोमवार ते शनिवार – सकाळी ८.३० ते सकाळी १०.३०', 'बुधवार – सायंकाळी ५.३० ते ८.००'],
  },
  {
    number: '३.',
    name: ['डॉ. अनुजा उत्तकर', '(बी.डी.एस.) दंत शल्य चिकित्सक'],
    schedule: ['सोमवार ते शनिवार', 'दुपारी २ ते दुपारी ४'],
  },
  {
    number: '४.',
    name: ['डॉ. पूजा पोत्रे', '(बी.डी.एस.) दंत शल्य चिकित्सक'],
    schedule: ['सोमवार ते शनिवार', 'सायंकाळी ५.३० ते रात्री ८.३०'],
  },
  {
    number: '५.',
    name: ['डॉ. प्रमिला जोशी', '(बी.डी.एस.) दंत शल्य चिकित्सक'],
    schedule: ['सोमवार ते शनिवार', 'सायंकाळी ५.३० ते रात्री ८.३०'],
  },
  {
    number: '६.',
    name: ['डॉ. जयेश घोडके', '(मानसोपचार तज्ञ)'],
    schedule: ['मंगळवार आणि शुक्रवार', 'सायं. ८ ते सायं. ९.३०'],
  },
  {
    number: '७.',
    name: ['डॉ. प्रविण पुनामिया', '(नेत्र चिकित्सक)'],
    schedule: ['सोमवार', 'दुपारी १२.०० ते दुपारी १.००'],
  },
  {
    number: '८.',
    name: ['डॉ. सी.सी. चिंचाळकर', 'डॉ. पूर्वी खेर', '(नेत्र चिकित्सक)', '(त्वचारोग तज्ञ)'],
    schedule: ['शनिवार', 'बुधवार – सायंकाळी ५.३० ते ८.००', 'सायंकाळी ६.०० ते रात्री ८.००'],
  },
  {
    number: '१०.',
    name: ['डॉ. अक्षय मेळाय', '(एम.डी.एस.) दंतवंगोपचार चिकित्सक (इम्प्लांट)'],
    schedule: ['बुधवार', 'दुपारी ३.३०'],
  },
  {
    number: '११.',
    name: ['डॉ. जिग्नेश सेजपाल', '(एम.डी.एस.) दंतशल्य चिकित्सक'],
    schedule: ['४ था शनिवार', 'सकाळी ८.३० ते सकाळी १०.००'],
  },
  {
    number: '१२.',
    name: ['डॉ. अनिकेत चंदाणीया', '(एम.डी.एस.) दंतवंगोपचार चिकित्सक'],
    schedule: ['१ ला आणि ३ रा गुरुवार – दुपारी २ ते दुपारी ४', '२ रा आणि ४ था गुरुवार – सायं. ६ ते रात्री ८'],
  },
  {
    number: '१३.',
    name: ['डॉ. हर्षा नलावडे', '(एम.डी.एस.) दंतशल्य चिकित्सक'],
    schedule: ['मंगळवार', 'सायंकाळी ६.०० ते रात्री ८.००'],
  },
]

export default function DentalServicePage() {
  return (
    <>
      <Header />
      <Navigation />

      <section className="bg-primary py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2" lang="mr">केशव गोरे स्मारक ट्रस्ट</p>
          <h1 className="text-3xl sm:text-5xl font-bold" lang="mr">दंत विभाग व आरोग्य केंद्र</h1>
          <a href="tel:9321091313" className="inline-block mt-5 text-lg font-semibold hover:text-secondary" lang="mr">
            भ्रमणध्वनी क्र. 9321091313
          </a>
        </div>
      </section>

      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left" lang="mr">
              <thead>
                <tr className="bg-cream">
                  <th scope="col" className="border-b p-4 font-bold">अ.क्र.</th>
                  <th scope="col" className="border-b p-4 font-bold">डॉक्टरांचे नाव व विशेषता</th>
                  <th scope="col" className="border-b p-4 font-bold">वेळ</th>
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
