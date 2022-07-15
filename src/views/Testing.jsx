import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Landing() {
  const [img, setImg] = useState([]);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const image = async () => {
      const resp = await fetch('http://localhost:7890/api/v1/characters');
      console.log(resp);
      setFlipped(!flipped);
      const data = await resp.json();
      console.log(data);
      setImg(data);
    };
    image();
  }, []);
  return (
    <>
      {' '}
      <h1>TESTETSETEST</h1>
      <div>
        {img.map((data) => (
          <div key={data.id}>
            {data.name}
            <img style={{ width: '200px' }} src={`${data.image}`} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}
