import React from 'react';
import styles from './PictureFrame.module.css';
import Image from 'next/image';

interface PictureFrameProps {
  image: string;
  title: string;
  link?: string;
  orientation: 'landscape' | 'portrait';
}

const PictureFrame: React.FC<PictureFrameProps> = ({ 
  image, 
  title, 
  link, 
  orientation 
}) => {
  return (
    <div className={styles.frameContainer}>
      <div className={`${styles.frame} ${styles[orientation]}`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className={styles.painting}
        />
      </div>
      <div className={styles.title}>
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

export default PictureFrame; 