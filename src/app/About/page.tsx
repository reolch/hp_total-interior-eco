import React from 'react';
import styles from './page.module.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const services = [
    '住宅インテリアデザイン',
    'オフィス空間デザイン',
    '商業施設デザイン',
    'リノベーションプロジェクト'
  ];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.heading}>私たちについて</h2>
        <p className={styles.text}>
          弊社は1994年に設立され、30年以上にわたり高品質なインテリアデザインサービスを提供して参りました。
          クリエイティブなデザインと実用性を兼ね備えた空間作りで、多くのクライアントから高い評価を受けています。
          豊富な経験と専門知識を持つスタッフが、お客様一人ひとりのニーズに合わせた最適な提案を行います。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ビジョンとミッション</h2>
        <p className={styles.text}>
          私たちのビジョンは、インテリアデザインによって人々の生活を豊かにすることです。
          どんな空間も、私たちの手にかかれば、安らぎと活力を提供する場所へと変貌します。
          このビジョンを実現するために、持続可能な材料を使用し、環境に配慮したデザインを心がけています。
          お客様の満足だけでなく、地球環境への貢献も私たちのミッションの一部です。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>私たちのサービス</h2>
        <p className={styles.text}>
          弊社では、以下のような多様なインテリアデザインサービスを提供しています。
        </p>
        <ul className={styles.serviceList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>{service}</li>
          ))}
        </ul>
        <p className={styles.text}>
          各プロジェクトは、初期のコンセプトから完成に至るまで、お客様と密接に連携し、
          細部にわたるまでこだわり抜いたデザインを実現します。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>お問い合わせ</h2>
        <p className={styles.text}>
          お問い合わせやサービスのご相談については、ウェブサイトのコンタクトフォームからお気軽にご連絡ください。
          <br />
          また、直接お電話でのお問い合わせも歓迎しております。
          <br />
          私たちは、お客様からのご連絡を心よりお待ちしております。
        </p>
      </section>
    </main>
  );
};

export default About;
