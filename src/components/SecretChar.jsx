import React, { useEffect, useState } from 'react';
import { fetchChar } from '../services/chars';

export default function SecretChar() {
  const [chars, setChars] = useState([]);
  const [secretImg, setSecretImg] = useState('');

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

  return (
    <div>
      <>
        <select onChange={(e) => setSecretImg(e.target.value)}>
          {chars.map((char) => (
            <option key={char.id} value={char.url}>
              {char.name}
            </option>
          ))}
        </select>
      </>
      <img src={secretImg} alt="image" />
    </div>
  );
}
