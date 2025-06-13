import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Hero Section */}
      <section className="w-full h-[100dvh] flex flex-col items-center justify-center py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="text-center space-y-8 w-full max-w-5xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight">
            Discover Your Perfect <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Campus Club</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join exciting clubs, meet like-minded students, and make the most of your campus experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/clubs"
              className="btn btn-primary text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
            >
              Explore Clubs
            </Link>
            <Link
              to="/about"
              className="btn bg-white text-gray-700 text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full grid md:grid-cols-3 gap-6 px-4 py-12 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 transform hover:-translate-y-2">
          <div className="text-primary text-5xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-gray-900">Find Your Interest</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Browse through various clubs and find the ones that match your interests and passions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 transform hover:-translate-y-2">
          <div className="text-primary text-5xl mb-4">🤝</div>
          <h3 className="text-2xl font-bold text-gray-900">Join Communities</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Connect with fellow students who share your passions and goals in a vibrant community.
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center space-y-4 transform hover:-translate-y-2">
          <div className="text-primary text-5xl mb-4">📅</div>
          <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Never miss an event or activity with our easy-to-use platform and real-time updates.
          </p>
        </div>
      </section>

      {/* Popular Clubs Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Popular Clubs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative">
                <img 
                  src="/images/coding.jpg" 
                  alt="Coding Club" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Coding Club</h3>
                <p className="text-gray-600 mb-4 text-lg">Learn programming, participate in hackathons, and build amazing projects with fellow developers.</p>
                <Link to="/clubs/coding" className="text-primary hover:text-primary-dark font-semibold text-lg inline-flex items-center gap-2">
                  Learn More <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative">
                <img 
                  src="/images/photography.jpg" 
                  alt="Photography Club" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Photography Club</h3>
                <p className="text-gray-600 mb-4 text-lg">Capture beautiful moments, learn photography techniques, and share your vision with other enthusiasts.</p>
                <Link to="/clubs/photography" className="text-primary hover:text-primary-dark font-semibold text-lg inline-flex items-center gap-2">
                  Learn More <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative">
                <img 
                  src="/images/robotics.jpg" 
                  alt="Robotics Club" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Robotics Club</h3>
                <p className="text-gray-600 mb-4 text-lg">Design, build, and program robots while competing in exciting robotics competitions.</p>
                <Link to="/clubs/robotics" className="text-primary hover:text-primary-dark font-semibold text-lg inline-flex items-center gap-2">
                  Learn More <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Club?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have already discovered their ideal campus communities.
          </p>
          <Link
            to="/clubs"
            className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 