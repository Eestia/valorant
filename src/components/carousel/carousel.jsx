import { useState } from 'react';
import './carousel.css';
import jett from '../../assets/jett.webp';
import reyna from '../../assets/reyna.webp';
import sage from '../../assets/sage.webp';

export default function Carousel() {
  const images = [jett, reyna, sage];
  const names = ['Jett', 'Reyna', 'Sage'];
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 400); // durée de l'animation
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    triggerFlash();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    triggerFlash();
  };

  return (
    <section id='carou'>
      <div>
        <div className="carousel-buttons">
          <button onClick={prev}>←</button>
        </div>
      </div>

      <section className="carousel-container">
        <h2>{names[index]}</h2>
        <img
          src={images[index]}
          alt={names[index]}
          className={`carousel-img ${flash ? 'flash' : ''}`}
        />
      </section>

      <div>
        <div className="carousel-buttons">
          <button onClick={next}>→</button>
        </div>
      </div>
    </section>
  );
}
