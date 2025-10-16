'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function News() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/fishing image1.jpg",
    "/images/news.jpg"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen pt-24 p-8">
      <main className="max-w-6xl mx-auto">
        <h1 
          className={`text-4xl font-bold mb-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} 
          style={{color: '#0A3154'}}
        >
          News
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Event Image Carousel */}
          <div className="lg:col-span-1">
            <div 
              className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{animationDelay: '0.2s'}}
            >
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`News Image ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                ))}
              </div>
              {/* Gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animated Text Content */}
          <div className="lg:col-span-2 space-y-6" style={{color: '#0A3154'}}>
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '0.4s'}}
            >
              <h2 className="text-2xl font-bold mb-4" style={{color: '#0A3154'}}>
                Intro to fishing day- A day to remember
              </h2>
              <p className="text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
                Wayfound Outdoors recently hosted a day that brought eight young men
                together for something more than fishing—it was a journey of growth,
                connection, and reflection.
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '0.6s'}}
            >
              <p className="text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
                Even with gusty winds and light rain, spirits remained high as
                participants dove into hands-on lessons in fishing safety, baiting,
                casting, and identifying fish species. It wasn't just about reeling
                in catches—it was about discovering patience, attention, and joy in
                nature.
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '0.8s'}}
            >
              <p className="text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
                With every cast and tug, confidence grew. Laughter echoed across the
                water, and every successful catch was met with cheers and fist bumps.
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '1.0s'}}
            >
              <p className="text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
                Each young angler received a pack of lures, bobbers, and a personal
                journal to record their experiences and growth. These tokens serve not
                only as gear, but as mementos of their first steps into outdoor
                exploration.
              </p>
            </div>

            <div 
              className={`bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-l-4 border-blue-500 transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '1.2s'}}
            >
              <p className="text-lg leading-relaxed italic text-blue-800 font-medium">
                "It was a good experience. I like that y'all decided to go out of the
                inner city, which is good for the kids and me. Despite the wind,
                fishing was satisfying and I really liked that we did faith
                reflection!" – Participant, Age 17
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '1.4s'}}
            >
              <p className="text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
                We extend heartfelt thanks to our incredible mentors, volunteers, and
                supporters who made this event possible. Your time and energy helped
                spark curiosity, reflection, and joy in each participant.
              </p>
            </div>
            
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: '1.6s'}}
            >
              <p className="text-lg leading-relaxed italic text-emerald-700 font-medium">
                We can't wait for our next adventure. Until then—tight lines and happy
                fishing!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
