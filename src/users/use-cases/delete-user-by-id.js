/**
 * 
 * @param { String|Number } User 
 */
export const deleteUserById = async (id) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

  const res = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const deleteResult = await res.json();
  return true;
};