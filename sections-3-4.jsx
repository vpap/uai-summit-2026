// sections-3-4.jsx — Five Pillars + Speakers

const PILLARS = [
  {
    mark: '01',
    title: 'LLM-Powered Virtual\nSingle Market',
    primary: 'How AI dissolves fragmentation across 27 regulatory regimes — from a single desk.',
    secondary: 'A team in Athens can now generate legally compliant contracts for Germany, France, and Poland without a local lawyer in each country.',
  },
  {
    mark: '02',
    title: 'From Pilot Purgatory to\nAgentic Production',
    primary: 'What it actually takes to move enterprise AI from proof-of-concept to real workflows at scale.',
    secondary: 'Most enterprise AI today never leaves the pilot phase. This frontier shows what the deployments that do have in common.',
  },
  {
    mark: '03',
    title: "Physical AI and\nEurope's Industrial Edge",
    primary: 'Factories, ports, farms, and power grids as the deployment surface for the next wave of AI.',
    secondary: 'The industrial base Europe once saw as a weight is now a competitive advantage — physical AI needs exactly what Europe already operates.',
  },
  {
    mark: '04',
    title: 'The European\nScale-Up Equation',
    primary: 'From lab to market, from research to capital — without leaving the continent.',
    secondary: 'AI handles the productization — legal drafting, go-to-market, customer research — while the researcher stays focused on the science.',
  },
  {
    mark: '05',
    title: 'AI Literacy at\nContinental Scale',
    primary: "Closing Europe's skills gap. The MIT Open Learning connection.",
    secondary: "MIT Open Learning's Universal AI curriculum is already in Greek. The question is how fast it reaches the rest of the continent.",
  },
];

const PILLAR_SHORT = { '01': 'SINGLE MARKET', '02': 'PRODUCTION', '03': 'PHYSICAL AI', '04': 'SCALE-UP', '05': 'LITERACY' };

// Hover handled entirely by .pillar-card CSS — no useState needed
function PillarCard({ pillar }) {
  return (
    <div className="pillar-card">
      <div style={{
        fontFamily: T.mono, fontSize: 14,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: T.pri, display: 'flex', alignItems: 'center',
        gap: 8, marginBottom: 16,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: T.pri, flexShrink: 0 }}></span>
        {pillar.mark}
      </div>

      <div style={{
        fontFamily: T.display, fontWeight: 900,
        fontSize: 22, lineHeight: 1.1, color: T.txt,
        letterSpacing: '-0.02em', marginBottom: 16, whiteSpace: 'pre-line',
      }}>{pillar.title}</div>

      <div style={{ height: 1, background: T.bg2, marginBottom: 16 }}></div>

      <p style={{
        fontFamily: T.body, fontSize: 15,
        lineHeight: 1.55, color: T.txt, marginBottom: 12, flex: 1,
      }}>{pillar.primary}</p>

      <p style={{
        fontFamily: T.body, fontSize: 14,
        lineHeight: 1.5, color: 'rgba(26,24,22,0.68)',
      }}>{pillar.secondary}</p>
    </div>
  );
}

function Pillars() {
  return (
    <section id="pillars" style={{ background: T.bg, padding: '120px 80px' }} className="section-pillars">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontFamily: T.mono, fontSize: 14,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: T.pri, marginBottom: 14,
          }}>FIVE FRONTIERS · ONE THESIS</div>
          <h2 style={{
            fontFamily: T.display, fontWeight: 900,
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
          }}>How AI opens<br />a European frontier.</h2>
        </div>

        <div className="pillar-grid-top" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20, marginBottom: 20,
        }}>
          {PILLARS.slice(0, 3).map(p => <PillarCard key={p.mark} pillar={p} />)}
        </div>
        <div className="pillar-grid-bottom" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20, maxWidth: 'calc(66.67% - 7px)',
        }}>
          {PILLARS.slice(3).map(p => <PillarCard key={p.mark} pillar={p} />)}
        </div>

        <div style={{ marginTop: 40 }}>
          <a href="#program" style={{
            fontFamily: T.body, fontWeight: 600, fontSize: 13,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: T.pri, textDecoration: 'none',
            borderBottom: `1.5px solid ${T.pri}`, paddingBottom: 2,
          }}>SEE THE FULL PROGRAM ↓</a>
        </div>
      </div>
    </section>
  );
}

// ─── Speakers ────────────────────────────────────────────────

const SPEAKERS = [
  {
    name: 'Dimitris\nBertsimas',
    affiliation: 'MIT · ORC',
    pillar: '01',
    slot: 'SLOT 01 · 09:50',
    quote: '"Personalized medicine: ML at the lab-to-market boundary."',
    photo: 'bertsimas.png',
  },
  {
    name: 'Manolis\nKellis',
    affiliation: 'MIT · Broad Institute',
    pillar: '03',
    slot: 'SLOT 02 · 10:30',
    quote: '"Mantis: navigating the latent map of biological knowledge."',
    photo: 'kellis.jpg',
  },
  {
    name: 'Theodoros\nEvgeniou',
    affiliation: 'INSEAD · Decision Sciences',
    pillar: '02',
    slot: 'SLOT 03 · 11:10',
    quote: '"Chemistry in 1900 — and AI in 2026."',
    photo: 'evgeniou.jpg',
  },
  {
    name: 'Kathleen\nKennedy',
    affiliation: 'MIT Open Learning',
    pillar: '05',
    slot: 'SLOT 06 · 16:50',
    quote: '"The Universal AI curriculum: one year in Greek."',
    photo: 'kennedy.png',
  },
  {
    name: 'Kyriakos\nPierrakakis',
    affiliation: 'Min. of Digital Governance',
    pillar: '01',
    slot: 'OPEN · 09:15',
    quote: '"Europe\'s regulatory stack as a competitive signal, not a burden."',
    photo: 'pierrakakis.jpg',
  },
  {
    name: 'Roman\nChernin',
    affiliation: 'Nebius · Co-founder & CBO',
    pillar: '04',
    slot: 'SLOT 05 · 16:00',
    quote: '"Building a $700M AI platform outside the Silicon Valley default."',
    photo: 'chernin.jpg',
  },
];

// Hover handled entirely by .speaker-card / .speaker-slot-tag CSS — no useState needed
function SpeakerCard({ speaker }) {
  return (
    <div className="speaker-card">
      {/* Headshot — loads from assets/speakers/, falls back to placeholder */}
      <div style={{
        height: 210, background: T.bg2,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ContourPattern tone="cardinal" opacity={0.12} cluster="single" />
        <img
          src={`assets/speakers/${speaker.photo}`}
          alt={speaker.name.replace('\n', ' ')}
          onError={e => { e.currentTarget.style.display = 'none'; }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center bottom',
            display: 'block',
          }}
        />
      </div>

      <div style={{ padding: '16px 20px 22px' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          <span className="speaker-slot-tag">{speaker.slot}</span>
          <span style={{
            fontFamily: T.mono, fontSize: 10,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: T.pri, background: T.bg2,
            padding: '3px 7px',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.pri, flexShrink: 0 }}></span>
            {speaker.pillar} {PILLAR_SHORT[speaker.pillar]}
          </span>
        </div>

        <div style={{
          fontFamily: T.display, fontWeight: 900,
          fontSize: 22, lineHeight: 1.1, color: T.txt,
          letterSpacing: '-0.02em', whiteSpace: 'pre-line', marginBottom: 6,
        }}>{speaker.name}</div>

        <div style={{
          fontFamily: T.mono, fontSize: 11,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(26,24,22,0.5)', marginBottom: 12,
        }}>{speaker.affiliation}</div>

        <div style={{
          fontFamily: T.body, fontStyle: 'italic',
          fontSize: 13, lineHeight: 1.5, color: 'rgba(26,24,22,0.68)',
        }}>{speaker.quote}</div>
      </div>
    </div>
  );
}

function Speakers() {
  return (
    <section id="speakers" style={{ background: T.bg2, padding: '120px 80px' }} className="section-speakers">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: T.mono, fontSize: 14,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: T.pri, marginBottom: 14,
          }}>EDITION II · 30 JUN 2026</div>
          <h2 style={{
            fontFamily: T.display, fontWeight: 900,
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
          }}>The speakers.</h2>
        </div>

        <div className="speakers-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          {SPEAKERS.map((s, i) => <SpeakerCard key={i} speaker={s} />)}
        </div>

        <div style={{
          marginTop: 28, fontFamily: T.mono,
          fontSize: 12, color: 'rgba(26,24,22,0.48)',
        }}>Speaker announcements ongoing · Last updated May 2026</div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars, Speakers });
