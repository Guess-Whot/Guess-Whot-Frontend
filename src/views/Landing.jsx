import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Landing() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    const image = async () => {
      const resp = await fetch('http://localhost:7890/characters');
      const data = await resp.json();
      setImg(data);
    };
    image();
  }, []);
  return <div>{img}</div>;
}
