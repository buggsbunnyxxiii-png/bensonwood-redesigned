import { useEffect, useMemo, useState } from 'react';
import { projects, type Category, type Project } from '../data/projects';
import { SectionHead } from './ui';
import { cn } from '../utils/cn';

const cats: Array<'All' | Category> = ['All', 'Custom Homes', 'Unity Homes', 'Timber Frame', 'Institutional'];
const dot: Record<Category, string> = { 'Custom Homes': 'bg-coral', 'Unity Homes': 'bg-sky', 'Timber Frame': 'bg-sun', 'Institutional': 'bg-lime' };

export default function Portfolio() {
  const [cat, setCat] = useState<'All' | Category>('All');
  const [limit, setLimit] = useState(12);
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(() => (cat === 'All' ? projects : projects.filter(p => p.category === cat)), [cat]);
  const shown = list.slice(0, limit);

  useEffect(() => {
    if (!active) return;
    const idx = list.indexOf(active);
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive(list[(idx + 1) % list.length]);
      if (e.key === 'ArrowLeft') setActive(list[(idx - 1 + list.length) % list.length]);
    };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [active, list]);

  return (
    <section id="portfolio" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHead eyebrow="Portfolio" color="sky" className="mb-0" title={<>{projects.length} projects, one <em>standard</em>.</>} />
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => { setCat(c); setLimit(12); }} className={cn('rounded-full border px-4 py-2 text-sm font-medium transition-colors', cat === c ? 'border-ink bg-ink text-white' : 'border-ink/15 hover:border-ink')}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {shown.map((p, k) => (
            <button key={p.slug} onClick={() => setActive(p)} className={cn('group text-left', k % 7 === 0 && 'col-span-2 row-span-2')}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-ink/5">
                <img src={p.img} alt={p.title} loading="lazy" className={cn('h-full w-full object-cover transition-transform duration-700 group-hover:scale-105', k % 7 === 0 ? 'aspect-[4/3]' : 'aspect-square')} />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="text-xs text-white/70">{p.location}</p>
                </div>
                <span className={cn('absolute left-3 top-3 h-2.5 w-2.5 rounded-full', dot[p.category])} />
              </div>
            </button>
          ))}
        </div>

        {limit < list.length && (
          <div className="mt-12 text-center">
            <button onClick={() => setLimit(l => l + 16)} className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral">
              Show more ({list.length - limit} remaining)
            </button>
          </div>
        )}
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 md:p-10" onClick={() => setActive(null)}>
          <button className="absolute right-6 top-6 text-sm font-semibold text-white/70 hover:text-white">Close ✕</button>
          <div className="w-full max-w-6xl" onClick={e => e.stopPropagation()}>
            <img src={active.img} alt={active.title} className="max-h-[75vh] w-full rounded-2xl object-contain" />
            <div className="mt-5 flex flex-col justify-between gap-3 text-white md:flex-row md:items-center">
              <div>
                <p className="font-serif text-3xl">{active.title}</p>
                <p className="text-sm text-white/60">{active.category} · {active.location}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setActive(list[(list.indexOf(active) - 1 + list.length) % list.length])} className="rounded-full border border-white/30 px-5 py-2 text-sm hover:bg-lime hover:text-ink hover:border-lime">← Prev</button>
                <button onClick={() => setActive(list[(list.indexOf(active) + 1) % list.length])} className="rounded-full border border-white/30 px-5 py-2 text-sm hover:bg-lime hover:text-ink hover:border-lime">Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
