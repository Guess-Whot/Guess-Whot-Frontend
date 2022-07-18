// const url = 'http://localhost:7890/api/v1/users';
const url = `${process.env.BACKEND_URL}/api/v1/users`;

export async function signUpUser({ email, password }) {
  const user = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  console.log(user);
  if (!user.ok) {
    throw new Error('You do not have an account.');
  }
  return user;
}

export async function signInUser({ email, password }) {
  const user = await fetch(url + '/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!user.ok) {
    throw new Error('Invalid email or password');
  }
  return user;
}

export async function getUser() {
  const user = await fetch(url + '/me', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  if (!user.ok) {
    return null;
  }
  const result = await user.json();
  return result;
}

export async function signOutUser() {
  // const resp = await client.auth.signOut();
  // return checkError(resp);

  const user = await fetch(url + '/sessions', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    // body: JSON.stringify(),
  });

  return user;

  // if (!user.ok) {
  //   throw new Error('Invalid email or password');
  // }
}
