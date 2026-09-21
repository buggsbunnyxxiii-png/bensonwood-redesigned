import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const links = [
  { label: 'Homes', href: '#homes' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Millwork', href: '#millwork' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-paper/85 backdrop-blur-md' : 'bg-transparent')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-ink"><span className="font-serif text-xl leading-none">b</span></span>
          <span className={cn('text-lg font-semibold tracking-tight', scrolled ? 'text-ink' : 'text-white')}>bensonwood</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className={cn('text-sm font-medium transition-colors hover:text-coral', scrolled ? 'text-ink' : 'text-white')}>{l.label}</a>
          ))}
          <a href="#contact" className={cn('rounded-full px-5 py-2 text-sm font-semibold transition-colors', scrolled ? 'bg-ink text-white hover:bg-coral' : 'bg-lime text-ink hover:bg-white')}>Start a project</a>
        </nav>
        <button onClick={() => setOpen(!open)} className={cn('md:hidden text-sm font-semibold', scrolled ? 'text-ink' : 'text-white')} aria-label="Menu">{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <div className="bg-paper px-6 pb-6 md:hidden">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-3 text-lg font-medium">{l.label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white">Start a project</a>
        </div>
      )}
    </header>
  );
}
