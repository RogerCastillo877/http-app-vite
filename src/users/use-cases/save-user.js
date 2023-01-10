import { localhostUserToModel } from "../mappers/localhost-users.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user"

/**
 * 
 * @param { Like<User> } userLike 
 */
export const saveUser = async (userLike) => {

  const { firstName: first_name, lastName: last_name, balance, isActive } = userLike;

  const user = new User({ first_name, last_name, balance, isActive });

  // if (!user.first_name || !user.last_name) {
  //   throw 'First & last name are required'
  // }

  const userToSave = userModelToLocalhost(user);

  let userUpdated;

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }
  return localhostUserToModel(userUpdated);
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

/**
 * 
 * @param { Like<User> } User 
 */
const updateUser = async (user) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;

  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const updatedUser = await res.json();
  return updatedUser;
};