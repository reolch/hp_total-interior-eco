'use client'

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

import SlideShow from "../components/Slideshow";
import PictureFrame from "../components/PictureFrame";
import Link from "next/link"; 

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <SlideShow />
      <div className={styles.container}>
        <section className={styles.aboutSection}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.text}>
            トータルインテリアエコは、住宅、オフィス、商業施設の内装工事を専門とする内装業者です。創造力、職人技、そして献身を兼ね備え、あらゆるプロジェクトに取り組んでいます。
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.text}>
            私たちの使命は、美しく機能的で個性的な空間を創り出し、そこに住む人々の生活と体験を豊かにすることです。快適な住まい、活気あるオフィス、賑やかな商業施設など、どんな空間にも優れた品質と顧客満足をお届けします。
          </p>
        </section>

        <section className={styles.whyUsSection}>
          <h2 className={styles.heading}>Why Choose Us?</h2>
          <p className={styles.text}>
            私たちは、業界での豊富な経験と高い技術力を持っています。
            以下の国家資格を保持しており、安心してお任せいただけます。
          </p>

          <p className={styles.text}>
            ・国家資格　一級　表装　技能士<br/>
            ・国家資格　一級　内装仕上げ施工　技能士<br/>
            <br/>
            最高品質の素材を使用し、細部にまでこだわった施工を行います。お客様のニーズを最優先に考え、ご要望に応じた理想の空間を創り上げます。
          </p>
        </section>

        <section className={styles.portfolioSection}>
          <h2 className={styles.heading}>Works</h2>
          <p className={styles.text}>
            以下の店舗の写真は、施工例になります。
          </p>
          <div className={styles.portfolioPictureframe}>
            <PictureFrame image="/images/2.webp" title="パーソナルジム" link="https://trigger2023.com" orientation="landscape" />
            <PictureFrame image="/images/6.webp" title="お菓子屋さん" link="https://reolch.github.io/portfolio_lp_hand_in_hand/" orientation="landscape" />
            <PictureFrame image="/images/10.webp" title="プログラミングスクール" link="#" orientation="landscape" />
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.text}>
            お問い合わせは、以下のフォームから送信してください。
          </p>
          <Link href="/contact" className={styles.contactButton}>Contact Us</Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
