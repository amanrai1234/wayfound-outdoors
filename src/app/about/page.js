import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-emerald-50">About Us</h1>
        <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-10 max-w-3xl">
          Wayfound Outdoors mentors young men through transformative, nature-based experiences that
          build character, confidence, and community.
        </p>

        {/* Jared’s Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-44 h-44 relative rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/images/jared.jpg"
              alt="Jared - CEO/Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-50">Jared</h2>
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium mb-4">
              Founder, Wayfound Outdoors
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-50/95">
            Hi everyone, my name is Jared Jones. I’ve spent over 23 years fishing, hiking, camping, and being in the outdoors. But honestly, that’s not why I started Wayfound.



I started this because I know what it feels like to be unheard, misunderstood, unwanted, and unloved. Nature was the one place I could breathe and just be. Fishing with my father and grandfather, walking trails, and sitting by the water gave me peace and purpose when I didn’t always feel it anywhere else. Those moments shaped me, and they still guide me today.



I believe every young man carries the potential to become someone great. Too often, that potential is ignored or crushed under the weight of rejection, silence, or the lies the world tells them. At Wayfound, we create spaces where young men are seen, supported, and challenged to grow. We use the outdoors as a classroom and a place of healing, but what we’re really doing is building leaders, breaking cycles, and helping people step into who they were created to be.



For me, this isn’t just work. It’s personal. It’s a calling. I’ve lived it, and now I want to make sure others know they don’t have to walk that road alone. Wayfound Outdoors exists so that the next generation can rise up with confidence, character, and purpose.
            </p>
          </div>
        </div>

        {/* Brittany’s Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Placeholder avatar instead of image */}
          <div className="w-44 h-44 relative rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/images/brittani.jpg"
              alt="Brittani - Creative Director"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-50">Brittani</h2>
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium mb-4">
              Marketing Director
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-50/95">
            Brittani serves as the Marketing Director at Wayfound Outdoors, where she uses her gifts in design and strategy to share the mission with youth, families, and the broader community. She leads the creation of flyers, visuals, and creative campaigns, while also guiding marketing efforts for growth.

With a bachelor’s degree in biology and psychology and professional experience as a consultant in health technology, Brittani brings both creativity and strategy to her work. But above all, she is passionate about discipling the next generation—helping young people root their identity in Christ rather than in anything external.

Delivered from new-age spirituality in 2024, Brittani now walks boldly in faith, using her story as a testimony of God’s redeeming love. Every project she works on is shaped by her calling to build spaces of belonging, transformation, and purpose for youth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
