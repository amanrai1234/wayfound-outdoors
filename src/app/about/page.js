'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 'jared',
      name: 'Jared',
      title: 'Founder, Wayfound Outdoors',
      image: '/images/jared.jpg',
      content: `Hi everyone, my name is Jared Jones. I've spent over 23 years fishing, hiking, camping, and being in the outdoors. But honestly, that's not why I started Wayfound.

I started this because I know what it feels like to be unheard, misunderstood, unwanted, and unloved. Nature was the one place I could breathe and just be. Fishing with my father and grandfather, walking trails, and sitting by the water gave me peace and purpose when I didn't always feel it anywhere else. Those moments shaped me, and they still guide me today.

I believe every young man carries the potential to become someone great. Too often, that potential is ignored or crushed under the weight of rejection, silence, or the lies the world tells them. At Wayfound, we create spaces where young men are seen, supported, and challenged to grow. We use the outdoors as a classroom and a place of healing, but what we're really doing is building leaders, breaking cycles, and helping people step into who they were created to be.

For me, this isn't just work. It's personal. It's a calling. I've lived it, and now I want to make sure others know they don't have to walk that road alone. Wayfound Outdoors exists so that the next generation can rise up with confidence, character, and purpose.`
    },
    {
      id: 'brittani',
      name: 'Brittani',
      title: 'Marketing Director',
      image: '/images/brittani.jpg',
      content: `Brittani serves as the Marketing Director at Wayfound Outdoors, where she uses her gifts in design and strategy to share the mission with youth, families, and the broader community. She leads the creation of flyers, visuals, and creative campaigns, while also guiding marketing efforts for growth.

With a bachelor's degree in biology and psychology and professional experience as a consultant in health technology, Brittani brings both creativity and strategy to her work. But above all, she is passionate about discipling the next generation—helping young people root their identity in Christ rather than in anything external.

Delivered from new-age spirituality in 2024, Brittani now walks boldly in faith, using her story as a testimony of God's redeeming love. Every project she works on is shaped by her calling to build spaces of belonging, transformation, and purpose for youth.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Title Section */}
      <div className="px-6 sm:px-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-4" style={{color: '#0A3154'}}>
            Meet the Wayfinders
          </h1>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="px-6 sm:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleSections[member.id];
              
              return (
                <div 
                  key={member.id}
                  ref={el => sectionRefs.current[index] = el}
                  data-section={member.id}
                  className="group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                  }`}>
                    
                    {/* Image Section */}
                    <div className={`relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
                      isVisible ? 'lg:scale-105' : 'hover:scale-105'
                    } ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      
                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-2">
                          {member.name}
                        </h3>
                        <p className="text-xl text-white/90 drop-shadow-md font-medium">
                          {member.title}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`transition-all duration-1000 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                      <div className="p-8 lg:p-12">
                        <div className="h-full">
                          <div className="mb-8">
                            <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0A3154'}}>
                              {member.name}
                            </h3>
                            <p className="text-xl sm:text-2xl font-semibold text-blue-700 mb-8">
                              {member.title}
                            </p>
                          </div>

                          {/* Content as paragraphs */}
                          <div className="text-lg leading-relaxed space-y-6" style={{color: '#0A3154'}}>
                            {member.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="font-medium">
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* Decorative element */}
                          <div className="mt-12 flex items-center gap-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}