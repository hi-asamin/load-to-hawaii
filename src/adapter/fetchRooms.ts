import { rooms } from '@/data/rooms';
import { popular } from '@/data/popular';
export const fetchRooms = async (key?: string): Promise<IRoom[]> => {
  if (key === 'popular') {
    return popular;
  }
  return rooms;
};
