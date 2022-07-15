export async function fetchChar() {
  const data = await fetch(
    `${process.env.BACKEND_URL}/api/v1/characters/${id}`
  );
  const resp = await data.json();
  return resp;
}
