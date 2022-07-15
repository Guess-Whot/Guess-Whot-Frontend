import React, { useEffect, useState } from 'react';
import Character from '../components/CharCard';
import { fetchChar } from '../services/chars';

export default function Game() {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchChar();
        setChars(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);
  console.log(chars);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {error && <p>{error}</p>}
      {chars.map((char) => (
        <Character
          key={char.id}
          name={char.name}
          url={char.url}
          isFlipped={false}
        />
      ))}
    </div>
  );
}
