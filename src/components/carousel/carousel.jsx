import { useState } from 'react';
import './carousel.css';
import jett from '../../assets/jett.webp';
import reyna from '../../assets/reyna.webp';
import sage from '../../assets/sage.webp';

export default function Carousel() {
  const images = [jett, reyna, sage];
  const names = ['Jett', 'Reyna', 'Sage'];
  const descriptions = [
    "Originaire de Corée du Sud, Jett est une duelliste vive et arrogante. Elle maîtrise le vent pour se déplacer rapidement et esquiver les attaques. Elle a causé un grave accident dans un restaurant, ce qui l’a forcée à fuir avant de rejoindre Valorant.",
    "Mexicaine et mystérieuse, Reyna se nourrit des âmes de ses ennemis pour se renforcer. Elle est profondément motivée par sa petite sœur Lucia, gravement malade, qu’elle espère guérir coûte que coûte, même au prix de sacrifices",
    "Chinoise et maîtresse de l’énergie radiante, Sage est une sentinelle capable de guérir et de ressusciter. Elle agit comme une guide spirituelle pour l’équipe, cherchant toujours à éviter le conflit quand cela est possible."
  ];

  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 400);
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
      <div className="carousel-buttons">
        <button onClick={prev}>←</button>
      </div>

      <div className="carousel-container horizontal-layout">
        <img
          src={images[index]}
          alt={names[index]}
          className={`carousel-img ${flash ? 'flash' : ''}`}
        />
        <div className="carousel-text">
          <h2>{names[index]}</h2>
          <p>{descriptions[index]}</p>
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={next}>→</button>
      </div>
    </section>
  );
}
