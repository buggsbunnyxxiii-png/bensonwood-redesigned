import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn('reveal', className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Tag({ children, color = 'lime' }: { children: ReactNode; color?: 'lime' | 'coral' | 'sky' | 'sun' }) {
  const map = { lime: 'bg-lime text-ink', coral: 'bg-coral text-white', sky: 'bg-sky text-white', sun: 'bg-sun text-ink' };
  return <span className={cn('inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest', map[color])}>{children}</span>;
}

export function Button({ children, href = '#', variant = 'dark', className }: { children: ReactNode; href?: string; variant?: 'dark' | 'light' | 'coral' | 'lime'; className?: string }) {
  const map = {
    dark: 'bg-ink text-white hover:bg-coral',
    light: 'bg-white text-ink hover:bg-lime',
    coral: 'bg-coral text-white hover:bg-ink',
    lime: 'bg-lime text-ink hover:bg-ink hover:text-white',
  };
  return (
    <a href={href} className={cn('inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300', map[variant], className)}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function SectionHead({ eyebrow, title, color = 'coral', className }: { eyebrow: string; title: ReactNode; color?: 'lime' | 'coral' | 'sky' | 'sun'; className?: string }) {
  return (
    <div className={cn('mb-12', className)}>
      <Tag color={color}>{eyebrow}</Tag>
      <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
    </div>
  );
}
