import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const slides = [
  { img: '/images/hero-forma-2700.webp', title: 'Forma 2700', text: 'Efficient one-story living within a net-zero ready, high-performance envelope.', where: 'Legacy Collection' },
  { img: '/images/porches-freshgrass.webp', title: 'FreshGrass Annex', text: 'A sawtooth roofline echoing historic mill buildings, paired with minimalist detail.', where: 'North Adams, MA' },
  { img: '/images/slider-1.webp', title: 'Värm Sala', text: 'Designed to maximize openness and natural light across a long, narrow site.', where: 'Upper Valley, VT' },
  { img: '/images/slider-3.webp', title: 'Zum Home', text: 'A single-story home focused on comfort, accessibility, and aging in place.', where: 'Northeast Kingdom, VT' },
  { img: '/images/slider-6.webp', title: 'Clinton Corners', text: 'Open living oriented toward long views of the lake, with Lake Flato.', where: 'Hudson Valley, NY' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink text-white">
      {slides.map((sl, k) => (
        <img key={sl.img} src={sl.img} alt={sl.title} className={cn('absolute inset-0 h-full w-full object-cover transition-opacity duration-1000', k === i ? 'opacity-100' : 'opacity-0')} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/30" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
        <p className="fade-in mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-lime">Est. 1973 · Walpole, New Hampshire</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-8xl">
          Better homes,<br />built <em className="text-lime">beautifully</em>.
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base text-white/80 md:text-lg">High-performance timber homes and buildings, precision-crafted off-site and assembled in days, not months.</p>
          <div key={i} className="fade-in max-w-sm border-l-2 border-coral pl-4">
            <p className="text-sm font-semibold">{s.title} <span className="font-normal text-white/60">— {s.where}</span></p>
            <p className="mt-1 text-sm text-white/70">{s.text}</p>
          </div>
        </div>
        <div className="mt-8 flex gap-2">
          {slides.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={cn('h-1.5 rounded-full transition-all', k === i ? 'w-10 bg-lime' : 'w-4 bg-white/40 hover:bg-white')} />
          ))}
        </div>
      </div>
    </section>
  );
}
