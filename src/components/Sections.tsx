import { Button, Reveal, SectionHead, Tag } from './ui';

export function Marquee() {
  const items = ['Net-Zero Ready', 'Passive House', 'Timber Frame', 'Off-Site Precision', 'Mass Timber', 'Since 1973', 'Architectural Millwork', 'Unity Homes'];
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-lime py-4">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {list.map((t, k) => (
          <span key={k} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-ink">{t}<span className="h-2 w-2 rounded-full bg-coral" /></span>
        ))}
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Tag color="sky">Our approach</Tag>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">We build the way homes <em>should</em> be built.</h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={150}>
          <p className="text-lg leading-relaxed text-ink/70">For fifty years, Bensonwood has designed and fabricated homes and buildings in our Walpole, New Hampshire shop — where the weather never delays a build and every component is crafted to a fraction of an inch. The result: airtight, energy-efficient, timber-rich structures that go up in days and last for centuries.</p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[['50+', 'years of craft'], ['1,000+', 'homes & buildings'], ['≤ 0.6', 'ACH50 airtightness']].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-4xl md:text-5xl">{n}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-ink/50">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const homes = [
  { name: 'Custom Homes', color: 'bg-coral', text: 'text-white', img: '/images/tradd-hollis.webp', desc: 'One-of-a-kind homes designed with you and our architect partners, fabricated with Bensonwood precision.' },
  { name: 'Unity Homes', color: 'bg-sky', text: 'text-white', img: '/images/washinee-exterior.webp', desc: 'Värm, Zum, Tradd, Xyla, Nano — adaptable platforms that make high performance attainable.' },
  { name: 'OpenHome', color: 'bg-sun', text: 'text-ink', img: '/images/may-vt-004.webp', desc: 'Our Legacy Collection of ready-to-personalize designs, like the Forma 2700.' },
];

export function Homes() {
  return (
    <section id="homes" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead eyebrow="Build with us" color="coral" title={<>Three ways to a <em>Bensonwood</em> home.</>} />
        <div className="grid gap-6 md:grid-cols-3">
          {homes.map((h, k) => (
            <Reveal key={h.name} delay={k * 120}>
              <a href="#portfolio" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <img src={h.img} alt={h.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${h.color} ${h.text}`}>0{k + 1}</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl">{h.name}</h3>
                <p className="mt-2 text-ink/60">{h.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Feature() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img src="/images/downeast-offgrid.jpg" alt="Off-grid Värm in Downeast Maine" className="aspect-[3/4] w-full rounded-3xl object-cover" />
            <img src="/images/goome-2025.jpg" alt="Crested Butte timber interior" className="absolute -bottom-8 -right-4 hidden w-1/2 rounded-2xl border-8 border-paper object-cover shadow-xl md:block" />
          </div>
        </Reveal>
        <Reveal delay={150} className="md:pl-10">
          <Tag color="lime">Featured · Off-Grid Värm</Tag>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">Fully off-grid on the Maine coast.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">A Värm home engineered to run on sunlight alone — a super-insulated envelope, triple-glazed windows and heat-recovery ventilation mean the batteries barely notice a New England winter.</p>
          <ul className="mt-8 space-y-3 text-sm font-medium">
            {['Passive House-level envelope', 'Solar + battery, zero utility connection', 'Assembled weather-tight in 5 days'].map(t => (
              <li key={t} className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-coral" />{t}</li>
            ))}
          </ul>
          <Button href="#portfolio" className="mt-10">See the portfolio</Button>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  { n: '01', t: 'Design', d: 'Collaborate with our in-house designers or your architect. Every detail is modelled in 3D before a single timber is cut.', c: 'bg-lime' },
  { n: '02', t: 'Fabricate', d: 'Walls, roofs, floors and timber frames are built indoors in Walpole, NH with CNC precision and craftsman finishing.', c: 'bg-sun' },
  { n: '03', t: 'Assemble', d: 'Panels arrive on site and the shell is up and weather-tight in days — no rain delays, no waste piles.', c: 'bg-sky' },
  { n: '04', t: 'Live', d: 'Quiet, bright, airtight and efficient. A home that costs less to run and is built for centuries.', c: 'bg-coral' },
];

export function Process() {
  return (
    <section id="process" className="bg-ink py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Tag color="sun">The process</Tag>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">Off-site. On point.</h2>
            <p className="mt-6 text-white/60">The Bensonwood way, from first sketch to move-in day.</p>
            <img src="/images/production-ave.webp" alt="Bensonwood production facility" className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {steps.map((s, k) => (
              <Reveal key={s.n} delay={k * 100} className="flex gap-6 border-b border-white/10 py-8 first:pt-0">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-bold text-ink ${s.c}`}>{s.n}</span>
                <div>
                  <h3 className="font-serif text-3xl">{s.t}</h3>
                  <p className="mt-2 text-white/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Millwork() {
  return (
    <section id="millwork" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <img src="/images/millwork-doors.webp" alt="Custom mahogany entry doors" className="aspect-[16/11] w-full rounded-3xl object-cover" />
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-between rounded-3xl bg-sun p-8 md:col-span-5 md:p-12">
          <div>
            <Tag color="coral">Architectural Millwork</Tag>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">Doors, stairs & timber details, made by hand.</h2>
          </div>
          <p className="mt-8 text-ink/70">Custom mahogany entry doors with insulated cores and multipoint locking. Curved stairs, built-ins and exposed joinery — crafted in the same shop as our homes.</p>
          <Button href="#contact" className="mt-8 self-start">Talk to the millwork team</Button>
        </Reveal>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[['/images/dartmouth-allen.jpg', 'Dartmouth · Institutional'], ['/images/southface-n103.jpg', 'SouthFace Village · Multi-family'], ['/images/gibbs.jpg', 'Custom timber interior']].map(([img, cap], k) => (
          <Reveal key={img} delay={k * 100}>
            <img src={img} alt={cap} className="aspect-[4/3] w-full rounded-3xl object-cover" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-ink/50">{cap}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-sky py-24 text-white md:py-36">
      <img src="/images/hervt-2024.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="font-serif text-3xl leading-tight md:text-6xl">“The house went up in four days. Five winters later, our heating bill is still smaller than our phone bill.”</p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/80">Homeowners · Upper Valley, Vermont</p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <div className="relative overflow-hidden rounded-3xl bg-coral p-10 text-white md:p-20">
        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <Tag color="lime">Start a project</Tag>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Let’s build something that lasts.</h2>
          </div>
          <div>
            <p className="text-white/85">Tell us about your site, your timeline and your dreams. Our team will follow up within two business days.</p>
            <form onSubmit={e => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="you@email.com" className="w-full rounded-full bg-white px-5 py-3 text-ink outline-none placeholder:text-ink/40" />
              <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-lime hover:text-ink">Get in touch →</button>
            </form>
          </div>
        </div>
        <img src="/images/weivt-2024.jpg" alt="" className="pointer-events-none absolute -bottom-20 -right-20 w-1/2 rotate-[-6deg] rounded-3xl opacity-30" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div>
          <span className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-full bg-lime font-serif text-xl">b</span><span className="text-lg font-semibold">bensonwood</span></span>
          <p className="mt-4 text-sm text-ink/60">6 Blackjack Crossing<br />Walpole, NH 03608<br />603.756.3600</p>
        </div>
        {[
          ['Build', ['Custom Homes', 'Unity Homes', 'OpenHome', 'Timber Frame', 'Architectural Millwork']],
          ['Professionals', ['Single-Family', 'Multi-Family & Commercial', 'Institutional', 'Mass Timber', 'Resources']],
          ['Company', ['About', 'Why Us', 'Passive House', 'Careers', 'Blog', 'Podcast']],
        ].map(([h, items]) => (
          <div key={h as string}>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">{h}</p>
            <ul className="mt-4 space-y-2 text-sm">{(items as string[]).map(i => <li key={i}><a href="#" className="hover:text-coral">{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 pb-8 text-xs text-ink/40 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Bensonwood. Redesign concept.</p>
        <p>Built off-site. Loved on-site.</p>
      </div>
    </footer>
  );
}
