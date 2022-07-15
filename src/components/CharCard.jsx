import { useState } from 'react';

export default function Character({ name, url }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <h2>{name}</h2>
      <img src={url} />
      <p>{flipped ? 'flipped down' : 'flipped up'}</p>
    </div>
  );
}
