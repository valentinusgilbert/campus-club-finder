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
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900">Campus Clubs</h1>
        <div className="flex items-center gap-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white px-4 py-2"
          >
            <option value="a-z">Name A-Z</option>
            <option value="z-a">Name Z-A</option>
          </select>
          <div className="flex rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 transition-colors duration-200 ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 transition-colors duration-200 ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ListBulletIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-8 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
        }`}
      >
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div
              className={`${
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
            </div>
            <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {club.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{club.shortDescription}</p>
              <Link
                to={`/clubs/${club.id}`}
                className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg"
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