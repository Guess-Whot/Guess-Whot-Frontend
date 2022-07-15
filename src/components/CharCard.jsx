export default function Character({ name, url, isFlipped }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={url} />
      <p>{isFlipped ? 'flipped down' : 'flipped up'}</p>
    </div>
  );
}
