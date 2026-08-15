'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ data }: { data: any }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.content}`, {
        scrollTrigger: {
          trigger: `.${styles.content}`,
          start: 'top 82%',
        },
        y: 46,
        opacity: 0,
        duration: 0.84,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Olá Pavlos, vi seu portfólio e gostaria de conversar sobre um projeto.'
  );
  const whatsappUrl = `https://wa.me/5516991710519?text=${whatsappMessage}`;

  return (
    <section id="contato" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Vamos conversar</span>
          </span>
          <h2 className={styles.sectionTitle}>
            Vamos construir algo sólido juntos?
          </h2>
          <p className={styles.description}>
            Disponível para novos projetos, consultorias front-end e produtos digitais.
            Atendimento para empresas e startups em todo o Brasil.
          </p>
          <div className={styles.actions}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.73 2.65 4.21 3.71.59.25 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28s-1.48-.73-1.71-.81c-.23-.09-.4-.13-.57.12-.17.26-.65.81-.8 1-.15.19-.3.21-.55.09-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44-.15-.01-.32-.01-.49-.01" />
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href={`mailto:${data.email}`}
              className={styles.buttonOutline}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{data.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
