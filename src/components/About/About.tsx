'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  data: {
    badge: string;
    headline: string;
    paragraphs: string[];
    author: {
      name: string;
      role: string;
      location: string;
      photoUrl: string;
    };
    stats: {
      value: string;
      description: string;
    }[];
  };
}

export default function About({ data }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do card unificado
      gsap.from(`.${styles.profileCard}`, {
        scrollTrigger: {
          trigger: `.${styles.mainGrid}`,
          start: 'top 82%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animação do bloco de conteúdo
      gsap.from(`.${styles.contentBlock}`, {
        scrollTrigger: {
          trigger: `.${styles.mainGrid}`,
          start: 'top 82%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
      });

      // Animação suave das métricas
      gsap.from(`.${styles.metricCard}`, {
        scrollTrigger: {
          trigger: `.${styles.metricsGrid}`,
          start: 'top 88%',
        },
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" className={styles.section} ref={sectionRef}>
      <div className="container">
        {/* Bloco Principal: Card Unificado com apenas Nome e Função sobre a imagem */}
        <div className={styles.mainGrid}>
          <div className={styles.profileCard}>
            <img
              src={data.author.photoUrl}
              alt="Pavlos Kallidis"
              className={styles.bgImage}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.overlay} />

            <div className={styles.cardContent}>
              <div className={styles.bottomCol}>
                <h3 className={styles.authorName}>Pavlos Kallidis</h3>
                <span className={styles.authorSub}>Desenvolvedor Front-End</span>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.badge}>
              <span className={styles.badgeEmblem}>P</span>
              <span>Sobre mim</span>
            </div>
            <h2 className={styles.headline}>{data.headline}</h2>
            <div className={styles.paragraphs}>
              {data.paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Linha Divisória e Faixa de Métricas */}
        <div className={styles.metricsDivider} />

        <div className={styles.metricsGrid}>
          {data.stats.map((stat, idx) => (
            <div key={idx} className={styles.metricCard}>
              <span className={styles.metricValue}>{stat.value}</span>
              <p className={styles.metricDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
