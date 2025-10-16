export const metadata = {
  title: 'Upcoming Events'
};

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Mock calendar data to illustrate layout without API wiring
const mockEvents = [
  {
    id: 'evt-1',
    summary: 'Trail Mentorship Hike',
    start: '2025-10-12T09:00:00',
    end: '2025-10-12T12:00:00',
    location: 'Raven Rock State Park',
    description: 'Intro hike focusing on leadership, teamwork, and reflection by the river.',
    htmlLink: 'https://calendar.google.com/'
  },
  {
    id: 'evt-2',
    summary: 'Fly Fishing Basics',
    start: '2025-10-19T08:30:00',
    end: '2025-10-19T11:30:00',
    location: 'Harris Lake',
    description: 'Casting, safety, and species ID. Gear provided. Bring water and sun protection.',
    htmlLink: 'https://calendar.google.com/'
  },
  {
    id: 'evt-3',
    summary: 'Wilderness Skills Workshop',
    start: '2025-10-26T10:00:00',
    end: '2025-10-26T14:00:00',
    location: 'Umstead Park',
    description: 'Navigation, shelter basics, and mindful time in nature.',
    htmlLink: 'https://calendar.google.com/'
  }
];

export default function Page() {
  const events = mockEvents;

  return (
    <main className="min-h-screen pt-24 relative">
      {/* Immersive header zone */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{color: '#0A3154'}}>
            Upcoming Events
          </h1>
        </div>
      </section>

      {/* Events list - fancy timeline cards with contact button (using mock data) - BLURRED */}
      <section className="px-6 sm:px-10 py-10 max-w-5xl mx-auto blur-sm pointer-events-none">
        {events.length === 0 ? (
          <p style={{color: '#0A3154'}}>No upcoming events found.</p>
        ) : (
          <ul className="grid gap-6">
            {events.map(ev => (
              <li key={ev.id} className="relative rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors">
                <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold tracking-wide" style={{color: '#0A3154'}}>{ev.summary}</h2>
                    <span className="block text-sm mt-1" style={{color: '#0A3154'}}>
                      {formatDate(ev.start)}{ev.end ? ` – ${formatDate(ev.end)}` : ''}
                    </span>
                    {ev.location ? (
                      <div className="mt-1" style={{color: '#0A3154'}}>{ev.location}</div>
                    ) : null}
                    {ev.description ? (
                      <p className="mt-3 whitespace-pre-wrap" style={{color: '#0A3154'}}>{ev.description}</p>
                    ) : null}
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    {ev.htmlLink ? (
                      <a
                        href={ev.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md px-4 py-2 font-medium text-white shadow hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}
                      >
                        View in Calendar
                      </a>
                    ) : null}
                    <a
                      href="/contact"
                      className="inline-flex items-center rounded-md px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-blue-200/50 max-w-2xl mx-auto text-center">
          {/* Animated Coming Soon Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full px-8 py-3 mb-8 shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-lg tracking-wide">COMING SOON</span>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
          </div>
          
          {/* Main Message */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#0A3154'}}>
            Event Calendar
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            We're building something amazing for you! Our interactive event calendar 
            is in development, featuring real-time updates, easy registration, and 
            seamless integration with your calendar apps.
          </p>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50/80 rounded-lg p-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Live Calendar</p>
            </div>
            <div className="bg-emerald-50/80 rounded-lg p-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Easy Registration</p>
            </div>
            <div className="bg-orange-50/80 rounded-lg p-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Real-time Updates</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-base font-medium text-gray-600">
              Want to be notified when we launch?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" 
              style={{backgroundColor: '#023E8A'}}
            >
              <span>Get Notified</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


