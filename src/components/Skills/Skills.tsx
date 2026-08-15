'use client';

import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Mapeamento: chave do data.ts → slug do Simple Icons CDN
 * https://cdn.simpleicons.org/{slug} retorna o SVG oficial da marca
 */
const cdnSlugs: Record<string, string> = {
  // Linguagens
  csharp:     'csharp',
  typescript: 'typescript',
  javascript: 'javascript',
  html5:      'html5',
  css:        'css3',
  // Frameworks & Libs
  react:       'react',
  nextdotjs:   'nextdotjs',
  blazor:      'blazor',
  dotnet:      'dotnet',
  abp:         'abp',
  mudblazor:   'mudblazor',
  tailwindcss: 'tailwindcss',
  bootstrap:   'bootstrap',
  // Ferramentas & DevOps
  figma:       'figma',
  azuredevops: 'azuredevops',
  git:         'git',
  github:      'github',
  clickup:     'clickup',
};

/**
 * Para conceitos abstratos (sem logo de marca), usamos ícones Lucide minimalistas.
 */
const abstractIcons: Record<string, ReactNode> = {
  architecture: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
      stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  modular: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
      stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  mvc: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
      stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
      stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

export default function Skills({ data }: { data: any[] }) {
  const sectionRef = useRef<HTMLElement>(null);

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
                {group.items.map((skill: any) => {
                  const slug = cdnSlugs[skill.icon];
                  const abstractIcon = abstractIcons[skill.icon];

                  return (
                    <div key={skill.name} className={styles.iconItem} title={skill.name}>
                      <div className={styles.iconWrapper}>
                        {slug ? (
                          /* Logo oficial via Simple Icons CDN — pixel-perfect e sem bundle overhead */
                          <img
                            src={`https://cdn.simpleicons.org/${slug}`}
                            width="28"
                            height="28"
                            alt={skill.name}
                            loading="eager"
                          />
                        ) : abstractIcon ? (
                          abstractIcon
                        ) : (
                          <div className={styles.iconPlaceholder} />
                        )}
                      </div>
                      <span className={styles.name}>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
