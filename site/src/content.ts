// ===== EDIT ME: all site content lives here =====
export const CV = { href: 'cv/Judy_Ahmed_Mahmoud_CV.pdf', filename: 'Judy_Ahmed_Mahmoud_CV.pdf' } // replace the PDF at public/cv/ (keep the name)
export const EMAIL = 'judyahmedmahmoud26l@gmail.com'
export const PHONE = { display: '01090320787', tel: '+201090320787' }
export const LINKEDIN = 'https://www.linkedin.com/in/judy-ahmed-196807288/'
export const IG = {
  soul: { label: 'Soul Hospitality', url: 'https://www.instagram.com/soulhospitalityy/' },
  dahab: { label: 'Dahab Development', url: 'https://www.instagram.com/dahabdevelopment/' },
  magzar: { label: 'El Magzar', url: 'https://www.instagram.com/elmagzar.eg/' },
  re: { label: 'RE Developments', url: 'https://www.instagram.com/re__developments/' },
  caviara: { label: 'Caviara', url: 'https://www.instagram.com/caviara_egy/' },
}
export const NAV = ['Home', 'About', 'Experience', 'Portfolio', 'Content Calendars', 'Skills', 'Contact']
export const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-')

// Poster wall. Add `image` (file in public/posters/) to replace a typographic sample with your own artwork.
export const POSTERS = [
  { n: '03', text: "I don't just create content. I make your brand the headline.", variant: 'black', span: 'md:col-span-4' },
  { n: '04', text: "My creative ideas. Your brand's digital strength.", image: 'posters/creative-ideas.jpg', alt: 'Poster: my creative ideas, your brand, neon chain link', span: 'md:col-span-2 md:row-span-2' },
  { n: '05', text: 'Creative content. Strategic thinking. Real impact.', variant: 'neon', span: 'md:col-span-2' },
  { n: '06', text: 'Your brand deserves a better story.', variant: 'outline', span: 'md:col-span-2' },
] as { n: string; text: string; image?: string; alt?: string; variant?: string; span: string }[]

export const EXPERIENCE = [
  { role: 'Content Creator (Part-Time)', org: 'AJED Agency', date: '05/2026 - Present', points: [
    'Create engaging social media content, copywriting, and website content aligned with clients’ brand identities and marketing objectives.',
    'Manage client accounts and attend client meetings to understand requirements and coordinate project execution.',
    'Conduct market research and develop content and branding strategies based on target audiences, market trends, and client goals.'] },
  { role: 'Marketing Specialist & Content Creator', org: 'RE Developments', date: '06/2026 - Present', points: [
    'Managed social media platforms and content scheduling using Meta Business Suite',
    'Created engaging marketing content, captions, and creative concepts for real estate projects.',
    'Supported digital marketing campaigns, including media buying, Meta Ads management, audience targeting, and lead generation.',
    'Monitored campaign performance and engagement metrics to optimize results and improve brand awareness.'] },
  { role: 'Marketing Specialist', org: 'Shaheenz Investment', date: '04/2025 - 05/2026', points: [
    'Managed and grew social media accounts across Meta platforms by engaging with influencers, creating content, responding to leads, resulting in increased account reach and qualified inquiries.',
    'Tracked and followed up on inbound leads generated through social media campaigns and real estate marketplace listings.',
    'Planned and managed a monthly social media content calendar for Meta platforms, scheduling posts, stories, and promotions to maintain consistent audience engagement.',
    'Moderated social media pages by responding to comments and messages, maintaining a positive brand image and engaging with the community.'] },
  { role: 'Sales Ambassador', org: 'Valu', date: '11/2024 - 01/2025', points: [
    'Promoted the brand and increased engagement by driving sign-ups and activating new accounts through peer outreach.',
    'Assisted with financial inquiries and supported customer onboarding to enhance program participation.'] },
  { role: 'Intern', org: 'AAIB Bank', date: '07/2024 - 08/2024', points: [
    'Assisted customers with their daily banking needs, answered their questions about accounts and transactions, and made sure they left the branch with a clear answer.',
    'Stayed calm and helpful during busy hours, supported the customer service team, and made sure every client felt comfortable enough to ask whatever was on their mind.'] },
  { role: 'Junior Teaching Assistant', org: 'Nile University', date: '09/2023 - 02/2024', points: [
    'Assisted computer science students in understanding Python programming concepts and debugging code.',
    'Supported the development of problem-solving skills through hands-on guidance and practical examples.'] },
]
export const EXTRA = [
  { role: 'E-Club Member (Public Relations)', org: 'Nile University', date: '2023 - 2024' },
  { role: 'Media Member', org: 'IEEE Nile University Student Branch', date: '2022 - 2023' },
]
export const SKILLS = [
  { group: 'Social Media Marketing', tags: ['Meta Business Suite', 'Facebook & Instagram Ads', 'Content Calendar Planning', 'Page Management'] },
  { group: 'Content & Branding', tags: ['Content Creation', 'Copywriting', 'Content Strategy', 'Market Research', 'Branding', 'Website Content', 'Flyers', 'Banners', 'Brochures'] },
  { group: 'Digital Marketing', tags: ['Digital Marketing', 'Media Buying', 'Meta Ads Campaign Management', 'Audience Targeting', 'Lead Generation', 'Campaign Performance Analysis', 'Optimization'] },
  { group: 'Tools & Software', tags: ['Canva', 'Microsoft Office', 'AI Content Tools', 'CRM Basics'] },
]

// Content calendars. `pages` = the ONLY pages shown publicly (rendered images in public/calendars/<id>/).
// `pdf` = optional public download path. Left undefined on purpose: the source PDFs contain internal briefing notes.
const cal = (id: string, nums: number[], what: string) => nums.map((n) => ({ src: `calendars/${id}/p${n}.jpg`, alt: `${what}, page ${n}` }))
export const CALENDARS: { id: string; brand: string; title: string; blurb: string; pages: { src: string; alt: string }[]; pdf?: string }[] = [
  { id: 'dahab', brand: 'Dahab Development · ITC Mall', title: 'Dahab content calendar (AJED Marketing, 2026)',
    blurb: 'Plan of 8 static posts and 5 reels: brand description and identity, values, a construction-progress carousel, ITC Mall concepts and storytelling. Each entry pairs inspiration, description, tone of voice and captions.',
    pages: cal('dahab', [1, 2, 3, 5, 11], 'Dahab Development content calendar') },
  { id: 'elmagzar', brand: 'El Magzar', title: 'El-Magzar content calendar (AJED Marketing, 2026)',
    blurb: 'Plan of 7 static posts and 3 videos for a meat brand: brand description, identity and tagline, then product-led posts (beef, burgers, sausage, kofta, minced beef) with captions.',
    pages: cal('elmagzar', [1, 3, 5, 7, 9, 10], 'El Magzar content calendar') },
  { id: 'ersie', brand: 'ER&SIE', title: 'ER&SIE content calendar (AJED Marketing, 2026)',
    blurb: 'Plan of 9 static posts for a contemporary Egyptian fashion brand of premium unisex everyday essentials: brand description and identity, then product-led posts for camisoles, wide-leg pants and t-shirts, with captions in English and German.',
    pages: cal('ersie', [1, 2, 3, 4, 5, 7], 'ER&SIE content calendar') },
  { id: 're', brand: 'RE Developments · Zone X Mall', title: 'RE Developments September content calendar',
    blurb: 'Plan of 7 static posts and 3 reels for Zone X Mall: restaurants and cafés, medical, office, residential and mall-services concepts, plus an Arabic post for the October Victory (1973) anniversary.',
    pages: cal('re', [1, 3, 4, 5, 8, 10], 'RE Developments content calendar') },
]
const prev = (id: string) => CALENDARS.find((c) => c.id === id)!.pages.slice(1, 5)
const pv = prev
export const PROJECTS: { id: string; name: string; industry: string; description: string; role: string[]; account?: { label: string; url: string }; calendar?: string; images: { src: string; alt: string }[] }[] = [
  { id: 're', name: 'RE Developments', industry: 'Real estate · Zone X Mall', calendar: 're', account: IG.re, images: prev('re'),
    description: 'Social media content, captions and creative concepts for RE Developments, including Zone X Mall campaigns across commercial, administrative and medical real estate.',
    role: ['Captions and creative concepts', 'Visual direction briefs for each post', 'Content planning and scheduling', 'Digital marketing support'] },
  { id: 'dahab', name: 'Dahab Development', industry: 'Real estate · ITC Mall', calendar: 'dahab', account: IG.dahab, images: prev('dahab'),
    description: 'Content planning for Dahab Development and ITC Mall: static and reel concepts, brand storytelling, construction progress, values, vision and identity.',
    role: ['Content calendar planning', 'Static post and reel concepts', 'Captions and tone of voice'] },
  { id: 'magzar', name: 'El Magzar', industry: 'Meat & food products', calendar: 'elmagzar', account: IG.magzar, images: prev('elmagzar'),
    description: 'Product-focused concepts and advertising copy for a meat brand: burgers, premium beef cuts, sausage and kofta.',
    role: ['Product-focused creative concepts', 'Product presentation and ad copy', 'Social media captions', 'Website content', 'Story sharing content', 'Video shooting and script writing'] },
  { id: 'er-sie', name: 'ER&SIE', industry: 'Fashion & apparel', calendar: 'ersie', images: pv('ersie'),
    description: 'Marketing content for ER&SIE, a contemporary Egyptian fashion brand of premium unisex everyday essentials: product descriptions, captions and promotional content for camisoles, t-shirts, wide-leg pants and more.',
    role: ['Product descriptions', 'Social media captions', 'Promotional and seasonal offer content', 'Website content', 'Story sharing content', 'Video shooting and script writing'] },
  { id: 'soul', name: 'Soul Hospitality', industry: 'Hospitality', account: IG.soul, images: [{ src: 'projects/soul-hospitality.jpg', alt: 'Soul Hospitality Instagram feed: beach, resort and travel posts in blue and white' }],
    description: 'Hospitality marketing and creative content. Samples shown from the account\'s Instagram feed. (Editable: add the exact services you delivered.)', role: ['Add your contributions here'] },
  { id: 'caviara', name: 'Caviara', industry: 'Pet nutrition', account: IG.caviara, images: [{ src: 'projects/caviara.jpg', alt: 'Caviara Instagram feed: pet food product posts, videos and an October Victory post in blue' }],
    description: 'Content for Caviara, a pet nutrition brand. Samples shown from the account\'s Instagram feed. (Editable: add the exact services you delivered.)', role: ['Add your contributions here'] },
]
