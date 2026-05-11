// sections-7-9.jsx — Venue + FAQ + Footer CTA + Footer

function Venue() {
  return (
    <section id="venue" style={{
      background: T.acc1, color: T.bg,
      padding: '120px 80px', position: 'relative', overflow: 'hidden',
    }} className="section-venue">
      <ContourPattern tone="parchment" opacity={0.22} cluster="twin" />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="venue-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>

          {/* Left — content */}
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 14,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(236,229,213,0.55)', marginBottom: 20,
            }}>ATHÊNAI · 37.9755°N · 23.7348°E</div>

            <h2 style={{
              fontFamily: T.display, fontWeight: 900,
              fontSize: 'clamp(48px, 5.5vw, 80px)',
              lineHeight: 1.0, color: T.bg,
              letterSpacing: '-0.035em', marginBottom: 18,
            }}>Athens.</h2>

            <p style={{
              fontFamily: T.body, fontWeight: 900,
              fontStyle: 'italic', fontSize: 20,
              color: 'rgba(236,229,213,0.8)', lineHeight: 1.35,
              letterSpacing: '-0.01em', marginBottom: 28,
            }}>A city with 2,500 years of rigorous inquiry.<br />The right place for this conversation.</p>

            <p style={{
              fontFamily: T.body, fontSize: 16,
              lineHeight: 1.65, color: 'rgba(236,229,213,0.78)',
              marginBottom: 32,
            }}>
              Athens College Theater, Athens, Greece.<br />
              June 30, 2026 — doors open 08:00.<br /><br />
              Late June in Athens is 35°C+. The summit is designed for it: shaded outdoor zones, cooling, and catering suited to the heat.
            </p>

            <div style={{
              fontFamily: T.mono, fontSize: 12,
              lineHeight: 2.1, color: 'rgba(236,229,213,0.55)',
              marginBottom: 36,
            }}>
              {[
                ['DOORS OPEN', '08:00'],
                ['DATE',       '30 June 2026'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 0 }}>
                  <span style={{ display: 'inline-block', width: 156, flexShrink: 0, letterSpacing: '0.12em' }}>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <a href="https://www.thisisathens.org/"
               target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'inline-block',
                 background: T.bg, color: T.acc1,
                 fontFamily: T.body, fontWeight: 600, fontSize: 13,
                 letterSpacing: '0.06em', textTransform: 'uppercase',
                 padding: '14px 28px', textDecoration: 'none',
                 transition: 'background 0.15s',
               }}
               onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,229,213,0.85)'}
               onMouseLeave={e => e.currentTarget.style.background = T.bg}
            >VISIT ATHENS →</a>
          </div>

          {/* Right — venue photo */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            minHeight: 400,
          }}>
            <img src="assets/recap/Moments00.jpg"
              alt="Athens College Theater — UAI Summit 2025"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Who is this summit for?',
    a: 'Professionals, founders, investors, researchers, and policymakers from South Eastern Europe and beyond — working at the intersection of AI and their field.',
  },
  {
    q: 'How do I register?',
    a: 'Tickets are available via the registration platform. Click "Reserve Seat" in the navigation or at the bottom of this page.',
  },
  {
    q: 'Is there a student ticket?',
    a: 'Yes. A limited number of sponsored student tickets are available. Details will be announced shortly.',
  },
  {
    q: 'Can I apply to present at Demo Day?',
    a: (
      <>
        Demo Day is open to startups selected for the StartSmart SEE 2026 Accelerator. You can view the cohort and apply at{' '}
        <a href="https://app.startsmartsee.org" target="_blank" rel="noopener noreferrer"
          style={{ color: T.acc1, borderBottom: `1px solid ${T.acc1}`, textDecoration: 'none' }}>
          app.startsmartsee.org
        </a>.
      </>
    ),
  },
  {
    q: 'Is the event conducted in English?',
    a: 'Yes. All main stage sessions are in English.',
  },
  {
    q: 'What happened at the 2025 summit?',
    a: (
      <>
        The inaugural MIT Universal AI Summit brought together 650+ leaders in Athens in July 2025 — founders, researchers, industrial leaders, and policymakers. Full recap, videos, and key insights are available at{' '}
        <a href="https://startsmartsee.substack.com" target="_blank" rel="noopener noreferrer"
          style={{ color: T.acc1, borderBottom: `1px solid ${T.acc1}`, textDecoration: 'none' }}>
          startsmartsee.substack.com
        </a>.
      </>
    ),
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${T.bg2}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '20px 0',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: T.body, fontWeight: 600, fontSize: 17,
          color: T.txt, lineHeight: 1.3, maxWidth: '88%',
        }}>{item.q}</span>
        <span style={{
          fontFamily: T.display, fontSize: 22,
          color: T.pri, flexShrink: 0, lineHeight: 1,
          transition: 'transform 0.3s ease',
          transform: open ? 'rotate(45deg)' : 'none',
          display: 'inline-block',
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontFamily: T.body, fontSize: 17,
          lineHeight: 1.65, color: 'rgba(26,24,22,0.78)',
          paddingBottom: 22,
        }}>{item.a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" style={{ background: T.bg, padding: '120px 80px' }} className="section-faq">
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: T.display, fontWeight: 900,
          fontSize: 'clamp(30px, 3.5vw, 48px)',
          lineHeight: 1.0, color: T.txt,
          letterSpacing: '-0.025em', marginBottom: 48,
        }}>Questions.</h2>
        {FAQS.map((item, i) => <FAQItem key={i} item={item} />)}
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────

function Contact() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error
  const [form, setForm] = React.useState({ name: '', email: '', organisation: '', message: '' });

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace YOUR_ENDPOINT with your Formspree form ID
      const res = await fetch('https://formspree.io/f/YOUR_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'UAI Summit 2026 — Inquiry' }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const fieldBase = {
    width: '100%', background: 'none', border: 'none',
    borderBottom: '1px solid rgba(26,24,22,0.2)',
    padding: '14px 0', fontFamily: T.body, fontSize: 16,
    color: T.txt, outline: 'none', transition: 'border-color 0.2s',
  };
  const labelStyle = {
    fontFamily: T.mono, fontSize: 10,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(26,24,22,0.48)', display: 'block', marginBottom: 4,
  };
  const onFocus = e => e.currentTarget.style.borderBottomColor = T.pri;
  const onBlur  = e => e.currentTarget.style.borderBottomColor = 'rgba(26,24,22,0.2)';

  if (status === 'success') {
    return (
      <section id="contact" style={{ background: T.bg2, padding: '120px 80px' }} className="section-contact">
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <SealMark size={52} />
          <h2 style={{
            fontFamily: T.display, fontWeight: 900,
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
            marginTop: 32, marginBottom: 16,
          }}>Message received.</h2>
          <p style={{
            fontFamily: T.body, fontSize: 17,
            lineHeight: 1.65, color: 'rgba(26,24,22,0.68)',
          }}>Thanks for reaching out. We'll be in touch within two business days.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ background: T.bg2, padding: '120px 80px' }} className="section-contact">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>

          {/* Left — header */}
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 14,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: T.pri, marginBottom: 14,
            }}>EDITION II · ATHENS · 30 JUN 2026</div>
            <h2 style={{
              fontFamily: T.display, fontWeight: 900,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              lineHeight: 1.0, color: T.txt, letterSpacing: '-0.025em',
              marginBottom: 24,
            }}>Get in touch.</h2>
            <p style={{
              fontFamily: T.body, fontSize: 16,
              lineHeight: 1.65, color: 'rgba(26,24,22,0.68)',
            }}>
              Questions about the program, speakers, sponsorship, press, or attendance?
              Fill in the form and the team will get back to you within two business days.
            </p>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-fields" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '0 32px',
            }}>
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" name="name" required autoComplete="name"
                  value={form.name} onChange={set('name')}
                  style={fieldBase} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" required autoComplete="email"
                  value={form.email} onChange={set('email')}
                  style={fieldBase} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Organisation</label>
              <input type="text" name="organisation" autoComplete="organization"
                value={form.organisation} onChange={set('organisation')}
                style={fieldBase} onFocus={onFocus} onBlur={onBlur} />
            </div>

            <div style={{ marginBottom: 40 }}>
              <label style={labelStyle}>Message *</label>
              <textarea name="message" required rows={5}
                value={form.message} onChange={set('message')}
                style={{ ...fieldBase, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={onFocus} onBlur={onBlur} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <button type="submit" disabled={status === 'sending'}
                style={{
                  background: status === 'sending' ? 'rgba(138,19,38,0.5)' : T.pri,
                  color: T.bg,
                  fontFamily: T.body, fontWeight: 600, fontSize: 13,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '16px 32px', border: 'none',
                  cursor: status === 'sending' ? 'default' : 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = T.priDark; }}
                onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = T.pri; }}
              >{status === 'sending' ? 'SENDING…' : 'SEND MESSAGE →'}</button>

              {status === 'error' && (
                <span style={{
                  fontFamily: T.mono, fontSize: 11,
                  color: T.pri, letterSpacing: '0.06em',
                }}>
                  Something went wrong —{' '}
                  <a href="mailto:sponsors@uaisummit.gr" style={{ color: T.pri }}>
                    email us directly
                  </a>
                </span>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ────────────────────────────────────────────

function FooterCTA() {
  return (
    <section id="register" style={{
      background: T.pri, padding: '120px 80px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }} className="section-footer-cta">
      <ContourPattern tone="parchment" opacity={0.08} cluster="single" />
      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: T.display, fontWeight: 900,
          fontSize: 'clamp(48px, 6vw, 80px)',
          lineHeight: 0.95, color: T.bg,
          letterSpacing: '-0.035em', marginBottom: 44,
        }}>
          Athens.<br />June 30.<br />Where Europe's<br />AI edge gets built.
        </h2>

        {/* href: replace with Luma registration URL when available */}
        <a href="#register" style={{
          display: 'inline-block',
          background: T.bg, color: T.pri,
          fontFamily: T.body, fontWeight: 600, fontSize: 14,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '18px 44px', textDecoration: 'none',
          marginBottom: 18, transition: 'background 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,229,213,0.88)'}
        onMouseLeave={e => e.currentTarget.style.background = T.bg}
        >RESERVE SEAT →</a>

        <div style={{
          fontFamily: T.mono, fontSize: 11,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(236,229,213,0.55)',
        }}>SEATS ARE LIMITED</div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────

function SiteFooter() {
  return (
    <footer style={{
      background: T.txt, color: T.bg,
      padding: '72px 80px 40px',
    }} className="site-footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: 80, marginBottom: 52, paddingBottom: 52,
          borderBottom: '1px solid rgba(236,229,213,0.1)',
        }}>
          {/* Col 1 */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <img src="assets/brand/logo-stacked.png" alt="MIT Universal AI Summit"
                style={{ height: 80, width: 'auto', display: 'block',
                  filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
            </div>
            <div style={{
              fontFamily: T.body, fontSize: 14,
              lineHeight: 1.65, color: 'rgba(236,229,213,0.65)',
            }}>
              MIT Universal AI Summit<br />
              Edition II · Athens<br />
              30 June 2026
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 10,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(236,229,213,0.42)', marginBottom: 18,
            }}>NAVIGATION</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[['Thesis', '#about'], ['Speakers', '#speakers'], ['Program', '#program'], ['Sponsors', '#sponsors'], ['Contact', '#contact'], ['Reserve Seat', '#register']].map(([label, href]) => (
                <a key={label} href={href} style={{
                  fontFamily: T.body, fontSize: 14,
                  color: 'rgba(236,229,213,0.65)', textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = T.bg}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(236,229,213,0.65)'}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <div style={{
              fontFamily: T.mono, fontSize: 10,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(236,229,213,0.42)', marginBottom: 18,
            }}>ORGANIZED BY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 24 }}>
              <a href="https://openlearning.mit.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img src="assets/brand/mit-ol-white.png" alt="MIT Open Learning"
                  style={{ width: '100%', maxWidth: 200, height: 'auto', display: 'block', opacity: 0.7 }} />
              </a>
              <a href="https://startsmartsee.org" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img src="assets/brand/startsmart-new.png" alt="StartSmart SEE"
                  style={{ width: '100%', maxWidth: 200, height: 'auto', display: 'block', opacity: 0.7, filter: 'invert(1)' }} />
              </a>
            </div>
            {/* href: replace with actual StartSmart SEE LinkedIn page URL */}
            <a href="https://www.linkedin.com/company/startsmartsee" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: T.mono, fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(236,229,213,0.42)', textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(236,229,213,0.8)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(236,229,213,0.42)'}
            >LINKEDIN ↗</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontFamily: T.body, fontSize: 13, color: 'rgba(236,229,213,0.35)' }}>
            © 2026 StartSmart SEE. All rights reserved.
          </span>
          <a href="#" style={{
            fontFamily: T.body, fontSize: 13,
            color: 'rgba(236,229,213,0.35)', textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(236,229,213,0.7)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(236,229,213,0.35)'}
          >Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Venue, FAQ, Contact, FooterCTA, SiteFooter });
