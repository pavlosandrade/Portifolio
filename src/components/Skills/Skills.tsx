'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Skills({ data }: { data: any[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.header}`, {
        scrollTrigger: { trigger: `.${styles.header}`, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.76, ease: 'power3.out',
      });
      gsap.from(`.${styles.group}`, {
        scrollTrigger: { trigger: `.${styles.groups}`, start: 'top 82%' },
        y: 38, opacity: 0, duration: 0.74, stagger: 0.12, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="habilidades" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>Minhas skills</span>
          </span>
          <h2 className={styles.sectionTitle}>Tecnologias & Ferramentas</h2>
          <p className={styles.statement}>
            Arquiteturas front-end escaláveis, ecossistema .NET corporativo e
            desenvolvimento moderno focado em usabilidade e performance.
          </p>
        </div>

        <div className={styles.groups}>
          {data.map((group) => (
            <div key={group.category} className={styles.group}>
              <p className={styles.categoryLabel}>{group.category}</p>
              <div className={styles.iconsRow}>
                {group.items.map((skill: any) => (
                  <div key={skill.name} className={styles.iconItem} title={skill.name}>
                    <div className={styles.iconWrapper}>
                      <img 
                        src={`${basePath}/icons/${skill.icon}.svg`} 
                        alt={`Ícone do ${skill.name}`} 
                        className={styles.iconImage}
                        width={36}
                        height={36}
                        loading="lazy"
                      />
                    </div>
                    <span className={styles.name}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
