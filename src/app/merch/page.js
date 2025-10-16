import Image from "next/image";

export default function Merch() {
  return (
    <div className="min-h-screen pt-24 p-8 relative">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-6" style={{color: '#0A3154'}}>Merch</h1>
        <p className="mb-10" style={{color: '#0A3154'}}>Explore products — hover to reveal details with a glossy shine.</p>

        {/* Interactive product grid with tilt + shine on hover - BLURRED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 blur-sm pointer-events-none">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/90 shadow-2xl transition-transform duration-300 hover:-translate-y-1" style={{color: '#0A3154'}}>
              {/* Image with subtle zoom on hover */}
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={`/images/slide${(i%3)||3}.jpg`} 
                  alt={`Product ${i}`} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Glossy shine sweep */}
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-tr from-white/5 via-white/40 to-white/5 opacity-0 group-hover:opacity-100 [mask-image:linear-gradient(to_right,transparent,black,transparent)] animate-[shine_1.2s_ease-out_forwards]" />
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1 tracking-wide">Product {i}</h3>
                <p className="mb-3">Outdoor-ready gear for the next story.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${(10 + i * 3).toFixed(2)}</span>
                  <a href="#" className="inline-flex items-center rounded-md px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                    Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

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
              Merch Collection
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              We're crafting something special for you! Our outdoor gear and apparel collection 
              is in development, featuring quality items that reflect the spirit of adventure 
              and community that defines Wayfound Outdoors.
            </p>
            
            {/* Features Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50/80 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Quality Gear</p>
              </div>
              <div className="bg-emerald-50/80 rounded-lg p-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Adventure Ready</p>
              </div>
              <div className="bg-orange-50/80 rounded-lg p-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold" style={{color: '#0A3154'}}>Community Spirit</p>
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
    </div>
  );
}
