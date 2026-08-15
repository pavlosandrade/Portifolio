'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ data }: { data: any[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Divide os projetos em 3 colunas independentes para desktop/tablet
  const col1 = data.filter((_, i) => i % 3 === 0);
  const col2 = data.filter((_, i) => i % 3 === 1);
  const col3 = data.filter((_, i) => i % 3 === 2);

  // Monitora o scroll do carrossel mobile para atualizar o índice ativo
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300;
    const index = Math.round(scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(Math.max(index, 0), data.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300;
    carouselRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cabeçalho da seção
      gsap.from(`.${styles.header}`, {
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: 'top 85%',
        },
        y: 42,
        opacity: 0,
        duration: 0.82,
        ease: 'power3.out',
      });

      // Entrada suave escalonada dos cards no desktop
      gsap.from(`.${styles.desktopGrid} .${styles.card}`, {
        scrollTrigger: {
          trigger: `.${styles.desktopGrid}`,
          start: 'top 85%',
        },
        y: 48,
        opacity: 0,
        duration: 0.84,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Parallax sutil na coluna do meio no desktop
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (isDesktop) {
        gsap.to(`.${styles.col2}`, {
          y: -32,
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.desktopGrid}`,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (project: any) => (
    <article key={project.id} className={styles.card}>
      {/* Imagem Real ou Fundo Sólido Ocupando 100% */}
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={project.title}
            className={styles.bgRealImage}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.imageOverlay} />
        </>
      ) : (
        <div className={`${styles.bgImage} ${styles[`placeholder_${project.id}`]}`} />
      )}

      {/* Conteúdo sobreposto */}
      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.companyBadge}>{project.company}</span>
        </div>

        <div className={styles.bottomCol}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section id="projetos" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
            </svg>
            <span>Meus cases</span>
          </span>
          <h2 className={styles.sectionTitle}>Cases & Projetos em Destaque</h2>
        </div>

        {/* Grade 3 Colunas para Desktop e Tablet */}
        <div className={styles.desktopGrid}>
          <div className={`${styles.column} ${styles.col1}`}>
            {col1.map(renderCard)}
          </div>
          <div className={`${styles.column} ${styles.col2}`}>
            {col2.map(renderCard)}
          </div>
          <div className={`${styles.column} ${styles.col3}`}>
            {col3.map(renderCard)}
          </div>
        </div>

        {/* Carrossel Horizontal para Mobile */}
        <div className={styles.mobileCarouselWrapper}>
          <div className={styles.mobileHint}>
            <span>Deslize para o lado ({activeIndex + 1}/{data.length})</span>
          </div>

          <div
            className={styles.mobileCarousel}
            ref={carouselRef}
            onScroll={handleCarouselScroll}
          >
            {data.map(renderCard)}
          </div>

          {/* Indicadores de Paginação do Carrossel */}
          <div className={styles.carouselDots}>
            {data.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={styles.dotButton}
                aria-label={`Ir para o case ${idx + 1}`}
              >
                <span className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
