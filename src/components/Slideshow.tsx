import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';
import Image from 'next/image';

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  { image: '/hp_total-interior-eco/images/6.webp', text: '' },
  { image: '/hp_total-interior-eco/images/10.webp', text: '' },
  { image: '/hp_total-interior-eco/images/1.webp', text: '' },
  { image: '/hp_total-interior-eco/images/2.webp', text: '' }
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
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            width={500}
            height={300}
            className={styles.slideImage}
          />
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