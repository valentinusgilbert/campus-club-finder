import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { joinClub, leaveClub, isClubJoined } from '../utils/storage';

function ClubDetail() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  const club = clubs.find((c) => c.id === clubId);

  useEffect(() => {
    if (!club) {
      navigate('/404');
      return;
    }
    setIsJoined(isClubJoined(clubId));
  }, [clubId, club, navigate]);

  if (!club) {
    return null;
  }

  const handleJoinToggle = () => {
    if (isJoined) {
      leaveClub(clubId);
    } else {
      joinClub(clubId);
    }
    setIsJoined(!isJoined);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-end">
              <h1 className="text-4xl font-bold text-white">{club.name}</h1>
              <button
                onClick={handleJoinToggle}
                className={`px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  isJoined
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {isJoined ? 'Leave Club' : 'Join Club'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the Club</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{club.description}</p>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Upcoming Events
        </h2>
        <div className="grid gap-6">
          {club.events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                  <p className="text-gray-600">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                  Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClubDetail; 