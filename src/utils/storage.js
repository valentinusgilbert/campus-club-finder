const STORAGE_KEY = 'campus_club_memberships';

export const getJoinedClubs = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const joinClub = (clubId) => {
  const joinedClubs = getJoinedClubs();
  if (!joinedClubs.includes(clubId)) {
    joinedClubs.push(clubId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedClubs));
  }
};

export const leaveClub = (clubId) => {
  const joinedClubs = getJoinedClubs();
  const updatedClubs = joinedClubs.filter(id => id !== clubId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedClubs));
};

export const isClubJoined = (clubId) => {
  const joinedClubs = getJoinedClubs();
  return joinedClubs.includes(clubId);
}; 