'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Programs() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const programs = [
    {
      title: "Wayfound Leadership Cohort",
      subtitle: "",
      image: "/images/fishing image1.jpg",
      content: {
        intro: "At the heart of Wayfound Outdoors is the Wayfound Leadership Cohort — a transformational journey for young men who are ready to grow in faith, purpose, and leadership. Over the course of a year, participants are guided through intentional mentorship, outdoor challenge, and spiritual formation designed to help them become servant leaders—young men who live with courage, humility, and conviction.",
        description: "The Leadership Cohort is a discipleship-based mentorship program that blends outdoor adventure with life skill development and spiritual growth. Each season centers around a theme—Identity, Brotherhood, Resilience, and Legacy—building upon one another to shape the character and confidence of each participant.",
        duration: "12 Months",
        tiers: [
          {
            name: "Foundation Phase",
            duration: "Months 1-3",
            description: "Building trust, establishing routines, and introducing core values through outdoor experiences and mentorship.",
            includes: ["Weekly mentorship sessions", "Monthly outdoor adventures", "Personal development planning", "Community service projects"],
            focus: "Identity formation and trust building"
          },
          {
            name: "Growth Phase", 
            duration: "Months 4-8",
            description: "Deepening relationships, challenging comfort zones, and developing leadership skills through increasingly complex outdoor challenges.",
            includes: ["Bi-weekly leadership training", "Extended wilderness expeditions", "Peer mentoring opportunities", "Skill-building workshops"],
            focus: "Leadership development and resilience"
          },
          {
            name: "Legacy Phase",
            duration: "Months 9-12", 
            description: "Preparing for transition, mentoring others, and applying leadership skills in real-world contexts.",
            includes: ["Mentoring younger participants", "Community leadership projects", "Transition planning", "Legacy project development"],
            focus: "Legacy building and servant leadership"
          }
        ],
        buttonText: "Apply for Leadership Cohort"
      }
    },
    {
      title: "Adventure Experiences",
      subtitle: "Three Pathways to Growth",
      image: "/images/fishing front image 2.jpg",
      content: {
        intro: "Each experience is designed to meet participants where they are and guide them toward deeper connection, confidence, and purpose. Whether you're taking your first steps into outdoor adventure or ready for deeper challenges, there's a pathway for you.",
        description: "Our Adventure Experiences combine outdoor skill-building with personal growth, creating spaces where young men can discover their strengths, build confidence, and form lasting friendships.",
        tiers: [
          {
            name: "Fishing Track",
            duration: "1-3 Days",
            description: "Every cast is a lesson in patience, faith, and perseverance. Our Fishing Experiences invite youth and families to slow down, breathe deep, and find stillness in nature's rhythm.",
            includes: ["Professional instruction", "All equipment provided", "Safety training", "Reflection circles"],
            focus: "Patience, focus, and connection with nature"
          },
          {
            name: "Hiking Track",
            duration: "Half Day - 3 Days", 
            description: "The trail teaches what words cannot. Our Hiking Experiences are about more than reaching the summit—they're about discovering strength in community.",
            includes: ["Guided trail experiences", "Navigation training", "Group challenges", "Mountain-top reflections"],
            focus: "Endurance, teamwork, and personal achievement"
          },
          {
            name: "Camping Track",
            duration: "2-5 Days",
            description: "The fire is where stories are shared and souls are restored. Our Camping Experiences bring youth and mentors together under the stars for connection, reflection, and brotherhood.",
            includes: ["Campsite setup and management", "Fire building and safety", "Group cooking", "Evening reflection circles"],
            focus: "Community building, self-reliance, and spiritual growth"
          }
        ],
        buttonText: "Book Your Adventure"
      }
    },
    {
      title: "The Wayfinder Retreat",
      subtitle: "Our Signature Experience",
      image: "/images/fishing front image 3.jpg",
      content: {
        intro: "This is the heart of Wayfound Outdoors—a four-day journey of discovery, restoration, and faith. The Wayfinder Retreat combines outdoor adventure, personal reflection, and intentional brotherhood to help young men find who they are and who they're called to be.",
        description: "Each day explores a theme: Identity, The Mask & Pose, Wounds, and Legacy. Participants are guided through devotionals, small group discussions, and hands-on challenges that inspire transformation.",
        duration: "4 Days / 3 Nights",
        tagline: "Where boys become men, and men become leaders",
        buttonText: "Register for Wayfinder Retreat"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-24 p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-12 text-center" style={{color: '#0A3154'}}>
            Programs
        </h1>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              {/* Enhanced Header with Full Image Coverage - Expandable */}
              <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                openDropdown === index ? 'h-[400px] md:h-[500px]' : 'h-48 md:h-64'
              }`}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-contain transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center px-8">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">
                      {program.title}
                    </h2>
                    {program.subtitle && (
                      <p className="text-lg font-medium text-white/90 drop-shadow-md">
                        "{program.subtitle}"
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Creative Right-Side Dropdown Panel */}
                <div className="absolute right-0 top-0 h-full w-20 md:w-24 bg-gradient-to-l from-black/60 to-transparent flex items-center justify-center">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="group/btn bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg
                      className={`w-6 h-6 text-white transition-all duration-500 ${
                        openDropdown === index ? 'rotate-180 scale-110' : 'group-hover/btn:scale-110'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
              </div>

              {/* Enhanced Dropdown content */}
              <div className={`transition-all duration-700 ease-in-out ${
                openDropdown === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-8 bg-gradient-to-br from-white/95 to-white/90" style={{color: '#0A3154'}}>
                  {/* Intro content */}
                  <p className="text-lg leading-relaxed mb-6">
                    {program.content.intro}
                  </p>

                  {/* Description if exists */}
                  {program.content.description && (
                    <p className="text-lg leading-relaxed mb-6">
                      {program.content.description}
                    </p>
                  )}

                  {/* Duration if exists */}
                  {program.content.duration && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2" style={{color: '#0A3154'}}>Duration:</h3>
                      <p className="text-lg font-semibold">{program.content.duration}</p>
                    </div>
                  )}

                  {/* Enhanced Tiers if exists */}
                  {program.content.tiers && (
                    <div className="space-y-6 mb-8">
                      {program.content.tiers.map((tier, tierIndex) => (
                        <div key={tierIndex} className="group/tier bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {tierIndex + 1}
                            </div>
                            <h3 className="text-xl font-bold" style={{color: '#0A3154'}}>
                              {tier.name}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold mb-3 text-blue-700">Duration: {tier.duration}</p>
                          <p className="text-lg leading-relaxed mb-4">
                            {tier.description}
                          </p>
                          <div className="mb-4">
                            <h4 className="text-lg font-bold mb-3 flex items-center gap-2" style={{color: '#0A3154'}}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Includes:
                            </h4>
                            <ul className="space-y-2">
                              {tier.includes.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-blue-100/50 rounded-lg p-4">
                            <p className="text-lg font-medium italic text-blue-800">
                              <span className="font-bold">Focus:</span> {tier.focus}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tagline if exists */}
                  {program.content.tagline && (
                    <div className="text-center mb-6">
                      <p className="text-xl font-bold italic" style={{color: '#0A3154'}}>
                        "{program.content.tagline}"
                      </p>
                    </div>
                  )}

                  {/* Button */}
                  <div className="text-center">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                      style={{backgroundColor: '#023E8A'}}
                    >
                      {program.content.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Invitation */}
        <section className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200" style={{color: '#0A3154'}}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-6" style={{color: '#0A3154'}}>
              Closing Invitation
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Every experience is more than an outing—it's a pathway back to connection.
              Whether you're a parent seeking growth for your child, a youth ready for purpose, or a partner hoping to make a difference, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programs" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Start Your Journey
              </a>
              <a href="/contact" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Bring Wayfound to Your Organization
              </a>
              <a href="/about" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Support the Mission
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}