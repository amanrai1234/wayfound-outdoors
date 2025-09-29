import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <section className="pb-12">
      {/* Half-page hero (50vh) */}
      <div className="relative h-[50vh]">
        <Image
          src="/images/hero.jpg"
          alt="Wayfound Outdoors"
          fill
          priority
          className="object-cover"
        />
        {/* Optional overlay text */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-5xl font-bold">Transformative Outdoor Mentorship for Young Men</h2>
            <p className="mt-3 text-white/90"></p>
            <div className="mt-6 flex justify-center">
              <a href="/programs" className="inline-flex items-center gap-2 rounded-md bg-[#023E8A] px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel below the fold */}
      <div className="mt-8 px-6 sm:px-10">
        <ImageCarousel
          images={[
            "/images/slide1.jpg",
            "/images/slide2.jpg",
            "/images/slide3.jpg",
          ]}
          interval={3000} // change speed here
        />
      </div>
    </section>
  );
}
