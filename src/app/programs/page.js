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
      title: "Fishing Track",
      subtitle: "Cast Toward Purpose",
      image: "/images/fish3.jpg",
      content: {
        intro: "The water slows us down. It teaches us patience, focus, and trust. Our Fishing Experiences invite young men to step away from distractions and reconnect—with themselves, with nature, and with God. Every cast becomes a practice in perseverance and faith, reminding us that what we seek often takes time and care to find.",
        tiers: [
          {
            name: "First Cast",
            duration: "2.5 hours",
            description: "A welcoming introduction for beginners and groups new to the outdoors. Participants learn foundational fishing skills while exploring themes of identity, confidence, and stillness.",
            includes: ["Shoreline fishing instruction (casting, knot-tying, fish handling)", "All fishing gear and bait", "Mentor-guided reflection circle focused on 'What am I reaching for?'", "1 mentor per 12–15 youth", "Light snacks and community-building moments"],
            focus: "Finding calm in uncertainty, celebrating first victories, and learning that patience is a form of strength"
          },
          {
            name: "Guided Cast", 
            duration: "4 hours",
            description: "For groups ready to dive deeper. Guided Cast builds endurance, teamwork, and reflection through extended fishing practice, journaling, and faith-centered discussion.",
            includes: ["Lunch and hydration support", "Personal journals and growth prompts", "Nature walk with group reflections", "Mentorship focused on confidence, belonging, and perseverance"],
            focus: "Learning that consistency builds confidence, and that the process is just as meaningful as the outcome"
          },
          {
            name: "Deep Water Connections",
            duration: "Full Day (8 hours)", 
            description: "A full-day immersion combining advanced skill-building with intentional mentorship and community. Deep Water Connections blends challenge with reflection, transforming time on the water into lessons about leadership and faith.",
            includes: ["Boat, kayak, or shoreline fishing for larger species", "Rotating mentor conversations and team challenges", "'Cook Your Catch' fish fry and storytelling circle", "Journals, meals, and SEL reflection tools"],
            focus: "Deepening relationships and resilience. Learning that leadership is patience in motion"
          }
        ],
        buttonText: "Book Your Fishing Experience"
      }
    },
    {
      title: "Hiking Track",
      subtitle: "Walk the Path Together",
      image: "/images/hike.jpg",
      content: {
        intro: "Every trail has lessons to teach—about endurance, community, and faith. Our Hiking Experiences guide young men and families to discover what it means to persevere, to trust others, and to see strength as a shared journey.",
        tiers: [
          {
            name: "Wilderness Mirror Walk",
            duration: "3–4 hours",
            description: "A gentle yet profound experience designed to help participants reflect, breathe, and connect with nature's quiet wisdom.",
            includes: ["Guided 2–3 mile hike through local trails or parks", "Breathing and mindfulness exercises", "Solo reflection stops and group journaling", "1 mentor per 12–15 youth", "Light snacks and hydration support"],
            focus: "Building awareness, mindfulness, and gratitude through the natural world"
          },
          {
            name: "Ascent Experience",
            duration: "5 hours", 
            description: "A moderate challenge designed to reveal inner leadership. Participants rotate as group leaders while learning communication, encouragement, and perseverance.",
            includes: ["3–5 mile hike with leadership rotations", "Reflection stations and discussion prompts", "Lunch and rest breaks", "Group debrief and mentorship reflection"],
            focus: "Discovering that real leadership means lifting others along the climb"
          },
          {
            name: "Vision Quest Hike",
            duration: "Full Day",
            description: "A powerful summit experience that blends physical challenge with spiritual discovery. Participants set intentions, face obstacles, and reflect at scenic summits or waterfalls.",
            includes: ["4–6 mile hike with elevation gain", "'What mountain are you climbing?' reflection activity", "Summit silence and guided journaling", "Lunch, hydration, and mentor debrief"],
            focus: "Overcoming internal and external mountains through courage, reflection, and prayer"
          }
        ],
        buttonText: "Book Your Hiking Experience"
      }
    },
    {
      title: "Camping Track",
      subtitle: "Gather, Grow, and Ground",
      image: "/images/tree-back.jpg",
      content: {
        intro: "When the fire burns low and the stars emerge, stories come alive. Our Camping Experiences create space for connection, reflection, and renewal. These overnight journeys combine teamwork, skill-building, and sacred moments around the fire—where young men learn to rely on themselves and each other.",
        tiers: [
          {
            name: "Sacred Fire Circle Campout",
            duration: "1 Night",
            description: "An intimate overnight experience where community and conversation come first. Youth and mentors gather around the fire for stories, prayer, and reflection on what it means to belong.",
            includes: ["Tent setup training and outdoor safety instruction", "Fire circle storytelling and devotionals", "Dinner, breakfast, and snacks", "All gear provided and supervised setup"],
            focus: "Cultivating belonging, gratitude, and connection through shared reflection"
          },
          {
            name: "Adventure Camp",
            duration: "2 Days / 1 Night", 
            description: "A balanced combination of hands-on learning and personal growth. Participants strengthen outdoor skills while deepening trust and resilience.",
            includes: ["All Sacred Fire Circle features", "Skill workshops: fire-starting, knot-tying, or camp cooking", "Day hike or fishing integration", "Journals and SEL tools for self-reflection", "Mentor-led group discussion on leadership and teamwork"],
            focus: "Building confidence and courage through shared challenge and service"
          },
          {
            name: "Immersion Expedition",
            duration: "3 Days / 2 Nights",
            description: "Our most transformative experience. Youth step fully into the wilderness to explore survival, leadership, and faith through daily challenges and devotionals.",
            includes: ["Multi-day itinerary blending hiking, fishing, and survival skills", "Morning and evening reflection circles", "Skill badges for Fishing, Survival, and Leadership", "All meals, gear, transportation, and safety support provided"],
            focus: "Developing independence, purpose, and brotherhood through full immersion in nature and mentorship"
          }
        ],
        buttonText: "Book Your Camping Experience"
      }
    },
    {
      title: "The Wayfinder Retreat",
      subtitle: "Lead by Love",
      image: "/images/main-pic.jpg",
      content: {
        intro: "This is the heart of Wayfound Outdoors—a four-day journey of discovery, restoration, and faith. The Wayfinder Retreat combines outdoor adventure, personal reflection, and intentional brotherhood to help young men find who they are and who they're called to be.",
        description: "Each day explores a theme: Identity, The Mask & Pose, Wounds, and Legacy. Participants are guided through devotionals, small group discussions, and hands-on challenges that inspire transformation.",
        duration: "4 Days / 3 Nights",
        includes: ["Guided fishing and hiking adventures", "Campfire circles for storytelling and vulnerability", "Mentorship sessions and journaling workshops", "Reflection and prayer times", "Closing ceremony and rite of passage"],
        focus: "Healing through faith, redefining strength through love, and learning that leadership begins with service",
        buttonText: "Register for Wayfinder Retreat"
      }
    },
    {
      title: "Wayfound Leadership Cohort",
      subtitle: "Becoming Men Who Lead by Love",
      image: "/images/wood-back.jpg",
      content: {
        intro: "At the heart of Wayfound Outdoors is the Wayfound Leadership Cohort — a transformational journey for young men who are ready to grow in faith, purpose, and leadership. Over the course of a year, participants are guided through intentional mentorship, outdoor challenge, and spiritual formation designed to help them become servant leaders—young men who live with courage, humility, and conviction.",
        description: "The Leadership Cohort is a discipleship-based mentorship program that blends outdoor adventure with life skill development and spiritual growth. Each season centers around a theme—Identity, Brotherhood, Resilience, and Legacy—building upon one another to shape the character and confidence of each participant.",
        duration: "12 Months",
        includes: ["Weekly Mentorship Sessions: Small-group gatherings focused on reflection, scripture, and leadership principles", "Outdoor Adventures: Monthly day trips and multi-day retreats integrating physical challenge, teamwork, and faith", "Community Service Projects: Real-world opportunities to serve others and put leadership into action", "Personal Coaching: One-on-one mentorship for goal setting, accountability, and emotional growth", "Culminating Rite of Passage: A final outdoor retreat where each participant reflects on his growth and commits to living as a leader of integrity and compassion"],
        focus: "Developing servant leaders who live with courage, humility, and conviction",
        buttonText: "Apply for Leadership Cohort"
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

                  {/* Includes and Focus for programs without tiers */}
                  {!program.content.tiers && program.content.includes && (
                    <div className="space-y-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50">
                        <div className="mb-4">
                          <h4 className="text-lg font-bold mb-3 flex items-center gap-2" style={{color: '#0A3154'}}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Includes:
                          </h4>
                          <ul className="space-y-2">
                            {program.content.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {program.content.focus && (
                          <div className="bg-blue-100/50 rounded-lg p-4">
                            <p className="text-lg font-medium italic text-blue-800">
                              <span className="font-bold">Focus:</span> {program.content.focus}
                            </p>
                          </div>
                        )}
                      </div>
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
              <a href="/contact" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Start Your Journey
              </a>
              <a href="/contact" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Bring Wayfound to Your Organization
              </a>
              <a href="/donate" className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Support the Mission
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}