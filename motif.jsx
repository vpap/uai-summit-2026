// motif.jsx — Atlas motif primitives: contour rings, boundary scale, seal mark

const ContourPattern = React.memo(function ContourPattern({ tone, opacity, cluster }) {
  tone    = tone    || 'cardinal';
  opacity = opacity !== undefined ? opacity : 0.15;
  cluster = cluster || 'single';

  const strokes = {
    cardinal: T.pri,
    parchment: 'rgba(236,229,213,0.65)',
    aegean: 'rgba(31,78,95,0.45)',
    ink: 'rgba(26,24,22,0.55)',
  };
  const stroke = strokes[tone] || strokes.cardinal;

  const focalSets = {
    single:  [{ cx: 600, cy: 300, rx: 220, ry: 160, rings: 10, jitter: 18 }],
    hero:    [{ cx: 820, cy: 440, rx: 400, ry: 290, rings: 14, jitter: 30 }],
    twin: [
      { cx: 280, cy: 250, rx: 165, ry: 120, rings: 8, jitter: 16 },
      { cx: 830, cy: 320, rx: 200, ry: 148, rings: 10, jitter: 20 },
    ],
    three: [
      { cx: 220, cy: 200, rx: 118, ry: 88,  rings: 6, jitter: 12 },
      { cx: 700, cy: 130, rx: 82,  ry: 60,  rings: 5, jitter: 10 },
      { cx: 930, cy: 360, rx: 160, ry: 112, rings: 8, jitter: 16 },
    ],
  };

  const focals = focalSets[cluster] || focalSets.single;
  const paths = [];
  let seed = 53;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

  for (const f of focals) {
    for (let r = 1; r <= f.rings; r++) {
      const t = r / f.rings;
      const segs = 36;
      const pts = [];
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        const noise = (rand() - 0.5) * f.jitter * t;
        pts.push([
          f.cx + Math.cos(a) * (f.rx * t + noise),
          f.cy + Math.sin(a) * (f.ry * t + noise * 0.68),
        ]);
      }
      let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) d += ` L ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}`;
      d += ' Z';
      paths.push({ d, sw: r === f.rings ? 1.2 : 0.55 });
    }
  }

  return (
    <svg aria-hidden="true" width="100%" height="100%"
      viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none' }}
    >
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={stroke} strokeWidth={p.sw} />
      ))}
      {focals.map((f, i) => (
        <g key={'f' + i}>
          <circle cx={f.cx} cy={f.cy} r="3.5" fill={stroke} />
          <circle cx={f.cx} cy={f.cy} r="9" fill="none" stroke={stroke} strokeWidth="0.9" />
        </g>
      ))}
    </svg>
  );
});

const BoundaryScale = React.memo(function BoundaryScale({ style }) {
  const labels = ['LAB', 'MARKET', 'NATIONAL', 'DIGITAL', 'PHYSICAL', 'CAPITAL'];
  return (
    <div style={{ width: '100%', ...style }}>
      <div style={{ position: 'relative', height: 18 }}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 18">
          <line x1="16" y1="6" x2="984" y2="6" stroke="rgba(26,24,22,0.28)" strokeWidth="1" />
          {labels.map((_, i) => {
            const x = 16 + (i / (labels.length - 1)) * 968;
            return <line key={i} x1={x} y1="1" x2={x} y2="12" stroke="rgba(26,24,22,0.35)" strokeWidth="1" />;
          })}
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
        {labels.map(l => (
          <span key={l} style={{
            fontFamily: T.mono, fontSize: 10,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(26,24,22,0.38)',
          }}>{l}</span>
        ))}
      </div>
    </div>
  );
});

const SealMark = React.memo(function SealMark({ size, color, accent }) {
  size   = size   || 44;
  color  = color  || 'rgba(26,24,22,0.7)';
  accent = accent || T.pri;
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true">
      <circle cx="30" cy="30" r="27" fill="none" stroke={color} strokeWidth="0.8" />
      <circle cx="30" cy="30" r="20" fill="none" stroke={color} strokeWidth="0.5" opacity="0.55" />
      <circle cx="30" cy="30" r="13" fill="none" stroke={color} strokeWidth="0.5" opacity="0.38" />
      <circle cx="30" cy="30" r="3.5" fill={accent} />
      <line x1="30" y1="3" x2="30" y2="57" stroke={color} strokeWidth="0.5" opacity="0.45" />
      <line x1="3" y1="30" x2="57" y2="30" stroke={color} strokeWidth="0.5" opacity="0.45" />
    </svg>
  );
});

Object.assign(window, { ContourPattern, BoundaryScale, SealMark });
