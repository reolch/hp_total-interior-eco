import React from 'react';
import styles from './PictureFrame.module.css';

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
        <img src={image} alt={title} className={styles.painting} />
      </div>
      <div className={styles.title}>
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

export default PictureFrame; 