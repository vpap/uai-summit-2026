// sections-5-6.jsx — Program + Sponsors & Partners

const SCHEDULE = [
  // Morning
  { time: '08:00', type: 'BRK',  title: 'Arrival & Networking Breakfast',                       phase: 0 },
  { time: '09:15', type: 'OPEN', title: 'Opening block — organizers, Greek official, US Ambassador', phase: 0 },
  { time: '09:50', type: 'KEY',  title: 'Bertsimas — Personalized medicine & ML',                phase: 0 },
  { time: '10:30', type: 'KEY',  title: 'Kellis — Mantis: the latent map of biological knowledge', phase: 0 },
  { time: '11:10', type: 'KEY',  title: 'Evgeniou — Chemistry in 1900, and AI in 2026',         phase: 0 },
  { time: '11:50', type: 'BRK',  title: 'Morning Coffee & Networking',                           phase: 0 },
  // Midday
  { time: '12:00', type: 'PNL',  title: 'Panel: AI across regulated borders',                    phase: 1 },
  { time: '12:40', type: 'PNL',  title: 'Panel: The Universal AI curriculum — one year in',      phase: 1 },
  { time: '13:25', type: 'BRK',  title: 'Networking Lunch — topic tables, meeting marketplace',  phase: 1 },
  { time: '14:40', type: 'KEY',  title: "Physical AI and Europe's Industrial Edge",              phase: 1 },
  { time: '15:20', type: 'KEY',  title: 'The European Scale-Up Equation',                        phase: 1 },
  { time: '16:00', type: 'KEY',  title: 'Building at scale outside the Silicon Valley default',  phase: 1 },
  { time: '16:40', type: 'BRK',  title: 'Afternoon Coffee & Networking',                         phase: 1 },
  // Late afternoon
  { time: '16:50', type: 'KEY',  title: 'AI Literacy at Continental Scale',                      phase: 2 },
  { time: '17:30', type: 'KEY',  title: 'Closing session — flex',                                phase: 2 },
  { time: '18:10', type: 'DEMO', title: 'Demo Day — 10 startups · 5 minutes each',              phase: 2 },
  { time: '19:05', type: 'AWRD', title: 'Awards Ceremony',                                       phase: 2 },
  { time: '19:20', type: 'BRK',  title: 'Networking Reception (100 min)',                        phase: 2 },
];

const TAG = {
  OPEN: { bg: T.bg2,          fg: T.txt,  label: 'OPEN' },
  KEY:  { bg: T.pri,          fg: T.bg,   label: 'KEY'  },
  PNL:  { bg: T.acc1,         fg: T.bg,   label: 'PNL'  },
  BRK:  { bg: 'transparent',  fg: 'rgba(26,24,22,0.38)', label: 'BRK' },
  DEMO: { bg: T.priDark,      fg: T.bg,   label: 'DEMO' },
  AWRD: { bg: T.acc2,         fg: T.bg,   label: 'AWRD' },
};

const PHASES = [
  { label: 'Morning — Inspiration & framing',    rows: SCHEDULE.filter(r => r.phase === 0) },
  { label: 'Midday — Depth & application',        rows: SCHEDULE.filter(r => r.phase === 1) },
  { label: 'Late afternoon — Community & action', rows: SCHEDULE.filter(r => r.phase === 2) },
];

// Hover handled by .schedule-row / .schedule-row--dim CSS — no useState needed
function ScheduleRow({ row }) {
  const t   = TAG[row.type] || TAG.OPEN;
  const dim = row.type === 'BRK';
  return (
    <div
      className={`schedule-row${dim ? ' schedule-row--dim' : ''}`}
      style={{
        display: 'grid', gridTemplateColumns: '64px 52px 1fr 20px',
        gap: 20, alignItems: 'center',
        padding: '13px 8px', margin: '0 -8px',
        borderBottom: `1px solid ${T.bg2}`,
      }}
    >
      <span style={{ fontFamily: T.mono, fontSize: 13, color: T.txt }}>{row.time}</span>

      {!dim
        ? <span style={{
            fontFamily: T.mono, fontSize: 9,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '4px 7px', background: t.bg, color: t.fg,
            border: t.bg === 'transparent' ? `1px solid ${T.bg2}` : 'none',
            whiteSpace: 'nowrap',
          }}>{t.label}</span>
        : <span></span>
      }

      <span style={{
        fontFamily: T.body, fontSize: 15,
        color: dim ? 'rgba(26,24,22,0.45)' : T.txt,
      }}>{row.title}</span>

      {!dim && (
        <span style={{ color: T.pri, fontSize: 16, display: 'inline-block' }}>→</span>
      )}
    </div>
  );
}

function Program() {
  return (
    <section id="program" style={{ background: T.bg, padding: '120px 80px' }} className="section-program">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div className="program-header" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'end', marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 14,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: T.pri, marginBottom: 14,
            }}>30 · JUN · 2026 · ATHENS COLLEGE THEATER</div>
            <h2 style={{
              fontFamily: T.display, fontWeight: 900,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
            }}>One day.<br />Ten sessions.</h2>
          </div>
          <p style={{
            fontFamily: T.body, fontSize: 16,
            lineHeight: 1.65, color: 'rgba(26,24,22,0.7)',
          }}>
            Three emotional gears: morning inspiration, midday depth, and a late-afternoon surge of demos, awards, and community. Every content slot is 40 minutes — no padding.
          </p>
        </div>

        {PHASES.map((ph, pi) => (
          <div key={pi} style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: T.mono, fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(26,24,22,0.48)', marginBottom: 8,
              paddingBottom: 8, borderBottom: `2px solid ${T.pri}`,
              display: 'inline-block',
            }}>{ph.label}</div>
            {ph.rows.map((row, ri) => <ScheduleRow key={ri} row={row} />)}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Sponsors ──────────────────────────────────────────────

function Sponsors() {
  return (
    <section id="sponsors" style={{ background: T.bg2, padding: '120px 80px' }} className="section-sponsors">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: T.mono, fontSize: 14,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: T.pri, marginBottom: 14,
          }}>EDITION II · PARTNERS</div>
          <h2 style={{
            fontFamily: T.display, fontWeight: 900,
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
          }}>Organized with.</h2>
        </div>

        {/* Frontier */}
        <div style={{ marginBottom: 52 }}>
          <div style={{
            fontFamily: T.mono, fontSize: 10,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(26,24,22,0.45)', marginBottom: 20,
          }}>FRONTIER PARTNERS</div>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
            {['Strategic Partner', 'Impact Partner', 'Innovation Partner'].map(name => (
              <div key={name} style={{
                fontFamily: T.mono, fontSize: 11,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(26,24,22,0.22)',
                border: '1px solid rgba(26,24,22,0.14)',
                padding: '14px 24px',
                transition: 'color 0.2s, border-color 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = T.txt; e.currentTarget.style.borderColor = T.txt; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(26,24,22,0.22)'; e.currentTarget.style.borderColor = 'rgba(26,24,22,0.14)'; }}
              >{name}</div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: T.bg, marginBottom: 52 }}></div>

        {/* Ecosystem */}
        <div style={{ marginBottom: 52 }}>
          <div style={{
            fontFamily: T.mono, fontSize: 10,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(26,24,22,0.45)', marginBottom: 20,
          }}>ECOSYSTEM</div>
          <div style={{ display: 'flex', gap: 36, alignItems: 'center', flexWrap: 'wrap' }}>
            {['Community Partner', 'Supporter', 'Supporter', 'Micro'].map((name, i) => (
              <div key={i} style={{
                fontFamily: T.mono, fontSize: 11,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(26,24,22,0.2)',
                transition: 'color 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.color = T.txt}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,24,22,0.2)'}
              >{name}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── 2025 Recap ────────────────────────────────────────────

const INSIGHTS_2025 = [
  {
    mark: '01',
    title: 'AI is ready.\nAre you?',
    body: "From steel plants to defence, the tech is deployed. What's missing is the culture and coordination to run it at scale.",
  },
  {
    mark: '02',
    title: 'Education is\ngoing universal.',
    body: "The Universal AI curriculum is built for mass adoption. Training won't be a bottleneck — excuses will.",
  },
  {
    mark: '03',
    title: 'Pilots are dead.\nBuild to deploy.',
    body: 'No more POC trophies. The future belongs to those who ship, iterate, and tie AI to real KPIs fast.',
  },
];

function Recap2025() {
  return (
    <section id="recap" style={{ background: T.bg, padding: '120px 80px' }} className="section-recap">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header — 2-col */}
        <div className="recap-header" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'end', marginBottom: 56,
        }}>
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 14,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: T.pri, marginBottom: 14,
            }}>EDITION I · ATHENS · JULY 2025</div>
            <h2 style={{
              fontFamily: T.display, fontWeight: 900,
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
            }}>What happened<br />last year.</h2>
          </div>
          <div>
            <p style={{
              fontFamily: T.body, fontSize: 17,
              lineHeight: 1.65, color: 'rgba(26,24,22,0.78)',
              marginBottom: 24,
            }}>
              650+ founders, researchers, and industry leaders filled Athens College Theater on July 8, 2025 for a twelve-hour sprint of keynotes, panels, and startup pitches — all converging on one question: what does it actually take to deploy AI at scale?
            </p>
            <a href="https://startsmartsee.substack.com" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: T.body, fontWeight: 600, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: T.acc1, textDecoration: 'none',
              borderBottom: `1.5px solid ${T.acc1}`, paddingBottom: 2,
            }}>READ THE FULL RECAP ↗</a>
          </div>
        </div>

        {/* Insight cards — 3-col */}
        <div className="recap-insights" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20, marginBottom: 4,
        }}>
          {INSIGHTS_2025.map(ins => (
            <div key={ins.mark} style={{ border: `1px solid ${T.bg2}`, padding: 32 }}>
              <div style={{
                fontFamily: T.mono, fontSize: 14,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: T.pri, display: 'flex', alignItems: 'center',
                gap: 8, marginBottom: 16,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: T.pri, flexShrink: 0 }}></span>
                {ins.mark}
              </div>
              <div style={{
                fontFamily: T.display, fontWeight: 900,
                fontSize: 22, lineHeight: 1.15, color: T.txt,
                letterSpacing: '-0.02em', whiteSpace: 'pre-line', marginBottom: 16,
              }}>{ins.title}</div>
              <div style={{ height: 1, background: T.bg2, marginBottom: 16 }}></div>
              <p style={{
                fontFamily: T.body, fontSize: 15,
                lineHeight: 1.55, color: 'rgba(26,24,22,0.68)',
              }}>{ins.body}</p>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="recap-photos" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '380px 280px 280px 520px',
          gap: 4,
        }}>
          {[
            { file: 'Moments00.jpg',   alt: 'Athens College Theater — 650+ attendees', span: 2, pos: 'center' },
            { file: 'Moments01.jpg',   alt: 'Speaker, UAI Summit 2025',                pos: 'center top' },
            { file: 'Moments02.jpg',   alt: 'Speaker on stage',                        pos: 'center' },
            { file: 'Moments03.jpg',   alt: 'Speaker presenting',                      pos: 'center' },
            { file: 'Moments04.jpg',   alt: 'Panel: Innovation in Defence',            pos: 'center' },
            { file: 'Moments05.jpg',   alt: 'Panel: AI-Driven Value Creation',         pos: 'center' },
            { file: 'Our_Partners01.jpg', alt: 'Speaker: AI Strategy & Solutions',     pos: 'center' },
            { file: 'The_winners_of_StartSmart_SEE_2025_Accelerator01.jpg',
                                        alt: 'Grand Prize Winner — SQB Robotics',      pos: 'center' },
            { file: 'Moments06.jpg',   alt: 'Awards ceremony, UAI Summit 2025',        span: 3, pos: 'center 30%' },
          ].map((photo, i) => (
            <div key={i} style={{
              background: T.bg2, position: 'relative', overflow: 'hidden',
              gridColumn: photo.span ? `span ${photo.span}` : undefined,
            }}>
              <img
                src={`assets/recap/${photo.file}`}
                alt={photo.alt}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: photo.pos,
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { Program, Recap2025, Sponsors });
