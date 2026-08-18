'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { label: 'Projetos', targetId: 'projetos' },
  { label: 'Sobre', targetId: 'sobre' },
  { label: 'Stack', targetId: 'habilidades' },
  { label: 'Experiência', targetId: 'experiencia' },
  { label: 'Contato', targetId: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao redimensionar para tela grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Bloqueio do scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Detector de Scroll (Passivo para Alta Performance)
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
      // Remove o menu ativo ao retornar à Hero
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    // Inicializa o estado com o valor real
    handleScrollEvent();
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Animação Cinematográfica de Abertura / Fechamento em Tela Cheia com GSAP
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.killTweensOf([menuRef.current, `.${styles.fullLink}`, footerRef.current]);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Cortina desliza de cima para baixo
      tl.set(menuRef.current, { display: 'flex', yPercent: -100, opacity: 1 })
        .to(menuRef.current, {
          yPercent: 0,
          duration: 0.65,
          ease: 'power4.inOut',
        })
        // Itens de navegação surgem com stagger elegante
        .fromTo(
          `.${styles.fullLink}`,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.25'
        )
        // Rodapé de redes surge suave
        .fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          '-=0.3'
        );
    } else {
      // Animação de fechamento
      gsap.to(menuRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power4.inOut',
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [isOpen]);

  // Scroll Spy Cinematográfico via Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -50% 0px', // Foco relaxado para conseguir pegar seções curtas no fim da página (ex: Contato)
        threshold: 0,
      }
    );

    // Atraso sutil para garantir que os elementos renderizaram (Next.js client behavior)
    const timeout = setTimeout(() => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.targetId);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
      navItems.forEach((item) => {
        const el = document.getElementById(item.targetId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    
    // Atraso dinâmico: só espera se a cortina mobile estiver sendo fechada
    const delay = isOpen && window.innerWidth < 768 ? 400 : 0;
    setIsOpen(false);

    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target, {
          offset: -30,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, delay);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={`${styles.navContainer} container`}>
          <button
            type="button"
            onClick={handleLogoClick}
            className={styles.logo}
            aria-label="Pavlos. - Voltar ao início"
          >
            Pavlos.
          </button>

          {/* Navegação Desktop */}
          <nav className={styles.navDesktop}>
            {navItems.map((item) => (
              <button
                key={item.targetId}
                type="button"
                onClick={(e) => handleScroll(e, item.targetId)}
                className={`${styles.link} ${activeSection === item.targetId ? styles.activeLink : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão Hamburger Mobile Minimalista */}
          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <span className={styles.barTop} />
            <span className={styles.barBottom} />
          </button>
        </div>
      </header>

      {/* Menu Mobile Full-Screen Limpo e Minimalista */}
      <div className={styles.fullScreenMenu} ref={menuRef} style={{ display: 'none' }}>
        {/* Barra de Topo no Menu Aberto */}
        <div className={styles.menuTopBar}>
          <span className={styles.menuLogo}>Pavlos.</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links Minimalistas em Tela Cheia */}
        <nav className={styles.fullNav} ref={linksRef}>
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={(e) => handleScroll(e, item.targetId)}
              className={`${styles.fullLink} ${activeSection === item.targetId ? styles.activeFullLink : ''}`}
            >
              <span className={styles.linkLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Rodapé Somente com Redes Sociais */}
        <div className={styles.fullMenuFooter} ref={footerRef}>
          <div className={styles.socialRow}>
            <a
              href="https://www.linkedin.com/in/pavlos-kallidis-de-andrade-/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/pavlosandrade"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/pavlosandrade/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
