import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-200">
                Campus Club Finder
              </NavLink>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/clubs"
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`
                }
              >
                Clubs
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 