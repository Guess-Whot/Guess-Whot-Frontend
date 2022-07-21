export async function fetchChar() {
  try {
    const data = await fetch(`${process.env.BACKEND_URL}/api/v1/characters`);
    const resp = await data.json();
    return resp;
  } catch (error) {
    // console.log(error);
  }
}
