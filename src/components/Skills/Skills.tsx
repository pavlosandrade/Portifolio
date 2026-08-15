'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';
import { staticIcons } from './icons';

// Cores Oficiais das Tecnologias & Ferramentas
const brandColors: Record<string, string> = {
  // Linguagens
  csharp: '#239120',      // C# Verde Oficial / .NET
  typescript: '#3178C6',  // TypeScript Azul Oficial
  javascript: '#E5A800',  // JavaScript Amarelo / Dourado para alto contraste
  html5: '#E34F26',       // HTML5 Laranja Oficial
  css: '#1572B6',         // CSS3 Azul Oficial

  // Frameworks & Bibliotecas
  react: '#00A8CC',       // React Azul Ciano Vibrante
  nextdotjs: '#111111',   // Next.js Preto
  blazor: '#512BD4',      // Blazor Roxo Oficial
  dotnet: '#512BD4',      // .NET Roxo Oficial
  abp: '#0078D7',         // ABP Framework Azul Oficial
  mudblazor: '#594AE2',   // MudBlazor Roxo/Azul
  tailwindcss: '#06B6D4', // Tailwind Ciano Oficial
  bootstrap: '#7952B3',   // Bootstrap Roxo Oficial

  // Arquitetura & Práticas
  architecture: '#0284C7', // Sky Blue
  mvc: '#10B981',          // Emerald Green
  modular: '#8B5CF6',      // Violet
  seo: '#F59E0B',          // Amber Gold

  // Ferramentas & DevOps
  figma: '#F24E1E',        // Figma Vermelho/Laranja Oficial
  azuredevops: '#0078D7',  // Azure DevOps Azul Oficial
  git: '#F05032',          // Git Vermelho Oficial
  github: '#24292e',       // GitHub Dark Slate
  clickup: '#7B68EE',      // ClickUp Roxo Oficial
};

// Ícones Vetoriais Customizados
const customIcons: Record<string, (color: string) => React.ReactNode> = {
  azuredevops: (color) => (
    <svg className={styles.icon} viewBox="0 0 18 18" fill={color}>
      <path d="M17 4v9.74l-4 3.28-6.2-2.26V17L3.29 12.41l10.23.8V4.44Zm-3.41.49L7.85 1V3.29L2.58 4.84 1 6.87v4.61l2.26 1V6.57Z" />
    </svg>
  ),
  abp: (color) => (
    <svg className={styles.icon} viewBox="0 0 256 256" fill={color}>
      <path d="M127.927 148.156C139.717 148.156 149.274 138.597 149.274 126.806C149.274 115.015 139.717 105.456 127.927 105.456C116.138 105.456 106.581 115.015 106.581 126.806C106.581 138.597 116.138 148.156 127.927 148.156Z" />
      <path d="M127.938 5.62635e-05C108.545 -0.0181561 89.4025 4.38531 71.9658 12.8758V40.3727C87.5013 30.4533 105.392 24.8386 123.809 24.1028C142.225 23.3671 160.507 27.5366 176.784 36.185C193.061 44.8335 206.749 57.6505 216.449 73.3254C226.149 89.0004 231.513 106.971 231.992 125.399V202.741C245.722 183.602 253.908 161.046 255.651 137.554C257.394 114.062 252.625 90.5451 241.87 69.5885C231.114 48.632 214.788 31.0481 194.688 18.7708C174.587 6.49357 151.49 -0.00147072 127.938 5.62635e-05Z" />
      <path d="M127.933 232.124C101.201 232.123 75.4947 221.828 56.1489 203.377C36.803 184.925 25.3024 159.732 24.0332 133.025H23.9124V53.4105C5.20565 79.5586 -2.98273 111.788 0.973898 143.696C4.93053 175.604 20.7426 204.856 45.2692 225.641C69.7958 246.427 101.242 257.224 133.362 255.889C165.481 254.554 195.923 241.185 218.641 218.436V179.029C209.597 195.138 196.427 208.547 180.485 217.878C164.544 227.21 146.404 232.127 127.933 232.124Z" />
      <path d="M127.932 160.857C120.198 160.864 112.685 158.274 106.597 153.502V177.981C117.695 182.546 129.967 183.423 141.602 180.483C153.236 177.542 163.618 170.939 171.215 161.648C178.813 152.357 183.223 140.87 183.797 128.882C184.37 116.893 181.075 105.037 174.399 95.0634C167.723 85.0897 158.019 77.5262 146.718 73.4885C135.417 69.4508 123.117 69.1527 111.634 72.6382C100.151 76.1238 90.0913 83.2083 82.94 92.8469C75.7887 102.485 71.924 114.168 71.916 126.17V198.145C78.424 203.27 85.6023 207.48 93.2513 210.658V126.137C93.2513 119.277 95.2853 112.571 99.0961 106.866C102.907 101.162 108.323 96.7162 114.66 94.0909C120.997 91.4655 127.971 90.7786 134.698 92.117C141.426 93.4554 147.605 96.759 152.455 101.61C157.305 106.461 160.608 112.642 161.947 119.37C163.285 126.099 162.598 133.073 159.973 139.411C157.348 145.749 152.903 151.167 147.2 154.978C141.497 158.789 134.791 160.824 127.932 160.824V160.857Z" />
      <path d="M58.5843 185.255V126.803C58.591 112.166 63.2286 97.907 71.8328 86.0671C80.4371 74.2273 92.5666 65.4143 106.485 60.8902C120.402 56.3662 135.395 56.3631 149.314 60.8814C163.234 65.3997 175.367 74.2077 183.976 86.0441C192.586 97.8804 197.229 112.138 197.242 126.775C197.255 141.412 192.636 155.677 184.048 167.529C175.459 179.38 163.341 188.209 149.43 192.752C135.518 197.294 120.525 197.317 106.6 192.818V214.991C122.303 218.794 138.736 218.333 154.201 213.655C169.667 208.978 183.602 200.254 194.567 188.386C205.532 176.517 213.128 161.935 216.571 146.147C220.014 130.358 219.178 113.937 214.149 98.5799C209.121 83.223 200.082 69.488 187.969 58.7951C175.855 48.1022 161.106 40.8394 145.245 37.7576C129.385 34.6758 112.99 35.8868 97.7542 41.2654C82.5187 46.6441 68.996 55.9952 58.5843 68.3519V38.7146V20.4053C50.8609 25.3794 43.6935 31.168 37.2051 37.6718V129.526C37.8106 149.988 45.3489 169.639 58.5843 185.255Z" />
    </svg>
  ),
  mudblazor: (color) => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill={color}>
      <path d="M7.38 4.24c-.84.11-2.17-.89-2.3-1.86s1-1.53 1.83-1.65 1.82.19 1.94 1.16-.64 2.23-1.48 2.35Z" />
      <path d="M22.61 8.61c-.47-1.24-1.13-2.41-1.96-3.45-.56-.7-1.2-1.34-1.91-1.88-.82-.63-1.73-1.2-2.73-1.44-4.54-1.12-4.18 2.13-6.51 3.12-2.33.99-5.1.07-6.59 2.11-.62.85-1.24 1.76-1.63 2.75-.36.91-.5 1.91-.43 2.88.13 1.9 1.04 3.96 2.62 5.08.56.39 1.48.89 2.12.42.31-.23.5-.6.64-.95.41-1.02.51-2.17.58-3.25s-.14-4.6.07-5.22c.16-.48.56-.83 1.05-.96.6-.17 1.37.02 1.81.47.19.19.35.43.47.7.12.27.26.61.41 1.03l.9 2.52c.08.21.16.43.25.65.09.22.18.43.28.61.1.18.21.33.32.45.11.12.23.17.34.17.1 0 .19-.05.29-.15.1-.1.19-.24.28-.41.09-.17.18-.36.28-.59s.18-.46.27-.71l.97-2.62c.14-.37.26-.69.38-.96.12-.27.26-.49.42-.67.16-.17.35-.3.57-.39.22-.09.51-.13.86-.13.27 0 .5.03.7.08s.36.16.49.31c.23.29.28.74.33 1.1.11.76.03 1.55.03 2.31v4.39c0 .38.02.76 0 1.13-.02.32-.01.65-.17.95-.14.27-.41.48-.71.52-.39.05-.7-.25-.85-.59-.07-.16-.11-.32-.14-.48-.02-.16-.04-.29-.04-.38 0 0 .16-4.3-.54-4.21-.14.02-.47.8-.56.99-.49.97-1.73 3.71-1.97 4.06-.19.28-.46.58-.81.64-.24.05-.48-.04-.67-.2-.47-.38-.68-1.08-.9-1.63-.18-.45-1.36-5-2.23-5.12-.12-.02-.2.2-.25.59-.05.4-.25 7.35 1.72 9.31 2.81 2.79 7.86 2.55 11.62-3.17 1.83-2.79 1.66-6.81.54-9.77Z" />
    </svg>
  ),
  architecture: (color) => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  mvc: (color) => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  modular: (color) => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  seo: (color) => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

gsap.registerPlugin(ScrollTrigger);

export default function Skills({ data }: { data: any[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cabeçalho da seção
      gsap.from(`.${styles.header}`, {
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.76,
        ease: 'power3.out',
      });

      // Grupos de tecnologias
      gsap.from(`.${styles.group}`, {
        scrollTrigger: {
          trigger: `.${styles.groups}`,
          start: 'top 82%',
        },
        y: 38,
        opacity: 0,
        duration: 0.74,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="habilidades" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>Minhas skills</span>
          </span>
          <h2 className={styles.sectionTitle}>Tecnologias & Ferramentas</h2>
          <p className={styles.statement}>
            Arquiteturas front-end escaláveis, ecossistema .NET corporativo e desenvolvimento moderno focado em usabilidade e performance.
          </p>
        </div>

        <div className={styles.groups}>
          {data.map((group) => (
            <div key={group.category} className={styles.group}>
              <p className={styles.categoryLabel}>{group.category}</p>
              <div className={styles.iconsRow}>
                {group.items.map((skill: any) => {
                  const icon = staticIcons[skill.icon];
                  const custom = customIcons[skill.icon];
                  const color = brandColors[skill.icon] || '#bf9561';

                  return (
                    <div key={skill.name} className={styles.iconItem} title={skill.name}>
                      <div className={styles.iconWrapper}>
                        {custom ? (
                          custom(color)
                        ) : icon ? (
                          <svg
                            className={styles.icon}
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label={skill.name}
                          >
                            <path d={icon.path} fill={color} />
                          </svg>
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
