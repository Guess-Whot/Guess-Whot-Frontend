import React, { useEffect, useState } from 'react';
import { fetchChar } from '../services/chars';

export default function SecretChar() {
  const [chars, setChars] = useState([]);
  const [secretImg, setSecretImg] = useState(
    'https://static.wikia.nocookie.net/enfuturama/images/1/13/Planet_express.png'
  );
  const [hide, setHide] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchChar();
        setChars(data);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <div>
      <>
        {!hide && (
          <div>
           <h1>Select your Secret Character</h1>
            <select onChange={(e) => setSecretImg(e.target.value)}>
              {chars.map((char) => (
                <option key={char.id} value={char.url}>
                  {char.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {!hide && <button onClick={() => setHide(!hide)}>set</button>}
      </>
      <img src={secretImg} alt="image" />
    </div>
  );
}