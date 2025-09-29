import Image from "next/image";

export default function Donate() {
  return (
    <div className="min-h-screen">
      {/* Full-width image BEFORE content */}
      <div className="w-full">
        <Image
          src="/images/donate.jpg"
          alt="Support our mission"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Support Our Mission</h1>

        <div className="prose prose-lg">
          <p className="text-lg mb-6">
            Your donation helps us continue our work in promoting outdoor
            activities, environmental conservation, and community building.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              How Your Donation Helps
            </h2>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Organize community outdoor events</li>
              <li>Maintain trails and outdoor facilities</li>
              <li>Support environmental conservation projects</li>
              <li>Provide educational resources</li>
              <li>Fund scholarships for outdoor programs</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">One-Time Donation</h3>
              <p className="mb-4">
                Make a single contribution to support our cause.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Donate Now
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Monthly Support</h3>
              <p className="mb-4">
                Become a monthly supporter and help us plan for the future.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Monthly Donation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
