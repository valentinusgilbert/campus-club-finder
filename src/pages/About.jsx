function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 space-y-8 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 relative z-10">
          About <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Campus Club Finder</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed relative z-10">
          Your one-stop platform for discovering and joining campus clubs that match your interests.
        </p>
      </section>

      {/* What is Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl">
          🎓
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Campus Club Finder?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Campus Club Finder is a web application designed to help students discover and join campus clubs that match their interests. Our platform makes it easy to browse through various clubs, learn about their activities, and stay updated with upcoming events.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">🔍</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Discovery</h3>
              <p className="text-gray-600">Browse through a curated list of campus clubs</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">📋</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Information</h3>
              <p className="text-gray-600">View comprehensive details about each club</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">📅</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Tracking</h3>
              <p className="text-gray-600">Stay updated with upcoming events and activities</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">🤝</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Joining</h3>
              <p className="text-gray-600">Join clubs with just a single click</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">React</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">React Router v7</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">Tailwind CSS</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">Heroicons</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tooling & Utilities</h3>
            <ul className="space-y-3">
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">Vite</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">ESLint</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="w-2 h-2 bg-primary rounded-full mb-1"></span>
                <span className="text-gray-600">LocalStorage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 