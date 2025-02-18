import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

interface FooterProps {
  props?: Record<string, never>
}

const Footer: React.FC<FooterProps> = () => {
  const links = [
    { href: '/license', label: 'License' },
    { href: '/link', label: 'Link' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Ambition. All rights reserved.</p>
        <nav className={styles.nav}>
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
