import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { joinClub, leaveClub, isClubJoined } from '../utils/storage';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '../components/ui/dialog';

function ClubDetail() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('join'); // 'join' or 'leave'

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
      setDialogType('leave');
      setIsDialogOpen(true);
    } else {
      setDialogType('join');
      setIsDialogOpen(true);
    }
  };

  const handleConfirmJoin = () => {
    joinClub(clubId);
    setIsJoined(true);
    setIsDialogOpen(false);
    toast.success('Successfully joined the club!');
  };

  const handleConfirmLeave = () => {
    leaveClub(clubId);
    setIsJoined(false);
    setIsDialogOpen(false);
    toast.success('Successfully left the club!');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 px-4 py-8">
      {/* Hero Section */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-80 h-64 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{club.name}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{club.members} Members</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{club.location}</span>
                </div>
              </div>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={handleJoinToggle}
                  className={`cursor-pointer px-8 py-3 rounded-xl text-base font-semibold transition-all duration-200 transform hover:scale-105 w-fit ${
                    isJoined
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  disabled={isDialogOpen}
                >
                  {isJoined ? 'Leave Club' : 'Join Club'}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {dialogType === 'join'
                      ? 'Are you sure you want to join this club?'
                      : 'Are you sure you want to leave this club?'}
                  </DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex gap-2 justify-end mt-4">
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={dialogType === 'join' ? handleConfirmJoin : handleConfirmLeave}
                    className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium ${
                      dialogType === 'join'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    Confirm
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          About the Club
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">{club.description}</p>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Upcoming Events
        </h2>
        <div className="grid gap-6">
          {club.events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
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