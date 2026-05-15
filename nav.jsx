// nav.jsx — Sticky navigation with mobile drawer

function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerRef     = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock + move focus into drawer on open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current && closeButtonRef.current.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Focus trap + Escape to close
  React.useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const focusable = Array.from(drawer.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { setMobileOpen(false); return; }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const links = [
    { label: 'THESIS',   href: '#about' },
    // { label: 'SPEAKERS', href: '#speakers' },
    // { label: 'PROGRAM',  href: '#program' },
    { label: '2025',     href: '#recap' },
    { label: 'SPONSORS', href: '#sponsors' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 64, zIndex: 100,
        background: scrolled ? 'rgba(236,229,213,0.96)' : 'rgba(236,229,213,0.98)',
        borderBottom: `1px solid ${T.bg2}`,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'backdrop-filter 0.3s, background 0.3s',
      }}>
        <div className="nav-inner" style={{
          padding: '0 max(80px, calc((100vw - 1200px) / 2))',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="assets/brand/logo-horizontal.png" alt="MIT Universal AI Summit" style={{ height: 28, width: 'auto', display: 'block' }} />
          </a>

          <div className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" style={{
                fontFamily: T.mono, fontSize: 12,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: T.txt, textDecoration: 'none',
              }}>{l.label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#register" className="btn-primary" style={{
              background: T.pri, color: T.bg,
              fontFamily: T.body, fontWeight: 600, fontSize: 12,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '11px 20px', textDecoration: 'none', display: 'inline-block',
            }}>RESERVE SEAT →</a>

            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                <line x1="0" y1="1"  x2="22" y2="1"  stroke={T.txt} strokeWidth="1.5" />
                <line x1="0" y1="7"  x2="22" y2="7"  stroke={T.txt} strokeWidth="1.5" />
                <line x1="0" y1="13" x2="22" y2="13" stroke={T.txt} strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 200, background: T.bg,
          display: 'flex', flexDirection: 'column', padding: '24px 24px 40px',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <img src="assets/brand/logo-horizontal.png" alt="MIT Universal AI Summit" style={{ height: 24, width: 'auto' }} />
          <button
            ref={closeButtonRef}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: T.body, fontSize: 28, lineHeight: 1, color: T.txt,
            }}
          >×</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{
              fontFamily: T.mono, fontSize: 15,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: T.txt, textDecoration: 'none',
            }}>{l.label}</a>
          ))}
        </div>

        <a href="#register" onClick={() => setMobileOpen(false)} style={{
          background: T.pri, color: T.bg,
          fontFamily: T.body, fontWeight: 600, fontSize: 14,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '18px 28px', textDecoration: 'none', textAlign: 'center',
        }}>RESERVE SEAT →</a>
      </div>
    </>
  );
}

Object.assign(window, { SiteNav });
