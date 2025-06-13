function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          About <span className="text-primary">Campus Club Finder</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your one-stop platform for discovering and joining campus clubs that match your interests.
        </p>
      </section>

      {/* What is Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What is Campus Club Finder?</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="leading-relaxed">
            Campus Club Finder is a web application designed to help students discover and join campus clubs
            that match their interests. Our platform makes it easy to browse through various clubs,
            learn about their activities, and stay updated with upcoming events.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Discovery</h3>
              <p className="text-gray-600">Browse through a curated list of campus clubs</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Information</h3>
              <p className="text-gray-600">View comprehensive details about each club</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Tracking</h3>
              <p className="text-gray-600">Stay updated with upcoming events and activities</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Joining</h3>
              <p className="text-gray-600">Join clubs with just a single click</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">React</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">React Router v7</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">Heroicons</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Development</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">Vite</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">ESLint</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">Git</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-600">GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 