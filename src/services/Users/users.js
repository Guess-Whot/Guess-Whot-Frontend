const url = 'http://localhost:7890/api/v1/users';

export async function signUpUser({ email, password }) {
  const user = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
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
