export default function Character({ name, url }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={url} />
    </div>
  );
}
