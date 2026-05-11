// sections-1-2.jsx — Hero + The Frame

function Hero() {
  return (
    <section style={{
      background: T.bg, minHeight: '100svh',
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', pointerEvents: 'none' }}>
        <ContourPattern tone="cardinal" opacity={0.13} cluster="hero" />
      </div>

      {/* Main content */}
      <div className="hero-content" style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: '0 80px', flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingTop: 128, paddingBottom: 64,
        position: 'relative',
      }}>

        {/* Supertag */}
        <div style={{
          fontFamily: T.mono, fontSize: 12,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: T.txt, marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: T.pri, flexShrink: 0 }}></span>
          ATHÊNAI · 37.9755°N · 23.7348°E
        </div>

        {/* Headline */}
        <h1 className="hero-headline" style={{
          fontFamily: T.display, fontWeight: 900,
          fontSize: 'clamp(54px, 7vw, 96px)',
          lineHeight: 0.95, color: T.pri,
          letterSpacing: '-0.035em', margin: 0, maxWidth: '58%',
        }}>
          Atlas of<br />Crossings.
        </h1>

        {/* Editorial subline */}
        <p className="hero-subline" style={{
          fontFamily: T.body, fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(15px, 1.6vw, 21px)',
          color: T.pri, letterSpacing: '-0.01em',
          lineHeight: 1.4, marginTop: 22, maxWidth: '54%', opacity: 0.82,
        }}>
          Five frontiers where Europe<br />turns AI into advantage.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 40 }}>
          <a href="#register" style={{
            background: T.pri, color: T.bg,
            fontFamily: T.body, fontWeight: 600, fontSize: 13,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '16px 32px', textDecoration: 'none', display: 'inline-block',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = T.priDark}
          onMouseLeave={e => e.currentTarget.style.background = T.pri}
          >RESERVE SEAT →</a>

          <a href="#about" style={{
            fontFamily: T.body, fontWeight: 600, fontSize: 13,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: T.pri, textDecoration: 'none',
            borderBottom: `1.5px solid ${T.pri}`, paddingBottom: 2,
          }}>READ THE THESIS ↓</a>
        </div>

        {/* Stat strip */}
        <div className="stat-strip" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, auto)',
          gap: 0, marginTop: 72,
          paddingTop: 28, borderTop: `1px solid ${T.bg2}`,
          maxWidth: '58%',
        }}>
          {[
            { num: '10',    label: 'MAIN STAGE\nSESSIONS' },
            { num: '600+',  label: 'EXPECTED\nATTENDEES' },
            { num: '5',     label: 'FRONTIERS\nTO EXPLORE' },
            { num: '30 JUN', label: 'ATHENS COLLEGE\nTHEATER' },
          ].map((s, i) => (
            <div key={i} style={{
              paddingRight: i < 3 ? 32 : 0,
              paddingLeft:  i > 0 ? 32 : 0,
              borderRight:  i < 3 ? `1px solid ${T.bg2}` : 'none',
            }}>
              <div style={{
                fontFamily: T.mono, fontWeight: 700,
                fontSize: 'clamp(26px, 3.2vw, 48px)',
                color: T.pri, lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontFamily: T.mono, fontSize: 10,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: T.txt, marginTop: 7, lineHeight: 1.5,
                whiteSpace: 'pre-line',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Co-organized by */}
        <div style={{ marginTop: 52 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: T.mono, fontSize: 10,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: T.txt, opacity: 0.45, marginBottom: 20,
          }}>
            <span style={{ width: 24, height: 1, background: 'currentColor', display: 'inline-block', flexShrink: 0 }}></span>
            CO-ORGANIZED BY
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <a href="https://openlearning.mit.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src="assets/brand/mit-ol-black.png" alt="MIT Open Learning"
                style={{ height: 52, width: 'auto', display: 'block' }} />
            </a>
            <span style={{ width: 1, height: 48, background: T.bg2, flexShrink: 0 }}></span>
            <a href="https://startsmartsee.org" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src="assets/brand/startsmart-new.png" alt="StartSmart SEE"
                style={{ height: 52, width: 'auto', display: 'block' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Boundary scale — bottom */}
      <div style={{
        padding: '20px 80px 36px', maxWidth: 1200,
        margin: '0 auto', width: '100%', position: 'relative',
      }} className="hero-boundary">
        <BoundaryScale />
      </div>
    </section>
  );
}

function TheFrame() {
  return (
    <section id="about" style={{
      background: T.bg2,
      padding: '112px 80px',
    }} className="section-frame">
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          fontFamily: T.mono, fontSize: 14,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: T.pri, marginBottom: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <span style={{ width: 24, height: 1, background: T.pri, display: 'inline-block' }}></span>
          THE THESIS
          <span style={{ width: 24, height: 1, background: T.pri, display: 'inline-block' }}></span>
        </div>
        <p style={{
          fontFamily: T.body,
          fontSize: 'clamp(17px, 1.9vw, 22px)',
          lineHeight: 1.85, color: T.txt,
        }}>
          Europe doesn't have an innovation problem. It has a scaling problem.{' '}
          For the first time,{' '}
          <strong style={{ fontFamily: T.display, fontWeight: 900 }}>AI</strong>{' '}
          gives European founders, researchers, and industries the tools to fix it — without waiting for policy.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TheFrame });
