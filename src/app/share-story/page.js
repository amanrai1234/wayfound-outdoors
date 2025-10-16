'use client';

import { useState } from 'react';

export default function ShareStory() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storyType: 'story',
    title: '',
    content: '',
    rating: '',
    photos: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photos: e.target.files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('storyType', formData.storyType);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('rating', formData.rating);
      
      if (formData.photos) {
        for (let i = 0; i < formData.photos.length; i++) {
          formDataToSend.append('photos', formData.photos[i]);
        }
      }

      const response = await fetch('/api/share-story', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          storyType: 'story',
          title: '',
          content: '',
          rating: '',
          photos: null
        });
      } else {
        alert('There was an error submitting your story. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting story:', error);
      alert('There was an error submitting your story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-12 shadow-lg max-w-2xl mx-auto" style={{color: '#0A3154'}}>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-6" style={{color: '#0A3154'}}>
                Thank You!
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Your story has been submitted successfully. We're grateful for you sharing your experience with Wayfound Outdoors.
              </p>
              <p className="text-lg mb-8">
                We'll review your submission and may feature it on our website or social media. Keep an eye out for updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                  Return Home
                </a>
                <a href="/share-story" className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20" style={{backgroundColor: '#023E8A'}}>
                  Share Another Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-black/20">
            <span className="text-lg font-semibold" style={{color: '#0A3154'}}>Share Your Experience</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-6" style={{color: '#0A3154'}}>
            Share Your Story
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed" style={{color: '#0A3154'}}>
            We'd love to hear about your adventures with Wayfound Outdoors. Share your story, photos, and experiences to inspire others.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 shadow-lg" style={{color: '#0A3154'}}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Story Type */}
            <div>
              <label htmlFor="storyType" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                What would you like to share? *
              </label>
                <select
                  id="storyType"
                  name="storyType"
                  value={formData.storyType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                >
                <option value="story">Adventure Story</option>
                <option value="review">Program Review</option>
                <option value="testimonial">Personal Testimonial</option>
                <option value="photo">Photo Gallery</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                placeholder="Give your story a compelling title"
              />
            </div>

            {/* Rating (for reviews) */}
            {formData.storyType === 'review' && (
              <div>
                <label htmlFor="rating" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                  Overall Rating *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                >
                  <option value="">Select a rating</option>
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>
            )}

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                Your Story *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={8}
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-vertical"
                placeholder="Tell us about your experience... What program did you participate in? What was the highlight? How did it impact you? What would you tell others about Wayfound Outdoors?"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label htmlFor="photos" className="block text-lg font-semibold mb-3" style={{color: '#0A3154'}}>
                Photos (Optional)
              </label>
              <input
                type="file"
                id="photos"
                name="photos"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm mt-2" style={{color: '#0A3154'}}>
                Upload photos from your adventure (JPG, PNG, GIF - max 10MB each)
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_20px_40px_rgba(2,62,138,0.4)] hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{backgroundColor: '#023E8A'}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <span>Share Your Story</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Guidelines Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg" style={{color: '#0A3154'}}>
          <h2 className="text-2xl font-bold mb-6" style={{color: '#0A3154'}}>Submission Guidelines</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>• <strong>Be Authentic:</strong> Share your genuine experience and feelings about your time with Wayfound Outdoors.</p>
            <p>• <strong>Be Respectful:</strong> Keep your story positive and constructive, focusing on your personal journey.</p>
            <p>• <strong>Include Details:</strong> Tell us about specific moments, activities, or conversations that made an impact.</p>
            <p>• <strong>Photo Quality:</strong> Upload clear, high-quality photos that showcase your adventure.</p>
            <p>• <strong>Privacy:</strong> We may feature your story on our website or social media. Let us know if you prefer to remain anonymous.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
