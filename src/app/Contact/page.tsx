"use client";

import React from 'react';
import styles from './page.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contact Us</h2>
      <form 
        className={styles.contactForm} 
        action="https://ssgform.com/s/4UAKkh6GcwCC" 
        method="POST"
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">お名前</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">メッセージ</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            required 
            className={styles.textarea}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className={styles.submitButton}
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Contact;
