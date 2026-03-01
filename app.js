function svgPlaceholder(label){
  const safe = (label || "Handmade").slice(0, 20);
  return `
  <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safe}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="rgba(176,122,58,.55)"/>
        <stop offset="1" stop-color="rgba(122,74,42,.45)"/>
      </linearGradient>
      <radialGradient id="r" cx="30%" cy="25%" r="70%">
        <stop offset="0" stop-color="rgba(176,122,58,.25)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>

    <rect width="800" height="400" fill="rgba(255,255,255,.55)"/>
    <rect width="800" height="400" fill="url(#r)"/>
    <circle cx="640" cy="120" r="120" fill="url(#g)"/>
    <circle cx="520" cy="275" r="165" fill="rgba(122,74,42,.18)"/>

    <text x="44" y="215" font-size="44" fill="rgba(43,30,20,.85)" font-family="system-ui, -apple-system, Segoe UI, Roboto">${safe}</text>
    <text x="44" y="265" font-size="22" fill="rgba(106,79,58,.75)" font-family="system-ui, -apple-system, Segoe UI, Roboto">Handgemacht • Kuschelig • Kinder</text>
  </svg>`;
}