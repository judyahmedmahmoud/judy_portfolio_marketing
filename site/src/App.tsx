import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Download, Eye, ExternalLink, Linkedin, Instagram, Mail, Phone, Menu, X, ArrowUpRight, ChevronLeft, ChevronRight, ImagePlus, Plus, Minus } from 'lucide-react'
import { CV, EMAIL, PHONE, LINKEDIN, NAV, slug, POSTERS, EXPERIENCE, EXTRA, SKILLS, CALENDARS, PROJECTS, IG } from './content'

const url = (p: string) => import.meta.env.BASE_URL + p
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const still = useReducedMotion()
  return <motion.div className={className} initial={still ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>{children}</motion.div>
}
const CvButtons = ({ dark = true }: { dark?: boolean }) => (
  <div className="flex flex-wrap gap-3">
    <a className={`btn ${dark ? 'bg-neon text-ink border-neon' : 'bg-ink text-neon border-ink'}`} href={url(CV.href)} download={CV.filename}><Download size={18} aria-hidden />Download My CV</a>
    <a className={`btn ${dark ? 'border-white text-white' : 'border-ink text-ink'}`} href={url(CV.href)} {...ext}><Eye size={18} aria-hidden />View CV</a>
  </div>
)
const Label = ({ children }: { children: ReactNode }) => <p className="inline-block bg-neon text-ink text-xs font-bold tracking-widest uppercase px-2 py-1 mb-4">{children}</p>

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b border-white/15">
      <nav aria-label="Main" className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">JUDY<span className="text-neon">.</span></a>
        <button className="md:hidden p-2" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <ul id="menu" className={`${open ? 'flex' : 'hidden'} md:flex absolute md:static top-16 inset-x-0 flex-col md:flex-row gap-1 md:gap-6 bg-ink md:bg-transparent p-5 md:p-0 text-sm font-medium`}>
          {NAV.map((n) => <li key={n}><a className="block py-2 hover:text-neon" href={`#${slug(n)}`} onClick={() => setOpen(false)}>{n}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-5 max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
      <div>
        <Label>Marketing Specialist | Content Creator | Digital Marketing</Label>
        <h1 className="display text-[clamp(2.6rem,7.4vw,6.6rem)]">Turning ideas into <span className="mark">scroll-stopping</span> content.</h1>
        <p className="mt-6 text-xl italic max-w-xl">I don't just create content. I make your brand the headline.</p>
        <p className="mt-6 text-lg font-bold">Judy Ahmed Mahmoud</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn bg-neon text-ink border-neon" href="#portfolio">Explore My Work <ArrowUpRight size={18} aria-hidden /></a>
          <a className="btn border-white" href={url(CV.href)} download={CV.filename}><Download size={18} aria-hidden />Download My CV</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-neon" aria-hidden />
        <img src={url('posters/all-eyes.jpg')} alt="Poster: all eyes on your brand, three microphones with neon outlines" className="relative w-full -rotate-2 border-2 border-ink" />
        <span className="absolute -bottom-6 -left-4 bg-ink border-2 border-neon text-neon font-bold px-3 py-1 rotate-3">#TRENDING</span>
      </div>
    </section>
  )
}

const Marquee = () => (
  <div className="bg-neon text-ink overflow-hidden border-y-2 border-ink" aria-hidden>
    <div className="marq flex w-max whitespace-nowrap py-3 display text-3xl">
      {[0, 1].map((k) => <span key={k} className="px-4">From Creative to Digital — Branding — Content — Meta Ads — Strategy — Storytelling — </span>)}
    </div>
  </div>
)

function About() {
  return (
    <section id="about" className="bg-mist text-ink py-24 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <Reveal><Label>About</Label><h2 className="display text-5xl md:text-7xl">Creative thinking. Strategic execution.</h2></Reveal>
        <Reveal className="space-y-5 text-lg">
          <p>I'm a marketing specialist and content creator working across social media management, copywriting, branding and content strategy. I combine market research and audience targeting with hands-on digital marketing: media buying, Meta Ads and campaign optimization.</p>
          <p>From website content to client meetings and account management, I turn a brand's goals into content people actually stop for.</p>
          <p className="border-2 border-ink p-4 font-medium">Bachelor of Computer Science and Artificial Intelligence, Nile University · 2022 - 2026<br /><span className="font-normal">Major: Big Data & AI · GPA: 3.82/4.00</span></p>
          <div className="flex flex-wrap gap-3">
            <CvButtons dark={false} />
            <a className="btn border-ink bg-white" href={LINKEDIN} {...ext} aria-label="Judy Ahmed Mahmoud on LinkedIn (opens in a new tab)"><Linkedin size={18} aria-hidden />LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Posters() {
  return (
    <section id="posters" className="py-24 px-5 max-w-7xl mx-auto">
      <Reveal><Label>Poster wall</Label><h2 className="display text-5xl md:text-7xl mb-10">All eyes on your brand.</h2></Reveal>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[200px]">
        {POSTERS.map((p, i) => (
          <Reveal key={p.n} className={`${p.span} relative overflow-hidden border-2 border-white/80 min-h-[240px] ${p.image ? 'bg-white' : p.variant === 'neon' ? 'bg-neon text-ink' : p.variant === 'outline' ? 'bg-mist text-ink' : 'bg-ink'}`}>
            {p.image ? <img loading="lazy" src={url(p.image)} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" /> : (
              <div className={`h-full p-6 flex flex-col justify-end ${i % 2 ? '-rotate-1' : 'rotate-1'}`}>
                <p className={`display text-3xl md:text-4xl ${p.variant === 'outline' ? 'border-4 border-ink p-3 bg-white' : ''}`}>{p.text}</p>
                {p.variant === 'black' && <span className="mark mt-3 w-fit text-sm font-bold">BRAND = HEADLINE</span>}
              </div>)}
            <span className="absolute top-2 left-2 bg-ink text-neon text-xs font-bold px-2 py-1">{p.n}</span>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-sm text-white/60">Posters 03, 05 and 06 are typographic samples. Swap in your own artwork via src/content.ts.</p>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-neon text-ink py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <Reveal><h2 className="display text-5xl md:text-7xl mb-12">Where I've worked.</h2></Reveal>
        <ol className="border-l-4 border-ink ml-2">
          {EXPERIENCE.map((e) => (
            <li key={e.role + e.org}><Reveal className="relative pl-8 pb-12">
              <span className="absolute -left-[14px] top-1 w-6 h-6 bg-ink rounded-full border-4 border-neon" aria-hidden />
              <p className="font-bold text-sm bg-ink text-neon inline-block px-2 py-0.5">{e.date}</p>
              <h3 className="display text-2xl md:text-3xl mt-2">{e.role} <span className="font-normal normal-case">— {e.org}</span></h3>
              <ul className="mt-3 space-y-2 list-disc pl-5">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Reveal></li>
          ))}
        </ol>
        <p className="font-bold">Extracurricular: {EXTRA.map((x) => `${x.role}, ${x.org} (${x.date})`).join(' · ')}</p>
      </div>
    </section>
  )
}

type Img = { src: string; alt: string }
function Lightbox({ title, pages, start, onClose }: { title: string; pages: Img[]; start: number; onClose: () => void }) {
  const [i, setI] = useState(start)
  const go = (d: number) => setI((i + d + pages.length) % pages.length)
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  })
  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[60] bg-ink/95 flex flex-col items-center justify-center p-4">
      <button autoFocus onClick={onClose} aria-label="Close preview" className="absolute top-4 right-4 p-2 bg-neon text-ink"><X /></button>
      <img src={url(pages[i].src)} alt={pages[i].alt} className="max-h-[78vh] max-w-full border-2 border-neon" />
      <div className="mt-4 flex items-center gap-4 font-bold">
        <button onClick={() => go(-1)} aria-label="Previous page" className="p-2 border-2 border-neon"><ChevronLeft /></button>
        <span>{title} · {i + 1} / {pages.length}</span>
        <button onClick={() => go(1)} aria-label="Next page" className="p-2 border-2 border-neon"><ChevronRight /></button>
      </div>
    </div>
  )
}

function Calendars() {
  const [open, setOpen] = useState<{ id: string; at: number } | null>(null)
  const cur = CALENDARS.find((c) => c.id === open?.id)
  return (
    <section id="content-calendars" className="py-24 px-5 bg-ink">
      <div className="max-w-7xl mx-auto">
        <Reveal><Label>Content calendars</Label><h2 className="display text-5xl md:text-7xl mb-4">Behind the content.</h2><p className="max-w-2xl text-white/70 mb-12">The strategy behind the posts: what to say, how it should look, and the caption that goes with it. Selected pages only.</p></Reveal>
        <div className="space-y-16">
          {CALENDARS.map((c) => (
            <Reveal key={c.id} className="grid lg:grid-cols-[1fr_1.4fr] gap-8 border-t border-white/20 pt-8">
              <div>
                <p className="text-neon font-bold text-sm uppercase tracking-widest">{c.brand}</p>
                <h3 className="display text-3xl mt-2">{c.title}</h3>
                <p className="mt-4 text-white/80">{c.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="btn bg-neon text-ink border-neon" onClick={() => setOpen({ id: c.id, at: 0 })}><Eye size={18} aria-hidden />View Calendar</button>
                  {c.pdf && <a className="btn border-white" href={url(c.pdf)} download><Download size={18} aria-hidden />Download PDF</a>}
                </div>
              </div>
              <ul className="grid grid-cols-3 gap-3">
                {c.pages.slice(0, 6).map((p, k) => (
                  <li key={p.src}><button className="block w-full border border-white/30 hover:border-neon" onClick={() => setOpen({ id: c.id, at: k })} aria-label={`Open ${p.alt}`}><img loading="lazy" src={url(p.src)} alt={p.alt} className="w-full aspect-video object-cover" /></button></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
      {cur && open && <Lightbox title={cur.brand} pages={cur.pages} start={open.at} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Portfolio() {
  const [sel, setSel] = useState<string | null>('re')
  const [view, setView] = useState<{ id: string; at: number } | null>(null)
  const vp = PROJECTS.find((p) => p.id === view?.id)
  return (
    <section id="portfolio" className="py-24 px-5 bg-mist text-ink">
      <div className="max-w-6xl mx-auto">
        <Reveal><Label>Portfolio</Label><h2 className="display text-5xl md:text-7xl mb-10">Ideas made visible.</h2></Reveal>
        <div className="space-y-4">
          {PROJECTS.map((p) => {
            const on = sel === p.id
            return (
              <div key={p.id} className="border-2 border-ink bg-white">
                <h3><button className="w-full flex items-center justify-between gap-4 p-5 text-left" aria-expanded={on} aria-controls={`proj-${p.id}`} onClick={() => setSel(on ? null : p.id)}>
                  <span><span className="display text-3xl">{p.name}</span><span className="block text-sm mt-1 opacity-70">{p.industry}</span></span>
                  {on ? <Minus aria-hidden /> : <Plus aria-hidden />}
                </button></h3>
                {on && (
                  <div id={`proj-${p.id}`} className="p-5 pt-0 grid md:grid-cols-2 gap-8">
                    <div>
                      <p>{p.description}</p>
                      <h4 className="font-bold mt-5">My role</h4>
                      <ul className="list-disc pl-5 mt-1">{p.role.map((r) => <li key={r}>{r}</li>)}</ul>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {p.account && <a className="btn border-ink bg-neon" href={p.account.url} {...ext} aria-label={`${p.account.label} on Instagram (opens in a new tab)`}><Instagram size={18} aria-hidden />Instagram<ExternalLink size={14} aria-hidden /></a>}
                        {p.calendar && <a className="btn border-ink" href="#content-calendars">Related calendar</a>}
                      </div>
                      <p className="text-xs mt-3 opacity-60">Brand account shown as work I contributed to, not an account I own.</p>
                    </div>
                    {p.images.length ? (
                      <ul className={p.images.length === 1 ? 'grid grid-cols-1 max-w-xs mx-auto' : 'grid grid-cols-2 gap-3'}>{p.images.map((im, k) => <li key={im.src}><button className="block border border-ink" aria-label={`Enlarge: ${im.alt}`} onClick={() => setView({ id: p.id, at: k })}><img loading="lazy" src={url(im.src)} alt={im.alt} className={p.images.length === 1 ? 'w-full max-h-[480px] object-cover object-top' : 'w-full aspect-video object-cover'} /></button></li>)}</ul>
                    ) : (
                      <div className="border-2 border-dashed border-ink grid place-items-center min-h-48 text-center p-4"><div><ImagePlus className="mx-auto" aria-hidden /><p className="mt-2 text-sm">Image placeholder — add real work in src/content.ts</p></div></div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {vp && view && <Lightbox title={vp.name} pages={vp.images} start={view.at} onClose={() => setView(null)} />}
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-5 max-w-6xl mx-auto">
      <Reveal><Label>Skills</Label><h2 className="display text-5xl md:text-7xl mb-10">The tools behind the ideas.</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        {SKILLS.map((s) => (
          <Reveal key={s.group}><h3 className="font-bold text-neon mb-3 uppercase tracking-wider text-sm">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">{s.tags.map((t) => <li key={t} className="border-2 border-white px-3 py-1.5 font-medium transition hover:bg-neon hover:text-ink hover:border-neon hover:-rotate-2">{t}</li>)}</ul></Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-neon text-ink py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal><h2 className="display text-5xl md:text-8xl">Got a brand that needs a story? <span className="bg-ink text-neon px-2">Let's create something bold.</span></h2></Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn bg-ink text-neon" href={`mailto:${EMAIL}?subject=Let's work together`}><Mail size={18} aria-hidden />Let's Work Together</a>
          <a className="btn border-ink" href={LINKEDIN} {...ext} aria-label="LinkedIn (opens in a new tab)"><Linkedin size={18} aria-hidden />LinkedIn</a>
        </div>
        <p className="mt-6 font-bold flex flex-wrap gap-x-6 gap-y-2">
          <a className="underline inline-flex items-center gap-2" href={`mailto:${EMAIL}`}><Mail size={16} aria-hidden />{EMAIL}</a>
          <a className="underline inline-flex items-center gap-2" href={`tel:${PHONE.tel}`} aria-label={`Call ${PHONE.display}`}><Phone size={16} aria-hidden />{PHONE.display}</a>
        </p>
        <p className="mt-8 font-bold">Brands I've worked on:</p>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">{Object.values(IG).map((a) => <li key={a.url}><a className="underline inline-flex items-center gap-1" href={a.url} {...ext} aria-label={`${a.label} on Instagram (opens in a new tab)`}>{a.label}<ExternalLink size={14} aria-hidden /></a></li>)}</ul>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:z-[70] focus:bg-neon focus:text-ink focus:p-3">Skip to content</a>
      <Nav /><main><Hero /><Marquee /><About /><Posters /><Experience /><Portfolio /><Calendars /><Skills /><Contact /></main>
      <footer className="py-8 text-center text-sm text-white/60">© {new Date().getFullYear()} Judy Ahmed Mahmoud</footer>
    </>
  )
}
