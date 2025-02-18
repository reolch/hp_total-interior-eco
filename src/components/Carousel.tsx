import React, { useEffect, useRef } from 'react';
import styles from './Carousel.module.css';

interface Company {
  logo: string;
  name: string;
}

interface CarouselProps {
  companies: Company[];
}

const Carousel: React.FC<CarouselProps> = ({ companies }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cloneFirstSet = () => {
      const items = track.children;
      for (let i = 0; i < companies.length; i++) {
        track.appendChild(items[i].cloneNode(true));
      }
    };

    cloneFirstSet();

    let scrollWidth = track.scrollWidth / 2;
    let currentScroll = 0;

    const animate = () => {
      currentScroll += 1;
      if (currentScroll >= scrollWidth) {
        currentScroll = 0;
      }
      track.style.transform = `translateX(${-currentScroll}px)`;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [companies]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack} ref={trackRef}>
        {companies.map((company, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={company.logo} alt={company.name} className={styles.companyLogo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 