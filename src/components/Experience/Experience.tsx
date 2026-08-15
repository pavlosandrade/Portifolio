'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ data }: { data: any[] }) {
  const sectionRef = useRef<HTMLElement>(null);

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
        duration: 0.78,
        ease: 'power3.out',
      });

      // Entrada das empresas
      gsap.from(`.${styles.company}`, {
        scrollTrigger: {
          trigger: `.${styles.companies}`,
          start: 'top 82%',
        },
        y: 44,
        opacity: 0,
        duration: 0.84,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // Linha do tempo dinâmica preenchida pelo scroll
      const lines = gsap.utils.toArray<HTMLElement>(`.${styles.lineProgress}`);
      lines.forEach((line) => {
        gsap.to(line, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: line.closest(`.${styles.roleItem}`),
            start: 'top 75%',
            end: 'bottom 65%',
            scrub: 0.6,
          },
        });
      });

      // Iluminação e pulso dos marcadores (dots) ao rolar
      const dots = gsap.utils.toArray<HTMLElement>(`.${styles.dot}`);
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0.7, opacity: 0.5 },
          {
            scale: 1.15,
            opacity: 1,
            ease: 'power3.out',
            duration: 0.7,
            scrollTrigger: {
              trigger: dot,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experiencia" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>Minha trajetória</span>
          </span>
          <h2 className={styles.sectionTitle}>Histórico Profissional</h2>
        </div>

        <div className={styles.companies}>
          {data.map((job, i) => (
            <div key={i} className={styles.company}>
              <div className={styles.companyHeader}>
                <h3 className={styles.companyName}>{job.company}</h3>
                <p className={styles.companyMeta}>{job.totalPeriod} · {job.location}</p>
              </div>

              <div className={styles.roles}>
                {job.roles.map((role: any, j: number) => (
                  <div key={j} className={styles.roleItem}>
                    <div className={styles.timelineTrack}>
                      <div className={styles.dot} />
                      {j < job.roles.length - 1 && (
                        <div className={styles.lineTrack}>
                          <div className={styles.lineProgress} />
                        </div>
                      )}
                    </div>
                    <div className={styles.roleContent}>
                      <h4 className={styles.roleTitle}>{role.title}</h4>
                      <p className={styles.roleMeta}>{role.type} · {role.period}</p>
                      <ul className={styles.descriptionList}>
                        {role.description.map((desc: string, k: number) => (
                          <li key={k}>{desc}</li>
                        ))}
                      </ul>
                      <div className={styles.skills}>
                        {role.skills.map((skill: string) => (
                          <span key={skill} className={styles.skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
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
