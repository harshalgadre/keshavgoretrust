'use client'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  address: string
  description: string
  contact: string
  category: string
  icon: string
}

interface EventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!isOpen || !event) return null

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        <div className="bg-primary p-4 flex justify-between items-center">
          <h3 id="modal-title" className="text-xl font-bold">
            {event.title}
          </h3>
          <button onClick={onClose} className="text-dark hover:text-dark/70">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className={`fas ${event.icon}`}></i>
            </div>
            <div>
              <p id="modal-date" className="font-medium">
                {formatDate(event.date)}
              </p>
              <p id="modal-time" className="text-gray-600">
                {event.time}
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-map-marker-alt text-primary"></i>
            </div>
            <div>
              <p id="modal-location" className="font-medium">
                {event.location}
              </p>
              <p id="modal-address" className="text-gray-600">
                {event.address}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-bold mb-2">Description</h4>
            <p id="modal-description" className="text-gray-600">
              {event.description}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold mb-2">Contact Person</h4>
            <p id="modal-contact" className="text-gray-600">
              {event.contact}
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <a
              href={`/events/register/${event.id}`}
              className="bg-primary text-dark px-6 py-2 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg inline-block mr-4"
            >
              Register
            </a>
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium transition-colors hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

