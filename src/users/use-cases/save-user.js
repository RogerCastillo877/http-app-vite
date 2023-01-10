import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user"

/**
 * 
 * @param { Like<User> } userLike 
 */
export const saveUser = async (userLike) => {

  const { firstName: first_name, lastName: last_name, balance, isActive } = userLike;

  const user = new User({ first_name, last_name, balance, isActive });

  if (!user.first_name || !user.last_name) {
    throw 'First & last name are required'
  }

  const userToSave = userModelToLocalhost(user);

  if (user.id) {
    throw 'Not implemented';
    return;
  }

  const updatedUser = await createUser(userToSave);
  return updatedUser;
}

/**
 * 
 * @param { Like<User> } User 
 */
const createUser = async (user) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users`;

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await res.json();
  return newUser;
};