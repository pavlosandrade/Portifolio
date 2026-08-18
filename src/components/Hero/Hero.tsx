'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const basePath = process.env.NODE_ENV === 'production' ? '/Portifolio' : '';

export default function Hero({ data }: { data: any }) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Blur & Focus Reveal
      gsap.from(`.${styles.focusItem}`, {
        y: 28,
        opacity: 0,
        filter: 'blur(6px)',
        rotate: -1,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.1,
      });

      // Entrada suave dos botões
      gsap.from(`.${styles.actions}`, {
        y: 20,
        opacity: 0,
        filter: 'blur(4px)',
        duration: 0.55,
        ease: 'power3.out',
        delay: 0.25,
      });

      // Indicador de rolagem no rodapé
      gsap.from(`.${styles.scrollIndicator}`, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.4,
        onComplete: () => {
          gsap.to(`.${styles.scrollDot}`, {
            y: 8,
            opacity: 0.3,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
        poster={`${basePath}/images/hero/poster-hero-video.jpg`}
      >
        <source src={`${basePath}/images/hero/hero-animated-compressed.mp4`} type="video/mp4" />
      </video>
      <div className={styles.videoOverlay}></div>

      <div className={`${styles.inner} container`}>
        <p className={`${styles.role} ${styles.focusItem}`}>{data.role}</p>
        <h1 className={`${styles.title} ${styles.focusItem}`}>{data.name}</h1>
        <p className={`${styles.about} ${styles.focusItem}`}>{data.about}</p>
        
        <div className={styles.actions}>
          <a href={data.links?.linkedin} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z" />
            </svg>
            LinkedIn
          </a>
          <a href={data.links?.github} target="_blank" rel="noopener noreferrer" className={styles.buttonOutline}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
            GitHub
          </a>
          <a href={data.links?.instagram} target="_blank" rel="noopener noreferrer" className={styles.buttonOutline}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
