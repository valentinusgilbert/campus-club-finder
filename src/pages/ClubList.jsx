import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

function ClubList() {
  const [sortOrder, setSortOrder] = useState('a-z');
  const [viewMode, setViewMode] = useState('grid');

  const sortedClubs = [...clubs].sort((a, b) => {
    if (sortOrder === 'a-z') {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Campus Clubs</h1>
            <p className="text-lg opacity-90">Discover and join clubs that match your interests</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-white/50 bg-white/10 text-white backdrop-blur-sm px-4 py-2"
            >
              <option value="a-z" className="text-gray-900">Name A-Z</option>
              <option value="z-a" className="text-gray-900">Name Z-A</option>
            </select>
            {/* Switch Toggle for Grid/List */}
            <div className="flex rounded-full shadow-lg overflow-hidden backdrop-blur-sm bg-white/10 border border-white/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 transition-all duration-200 flex items-center justify-center relative z-10 ${
                  viewMode === 'grid'
                    ? 'bg-gray-400 text-primary shadow-sm'
                    : 'bg-transparent text-white/70'
                }`}
                aria-label="Grid View"
                style={{ borderRight: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 transition-all duration-200 flex items-center justify-center relative z-10 ${
                  viewMode === 'list'
                    ? 'bg-gray-400 text-primary shadow-sm'
                    : 'bg-transparent text-white/70'
                }`}
                aria-label="List View"
              >
                <ListBulletIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clubs Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
        }`}
      >
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className={`bg-gray-50 rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div
              className={`relative ${
                viewMode === 'list'
                  ? 'w-1/3'
                  : 'aspect-w-16 aspect-h-9'
              }`}
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {club.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{club.shortDescription}</p>
              <Link
                to={`/clubs/${club.id}`}
                className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubList; 