'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';

// React Icons
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiReact, SiNextdotjs,
  SiBlazor, SiDotnet, SiTailwindcss, SiBootstrap, SiFigma, SiGit,
  SiGithub, SiClickup
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzureDevops } from 'react-icons/vsc';

// Lucide Icons
import { Layers, LayoutGrid, FileCode2, LineChart, Hexagon, Component } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const basePath = process.env.NODE_ENV === 'production' ? '/Portifolio' : '';

// Mapeamento de ícones para as chaves do data.ts
const iconMap: Record<string, { icon?: React.ElementType, color?: string, imgSrc?: string }> = {
  // Linguagens
  csharp: { imgSrc: `${basePath}/images/icons/c%23-ico.svg` },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
  html5: { icon: SiHtml5, color: '#E34F26' },
  css: { icon: SiCss, color: '#1572B6' },

  // Frameworks & Libs
  react: { icon: SiReact, color: '#61DAFB' },
  nextdotjs: { icon: SiNextdotjs, color: '#000000' },
  blazor: { icon: SiBlazor, color: '#512BD4' },
  dotnet: { icon: SiDotnet, color: '#512BD4' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  bootstrap: { icon: SiBootstrap, color: '#7952B3' },

  // Ícones difíceis de encontrar em pacotes oficiais - usando fallbacks bonitos e inquebráveis
  abp: { imgSrc: `${basePath}/images/icons/abp-ico.svg` },
  mudblazor: { imgSrc: `${basePath}/images/icons/mudblazor-ico.svg` },

  // Ferramentas & DevOps
  figma: { imgSrc: `${basePath}/images/icons/figma-ico.svg` },
  azuredevops: { icon: VscAzureDevops, color: '#0078D7' },
  git: { icon: SiGit, color: '#F05032' },
  github: { icon: SiGithub, color: '#181717' },
  clickup: { imgSrc: `${basePath}/images/icons/clickup-ico.svg` },

  // Inteligência Artificial (Ícones Customizados)
  chatgpt: { imgSrc: `${basePath}/images/icons/chatgpt-ico.svg` },
  gemini: { imgSrc: `${basePath}/images/icons/gemini-ico.svg` },
  claude: { imgSrc: `${basePath}/images/icons/claude-ico.svg` },

  // Arquitetura & Boas Práticas
  architecture: { icon: Hexagon, color: '#0284C7' },
  modular: { icon: LayoutGrid, color: '#8B5CF6' },
  mvc: { icon: FileCode2, color: '#10B981' },
  seo: { icon: LineChart, color: '#F59E0B' },
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
                  const mapped = iconMap[skill.icon];

                  return (
                    <div key={skill.name} className={styles.iconItem} title={skill.name}>
                      <div className={styles.iconWrapper}>
                        {mapped?.icon ? (
                          <mapped.icon
                            size={36}
                            color={mapped.color}
                            style={{ flexShrink: 0 }}
                          />
                        ) : mapped?.imgSrc ? (
                          <img
                            src={mapped.imgSrc}
                            alt={skill.name}
                            width={36}
                            height={36}
                            style={{ flexShrink: 0, objectFit: 'contain' }}
                          />
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
