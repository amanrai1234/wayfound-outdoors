import Image from "next/image";

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Article Image */}
      <div className="w-full flex justify-center mt-8 mb-10">
        <Image
          src="/images/news.jpg"
          alt="Fishing Day"
          width={900}
          height={600}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-16">
        <h2 className="font-bold text-3xl mb-6">
          Intro Fishing Day – A Day to Remember
        </h2>
        <p className="italic mb-8 leading-relaxed">
          Wayfound Outdoors recently hosted a day that brought eight young men
          together for something more than fishing—it was a journey of growth,
          connection, and reflection.
        </p>

        <h3 className="mt-10 mb-4 font-semibold text-2xl">
          Casting Beyond the Shore
        </h3>
        <p className="mb-6 leading-relaxed">
          Even with gusty winds and light rain, spirits remained high as
          participants dove into hands-on lessons in fishing safety, baiting,
          casting, and identifying fish species. It wasn’t just about reeling
          in catches—it was about discovering patience, attention, and joy in
          nature.
        </p>
        <p className="mb-8 leading-relaxed">
          With every cast and tug, confidence grew. Laughter echoed across the
          water, and every successful catch was met with cheers and fist bumps.
        </p>

        <h3 className="mt-10 mb-4 font-semibold text-2xl">
          Tools, Keepsakes & Takeaways
        </h3>
        <p className="mb-8 leading-relaxed">
          Each young angler received a pack of lures, bobbers, and a personal
          journal to record their experiences and growth. These tokens serve not
          only as gear, but as mementos of their first steps into outdoor
          exploration.
        </p>

        <blockquote className="italic border-l-4 border-emerald-600 pl-4 text-gray-700 my-10">
          "It was a good experience. I like that y’all decided to go out of the
          inner city, which is good for the kids and me. Despite the wind,
          fishing was satisfying and I really liked that we did faith
          reflection!"
          <footer className="mt-3">– Participant, Age 17</footer>
        </blockquote>

        <h3 className="mt-10 mb-4 font-semibold text-2xl">Thank You</h3>
        <p className="mb-6 leading-relaxed">
          We extend heartfelt thanks to our incredible mentors, volunteers, and
          supporters who made this event possible. Your time and energy helped
          spark curiosity, reflection, and joy in each participant.
        </p>
        <p className="italic leading-relaxed">
          We can’t wait for our next adventure. Until then—tight lines and happy
          fishing!
        </p>
      </main>
    </div>
  );
}
