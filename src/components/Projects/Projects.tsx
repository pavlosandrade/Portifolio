'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

// Cores das badges por categoria de tecnologia
const TECH_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  'C#': { bg: '#f0f4ff', color: '#4f46e5', border: '#e0e3ff' },
  'C# / .NET': { bg: '#f0f4ff', color: '#7c3aed', border: '#ede9fe' },
  'C# / .NET 8': { bg: '#f0f4ff', color: '#7c3aed', border: '#ede9fe' },
  'C# / .NET 10': { bg: '#f0f4ff', color: '#7c3aed', border: '#ede9fe' },
  'ASP.NET Core MVC': { bg: '#f0f4ff', color: '#6d28d9', border: '#ede9fe' },
  'MVC': { bg: '#f5f3ff', color: '#6d28d9', border: '#ede9fe' },
  'ABP Framework': { bg: '#fdf4ff', color: '#9333ea', border: '#f3e8ff' },
  'MudBlazor': { bg: '#f0f4ff', color: '#4f46e5', border: '#e0e3ff' },
  'Blazor': { bg: '#eff6ff', color: '#1d4ed8', border: '#dbeafe' },
  'Blazor Web App': { bg: '#eff6ff', color: '#1d4ed8', border: '#dbeafe' },
  'React': { bg: '#f0fdff', color: '#0891b2', border: '#cffafe' },
  'Next.js': { bg: '#f4f4f4', color: '#18181b', border: '#d4d4d8' },
  'TypeScript': { bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
  'JavaScript': { bg: '#fefce8', color: '#854d0e', border: '#fef08a' },
  'Tailwind CSS': { bg: '#f0fdfa', color: '#0f766e', border: '#99f6e4' },
  'Bootstrap': { bg: '#fdf4ff', color: '#7e22ce', border: '#f3e8ff' },
  'Figma': { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
  'Azure DevOps': { bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
  'Git': { bg: '#fff7ed', color: '#9a3412', border: '#fed7aa' },
  'UX/UI': { bg: '#fdf2f8', color: '#be185d', border: '#fce7f3' },
  'Design System': { bg: '#fdf2f8', color: '#be185d', border: '#fce7f3' },
  'Prototipação': { bg: '#fdf2f8', color: '#be185d', border: '#fce7f3' },
  'ClickUp': { bg: '#fdf4ff', color: '#9333ea', border: '#f3e8ff' },
  'SEO': { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
  'DDD': { bg: '#f8fafc', color: '#475569', border: '#e2e8f0' },
  'Component-Based': { bg: '#f8fafc', color: '#475569', border: '#e2e8f0' },
  'Clean Architecture': { bg: '#f8fafc', color: '#475569', border: '#e2e8f0' },
};

const DEFAULT_TECH_STYLE = { bg: '#f8fafc', color: '#475569', border: '#e2e8f0' };

export interface Project {
  id: string;
  title: string;
  company: string;
  type?: string;
  year?: string;
  image?: string;
  description: string;
  link?: string;
  techs?: string[];
  aspectRatio?: string;
}

export default function Projects({ data }: { data: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Distribui os projetos em 3 colunas independentes
  const col1 = data.filter((_, i) => i % 3 === 0);
  const col2 = data.filter((_, i) => i % 3 === 1);
  const col3 = data.filter((_, i) => i % 3 === 2);

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
      gsap.from(`.${styles.header}`, {
        scrollTrigger: { trigger: `.${styles.header}`, start: 'top 85%' },
        y: 42,
        opacity: 0,
        duration: 0.82,
        ease: 'power3.out',
      });

      gsap.from(`.${styles.desktopGrid} .${styles.card}`, {
        scrollTrigger: { trigger: `.${styles.desktopGrid}`, start: 'top 85%' },
        y: 52,
        opacity: 0,
        duration: 0.88,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Parallax sutil na coluna do meio
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (isDesktop) {
        gsap.to(`.${styles.col2}`, {
          y: -40,
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

  const renderCard = (project: Project) => (
    <article key={project.id} className={styles.card}>
      {/* Imagem do case */}
      <div className={styles.imageWrapper}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.cardImage}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`${styles.imagePlaceholder} ${styles[`placeholder_${project.id}`]}`} />
        )}
      </div>

      {/* Conteúdo abaixo da imagem */}
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.companyLabel}>{project.company}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        {project.techs && project.techs.length > 0 && (
          <div className={styles.techBadges}>
            {project.techs.map((tech: string) => {
              const s = TECH_COLORS[tech] ?? DEFAULT_TECH_STYLE;
              return (
                <span
                  key={tech}
                  className={styles.techBadge}
                  style={{ backgroundColor: s.bg, color: s.color, borderColor: s.border }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        )}
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

        {/* Grade 3 Colunas com offset dinâmico — Desktop */}
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
