export default function Programs() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-emerald-50">Programs</h1>

        {/* Leadership Cohort */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-emerald-50">Leadership Cohort</h2>
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-emerald-100 shadow">
            <img src="/images/slide1.jpg" alt="Leadership Cohort" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-5 py-2.5 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Apply Now
            </a>
          </div>
        </section>

        {/* Day Trips */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-emerald-50">Day Trips</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Fishing */}
            <article className="rounded-xl overflow-hidden bg-white text-emerald-950 shadow border border-emerald-100">
              <img src="/images/slide1.jpg" alt="Fishing" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Fishing</h3>
                <p className="text-emerald-800/90">
                  Learn fundamentals on the water: safety, basic rigging, casting, and
                  reflection time by the shore.
                </p>
                <div className="mt-4">
                  <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Apply Now
                  </a>
                </div>
              </div>
            </article>

            {/* Hiking */}
            <article className="rounded-xl overflow-hidden bg-white text-emerald-950 shadow border border-emerald-100">
              <img src="/images/slide2.jpg" alt="Hiking" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Hiking</h3>
                <p className="text-emerald-800/90">
                  Guided local trails that build endurance and teamwork with moments of
                  journaling and vision setting.
                </p>
                <div className="mt-4">
                  <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Apply Now
                  </a>
                </div>
              </div>
            </article>

            {/* Camping */}
            <article className="rounded-xl overflow-hidden bg-white text-emerald-950 shadow border border-emerald-100">
              <img src="/images/slide3.jpg" alt="Camping" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Camping</h3>
                <p className="text-emerald-800/90">
                  Overnight experience with tent setup, camp cooking, fire circle, and
                  practical outdoor skills.
                </p>
                <div className="mt-4">
                  <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Apply Now
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* The Wayfinder Retreat */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-emerald-50">The Wayfinder Retreat</h2>
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-emerald-100 shadow">
            <img src="/images/slide2.jpg" alt="Wayfinder Retreat" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-5 py-2.5 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Apply Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
