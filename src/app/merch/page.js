export default function Merch() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Outdoor Merchandise - Coming Soon!!</h1>
        <p className="text-lg mb-8 text-gray-600">
          Show your support for our outdoor community with our exclusive merchandise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Outdoor Adventure T-Shirt</h3>
              <p className="text-gray-600 mb-4">Comfortable cotton tee perfect for your next adventure.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$24.99</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Link
                </button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Trail Hiking Hat</h3>
              <p className="text-gray-600 mb-4">Protect yourself from the elements with our premium hiking hat.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$19.99</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Link
                </button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Water Bottle</h3>
              <p className="text-gray-600 mb-4">Stay hydrated on your adventures with our eco-friendly bottle.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$14.99</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
