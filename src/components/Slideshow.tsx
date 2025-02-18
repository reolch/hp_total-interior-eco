import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  { image: '/images/6.webp', text: '' },
  { image: '/images/10.webp', text: '' },
  { image: '/images/1.webp', text: '' },
  { image: '/images/2.webp', text: '' }
];

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index}`} className={styles.slideImage} />
          <div className={styles.slideText}>{slide.text}</div>
        </div>
      ))}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow; 