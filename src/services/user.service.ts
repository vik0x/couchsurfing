import { User } from '@/types/User';
import users from './users.mock.json';

export const getUsers = async () => {
  return users;
};

const getFriends = async (userId: number) : Promise<User> => {
  return users.find(({id}) => userId === id) as User;
}

export const getUserById = async (userId: number): Promise<User | undefined> => {
  const user = users.find(({id}) => id === userId);
  if (user) {
    const friends = (await Promise.all(user.friends.map((friendId) => getFriends(friendId))));
    return {...user, friends}
  }
  return user;
}
