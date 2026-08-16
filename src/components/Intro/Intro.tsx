'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Intro.module.css';

export default function Intro() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Bloqueia o scroll durante a abertura
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          setIsDone(true);
        },
      });

      // 1. Revelação da Assinatura
      tl.from(logoRef.current, {
        opacity: 0,
        y: 16,
        filter: 'blur(6px)',
        duration: 0.8,
        ease: 'power3.out',
      })
      // 2. Traço dourado de accent
      .from(
        lineRef.current,
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      // 3. Subtítulo
      .from(
        roleRef.current,
        {
          opacity: 0,
          y: 10,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      // 4. Fade out dos elementos internos
      .to([logoRef.current, lineRef.current, roleRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.in',
        delay: 0.8,
      })
      // 5. Cortina sobe com aceleração cinematográfica
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power4.inOut',
      }, '-=0.15');
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) return null;

  return (
    <div className={styles.curtain} ref={curtainRef} aria-hidden="true">
      <div className={styles.inner}>
        <h1 className={styles.logo} ref={logoRef}>
          Pavlos.
        </h1>
        <div className={styles.accentLine} ref={lineRef} />
        <p className={styles.role} ref={roleRef}>
          Desenvolvedor Front-End & .NET
        </p>
      </div>
    </div>
  );
}
