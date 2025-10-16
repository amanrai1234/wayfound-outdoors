'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import FlipBook from "@/components/FlipBook";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const sectionRefs = useRef({});

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

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Our Mission & Story",
      subtitle: "Why We Exist",
      image: "/images/fishing image1.jpg",
      content: {
        intro: "We live in a world that's more connected than ever and yet many of us still feel isolated and unseen. Wayfound Outdoors exists to bring connection back to a world that's grown full of noise, falseness, and disconnection.",
        body: "Through faith-rooted outdoor experiences like fishing, hiking, and camping, we create spaces where young men can rediscover who they are, where families can grow together, and where partners can help build lasting change in their communities.",
        closing: "Every cast, every trail, and every fire circle is a chance to reconnect — to ourselves, to each other, and to the Creator who made it all."
      }
    },
    {
      title: "Why I Do What I Do",
      subtitle: "A Personal Journey",
      image: "/images/fishing front image 2.jpg",
      content: {
        intro: "I know what it feels like to grow up unseen — to carry potential without guidance. For many young men, the world teaches toughness but not tenderness, strength but not purpose.",
        story: "Wayfound Outdoors was born out of that story. Because I've lived it. I know the ache of wanting to be seen, the hunger for mentorship, the need for someone to say, 'You were made for more.'",
        philosophy: "At Wayfound Outdoors, we lead differently. We lead by serving. Every hike, every reflection circle, every moment around the fire is a step toward restoration — of identity, of brotherhood, and of faith.",
        mission: "We don't just take people outside; we help them look inward. Because when we heal the heart, we can change the world. I've seen transformation, hope, and leadership rise up in the very places that were once broken."
      }
    },
    {
      title: "Our Experiences",
      subtitle: "Three Pathways to Growth",
      image: "/images/fishing front image 3.jpg",
      content: {
        intro: "Each experience is designed to meet participants where they are and guide them toward deeper connection, confidence, and purpose.",
        experiences: [
          {
            name: "Fishing Track",
            tagline: "Cast Toward Purpose",
            description: "Every cast is a lesson in patience, faith, and perseverance. Our Fishing Experiences invite youth and families to slow down, breathe deep, and find stillness in nature's rhythm.",
            tiers: "First Cast • Guided Cast • Deep Water Connections"
          },
          {
            name: "Hiking Track", 
            tagline: "Walk the Path Together",
            description: "The trail teaches what words cannot. Our Hiking Experiences are about more than reaching the summit—they're about discovering strength in community.",
            tiers: "Wilderness Mirror Walk • Ascent Experience • Vision Quest Hike"
          },
          {
            name: "Camping Track",
            tagline: "Gather, Grow, and Ground", 
            description: "The fire is where stories are shared and souls are restored. Our Camping Experiences bring youth and mentors together under the stars for connection, reflection, and brotherhood.",
            tiers: "Sacred Fire Circle Campout • Adventure Camp • Immersion Expedition"
          }
        ]
      }
    },
    {
      title: "The Wayfinder Retreat",
      subtitle: "Our Signature Experience",
      image: "/images/hero.jpg",
      content: {
        intro: "This is the heart of Wayfound Outdoors—a four-day journey of discovery, restoration, and faith. The Wayfinder Retreat combines outdoor adventure, personal reflection, and intentional brotherhood to help young men find who they are and who they're called to be.",
        description: "Each day explores a theme: Identity, The Mask & Pose, Wounds, and Legacy. Participants are guided through devotionals, small group discussions, and hands-on challenges that inspire transformation.",
        duration: "4 Days / 3 Nights",
        focus: "Healing through faith, redefining strength through love, and learning that leadership begins with service."
      }
    }
  ];

  return (
    <section className="pb-12">
      {/* Enhanced Hero Section */}
      <div className="relative h-[110vh] overflow-hidden">
        <div className="absolute inset-0 scale-110 animate-[kenburns_20s_ease-in-out_infinite_alternate]">
        <Image
            src="/images/main-pic.jpg"
          alt="Wayfound Outdoors"
          fill
          priority
          className="object-cover animate-[gentle-drift_15s_ease-in-out_infinite_alternate]"
        />
        </div>
        
        {/* Additional animated overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 animate-[color-shift_12s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent animate-[light-sweep_8s_ease-in-out_infinite_alternate]"></div>
        
        {/* Floating outdoor elements */}
        <div className="absolute top-20 left-10 animate-[floatY_8s_ease-in-out_infinite_alternate] opacity-80">
          <div className="w-8 h-8 border-2 border-white/60 rounded-full"></div>
        </div>
        <div className="absolute top-32 right-16 animate-[floatY_6s_ease-in-out_infinite_alternate] opacity-60">
          <div className="w-6 h-6 border-2 border-white/50 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-[floatY_7s_ease-in-out_infinite_alternate] opacity-70">
          <div className="w-4 h-4 border-2 border-white/55 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto px-6">
            {/* Outdoor-themed badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/40">
              <span className="text-white/95 text-sm font-medium">Adventure Awaits</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-6 text-white drop-shadow-2xl">
              Rediscover Connection
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 text-white/95 drop-shadow-lg">
              with Nature, with Purpose, with Each Other
            </div>
            <p className="text-lg sm:text-xl font-medium mb-8 leading-relaxed text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Wayfound Outdoors guides young men toward healing, leadership, and wholeness through adventure, mentorship, and faith.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/programs" className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                <span>Explore Our Experiences</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/contact" className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                <span>Partner With Us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/about" className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                <span>Meet the Mission</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            {/* Outdoor stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">50+</div>
                <div className="text-sm text-white/80">Young Men Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">25+</div>
                <div className="text-sm text-white/80">Trips Led</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Line */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative w-1 h-96 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ 
              height: `${scrollProgress * 100}%`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Scroll-Triggered Sections */}
      <div className="px-6 sm:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-wide mb-4" style={{color: '#0A3154'}}>
              Discover Wayfound Outdoors
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed" style={{color: '#0A3154'}}>
              From mountain peaks to lake shores, every adventure tells a story of growth, connection, and purpose.
            </p>
          </div>
          
          <div className="space-y-24">
            {sections.map((section, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleSections[index];
              
              return (
                <div 
                  key={index} 
                  ref={el => sectionRefs.current[index] = el}
                  data-section={index}
                  className="group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                  }`}>
                    
                    {/* Image Section */}
                    <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                      isVisible ? 'lg:scale-105' : 'hover:scale-105'
                    } ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-2">
                        {section.title}
                      </h3>
                       <p className="text-xl sm:text-2xl text-white/90 drop-shadow-md font-medium">
                         &ldquo;{section.subtitle}&rdquo;
                       </p>
                    </div>
                  </div>
                  
                    {/* Content Section */}
                    <div className={`transition-all duration-1000 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } ${section.title === "Our Experiences" ? 'opacity-100 translate-y-0' : (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}`}>
                      <div className={`p-8 ${section.title === "Our Experiences" ? 'min-h-[500px] max-h-none overflow-visible' : 'min-h-[500px] max-h-[800px] overflow-y-auto'}`}>
                        <div className="h-full">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-4" style={{color: '#0A3154'}}>
                              {section.title}
                            </h3>
                              <p className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6">
                                &ldquo;{section.subtitle}&rdquo;
                              </p>
                </div>

                          {/* Static Text Content */}
                          <div className="text-lg leading-relaxed space-y-6" style={{color: '#0A3154'}}>
                            {section.content.intro && (
                              <p className="font-medium">
                        {section.content.intro}
                      </p>
                            )}

                      {section.content.body && (
                              <p>
                          {section.content.body}
                        </p>
                      )}

                      {section.content.story && (
                              <p>
                          {section.content.story}
                        </p>
                      )}

                      {section.content.philosophy && (
                              <p>
                          {section.content.philosophy}
                        </p>
                      )}

                      {section.content.mission && (
                              <p className="font-medium">
                          {section.content.mission}
                        </p>
                      )}

                      {section.content.closing && (
                              <p className="font-medium">
                          {section.content.closing}
                        </p>
                      )}

                      {section.content.description && (
                              <p>
                          {section.content.description}
                        </p>
                      )}

                      {section.content.duration && (
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="text-lg font-bold mb-2" style={{color: '#0A3154'}}>Duration:</h4>
                          <p className="text-lg font-semibold">{section.content.duration}</p>
                        </div>
                      )}

                      {section.content.focus && (
                              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                                <p className="text-lg font-medium italic" style={{color: '#0A3154'}}>
                          Experience Focus: {section.content.focus}
                        </p>
                              </div>
                      )}

                      {/* Experiences section */}
                      {section.content.experiences && (
                              <div className="space-y-4">
                                <h4 className="text-xl font-bold mb-4" style={{color: '#0A3154'}}>Experience Tracks</h4>
                          {section.content.experiences.map((exp, expIndex) => (
                                  <div key={expIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <h5 className="text-lg font-bold mb-2" style={{color: '#0A3154'}}>
                                {exp.name} – "{exp.tagline}"
                                    </h5>
                              <p className="text-base leading-relaxed mb-2">
                                {exp.description}
                              </p>
                              <p className="text-sm font-semibold">
                                Tiers Include: {exp.tiers}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Locations section */}
                      {section.content.locations && (
                              <div className="space-y-4">
                                <h4 className="text-xl font-bold mb-4" style={{color: '#0A3154'}}>Our Locations</h4>
                          {section.content.locations.map((location, locIndex) => (
                            <div key={locIndex} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="text-lg font-bold mb-2" style={{color: '#0A3154'}}>
                                {location.name}
                                    </h5>
                              <p className="text-base leading-relaxed mb-2">
                                {location.description}
                              </p>
                                    <p className="text-sm font-semibold">
                                      {location.highlights}
                                    </p>
                                  </div>
                          ))}
                        </div>
                      )}
                    </div>

                          {/* Action Button */}
                          <div className="mt-8 flex justify-end">
                      <a 
                        href="/programs" 
                        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                        style={{backgroundColor: '#023E8A'}}
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
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

      {/* Enhanced Book + text layout */}
      <div className="mt-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-black/20">
              <span className="text-lg font-semibold" style={{color: '#0A3154'}}>Adventure Stories</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <FlipBook
          images={[
            "/images/slide1.jpg",
            "/images/slide2.jpg",
            "/images/slide3.jpg",
          ]}
                interval={3000}
              />
            </div>
            <div className="p-8" style={{color: '#0A3154'}}>
              <div className="mb-6">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-wide" style={{color: '#0A3154'}}>Stories From The Trail</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                What actually changes a person on the trail? Is it the distance, the view,
                or the people walking beside you? Our answer: all three—woven together in
                moments that feel small but mean everything later.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Each outing is a chapter—captured in snapshots that turn like pages in a
                well‑worn journal. As the images flip, ask yourself: where would your
                chapter begin, and who would you bring along?
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/upcoming" className="group inline-flex items-center gap-3 rounded-xl px-6 py-3 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                  <span>See Upcoming Events</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/news" className="group inline-flex items-center gap-3 rounded-xl px-6 py-3 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                  <span>Read Our News</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adventure Gallery & Join the Movement */}
      <div className="mt-20 px-6 sm:px-10">
         <div className="max-w-7xl mx-auto">
          
          {/* Gallery Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-black/20">
              <span className="text-lg font-semibold" style={{color: '#0A3154'}}>Adventure Gallery</span>
           </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-4" style={{color: '#0A3154'}}>
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#0A3154'}}>
              This isn't just a program—it's a pathway to restoration. Every adventure tells a story of growth, connection, and purpose.
            </p>
          </div>
          
          {/* Integrated Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            
            {/* Main Featured Image */}
            <div className="lg:col-span-6 group">
              <div 
                className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/collage.jpg')}
              >
                <Image
                  src="/images/collage.jpg"
                  alt="Adventure collage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl drop-shadow-lg">Adventure Stories</h3>
                </div>
              </div>
            </div>
            
            {/* Call to Action Card */}
            <div className="lg:col-span-6 relative">
              {/* Animated background elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-blue-200 rounded-full animate-pulse opacity-40 delay-1000"></div>
              <div className="absolute -bottom-3 -left-8 w-8 h-8 bg-blue-150 rounded-full animate-pulse opacity-50 delay-500"></div>
              
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-8 h-full shadow-xl border border-blue-100/50 backdrop-blur-sm text-center relative overflow-hidden">
                {/* Floating particles animation */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-700"></div>
                  <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping opacity-25 delay-1000"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4 animate-fade-in-up" style={{color: '#0A3154'}}>
                    Ready to Begin?
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed mb-6 animate-fade-in-up delay-200" style={{color: '#0A3154'}}>
                    Whether you're a youth searching for purpose, a parent seeking connection, or a partner ready to make impact, there's a place for you here.
                  </p>
                  <p className="text-base md:text-lg font-medium mb-8 animate-fade-in-up delay-300" style={{color: '#0A3154'}}>
                    Let's lead with love. Let's build what's been broken. Let's get Wayfound—together.
                  </p>
                  <div className="flex flex-col gap-3 animate-fade-in-up delay-400">
                    <a href="/programs" className="group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                      <span>Start Your Journey</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                      <span>Partner With Us</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a href="/about" className="group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                      <span>Support Our Mission</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smaller Gallery Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/fisihing2.jpg')}
              >
                <Image
                  src="/images/fisihing2.jpg"
                  alt="Fishing moment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/tree-back.jpg')}
              >
                <Image
                  src="/images/tree-back.jpg"
                  alt="Nature backdrop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/wood-back.jpg')}
              >
                <Image
                  src="/images/wood-back.jpg"
                  alt="Wooden backdrop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/woodback.jpg')}
              >
                <Image
                  src="/images/woodback.jpg"
                  alt="Wooden background"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/back.jpg')}
              >
                <Image
                  src="/images/back.jpg"
                  alt="Adventure background"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div 
                className="relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setExpandedImage('/images/fishing1.jpg')}
              >
                <Image
                  src="/images/fishing1.jpg"
                  alt="Fishing adventure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={expandedImage}
                alt="Expanded view"
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}