'use client';

import React from 'react';

export const InspectionIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <path 
      d="M26 6c-5.5 0-10 2-15 4v16c0 10 9 17 15 20 6-3 15-10 15-20V10c-5-2-9.5-4-15-4z" 
      stroke="#eab308" 
      strokeWidth="2.5" 
      fill="rgba(234, 179, 8, 0.1)"
    />
    <circle cx="26" cy="22" r="6" stroke="#eab308" strokeWidth="2" />
    <path d="M30 26l4 4" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TraceabilityIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <path 
      d="M26 6c-5.5 0-10 2-15 4v16c0 10 9 17 15 20 6-3 15-10 15-20V10c-5-2-9.5-4-15-4z" 
      stroke="#eab308" 
      strokeWidth="2.5" 
      fill="rgba(234, 179, 8, 0.1)"
    />
    <path d="M18 20h16M18 26h16M18 32h10" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SixSigmaIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="qg3a" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff3cac"/><stop offset="50%" stopColor="#6c47ff"/><stop offset="100%" stopColor="#00e5ff"/></linearGradient>
      <filter id="qf3"><feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#6c47ff" floodOpacity="0.5"/></filter>
    </defs>
    <g filter="url(#qf3)">
      <polygon points="26,6 29,20 26,24 23,20" fill="url(#qg3a)" opacity="0.9"/>
      <polygon points="26,46 29,32 26,28 23,32" fill="url(#qg3a)" opacity="0.9"/>
      <polygon points="6,26 20,23 24,26 20,29" fill="url(#qg3a)" opacity="0.9"/>
      <polygon points="46,26 32,23 28,26 32,29" fill="url(#qg3a)" opacity="0.9"/>
      <polygon points="10,10 21,19 22,23 18,22" fill="url(#qg3a)" opacity="0.7"/>
      <polygon points="42,42 31,33 30,29 34,30" fill="url(#qg3a)" opacity="0.7"/>
      <polygon points="42,10 33,21 29,22 30,18" fill="url(#qg3a)" opacity="0.7"/>
      <polygon points="10,42 19,31 23,30 22,34" fill="url(#qg3a)" opacity="0.7"/>
    </g>
    <circle cx="26" cy="26" r="6" fill="url(#qg3a)"/>
    <text x="26" y="30" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff" fontFamily="monospace">6σ</text>
  </svg>
);

export const AuditIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="qg4a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff3cac"/><stop offset="100%" stopColor="#ff8c42"/></linearGradient>
      <filter id="qf4"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ff3cac" floodOpacity="0.45"/></filter>
    </defs>
    <circle cx="26" cy="26" r="17" stroke="url(#qg4a)" strokeWidth="2.5" fill="none" filter="url(#qf4)"/>
    <circle cx="26" cy="26" r="10" stroke="url(#qg4a)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" opacity="0.5"/>
    <circle cx="26" cy="26" r="4" fill="url(#qg4a)"/>
    <line x1="26" y1="8" x2="26" y2="14" stroke="url(#qg4a)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="26" y1="38" x2="26" y2="44" stroke="url(#qg4a)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="26" x2="14" y2="26" stroke="url(#qg4a)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="38" y1="26" x2="44" y2="26" stroke="url(#qg4a)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const SystemsIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <path 
      d="M26 6c-5.5 0-10 2-15 4v16c0 10 9 17 15 20 6-3 15-10 15-20V10c-5-2-9.5-4-15-4z" 
      stroke="#eab308" 
      strokeWidth="2.5" 
      fill="rgba(234, 179, 8, 0.1)"
    />
    <circle cx="26" cy="26" r="6" stroke="#eab308" strokeWidth="2" strokeDasharray="2 1" />
    <path d="M26 18v4M26 30v4M18 26h4M30 26h4" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LeadershipIcon = () => (
  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="qg6a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6c47ff"/><stop offset="100%" stopColor="#ff3cac"/></linearGradient>
      <filter id="qf6"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#6c47ff" floodOpacity="0.4"/></filter>
    </defs>
    <g filter="url(#qf6)">
      <circle cx="26" cy="16" r="7" stroke="url(#qg6a)" strokeWidth="2.2" fill="rgba(108,71,255,0.15)"/>
      <circle cx="14" cy="34" r="5" stroke="url(#qg6a)" strokeWidth="2" fill="rgba(108,71,255,0.1)"/>
      <circle cx="38" cy="34" r="5" stroke="url(#qg6a)" strokeWidth="2" fill="rgba(108,71,255,0.1)"/>
      <path d="M26 23 L14 29M26 23 L38 29" stroke="url(#qg6a)" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M26 12 l1 2.5 2.5.5-1.8 1.8.4 2.7L26 18.3l-2.1 1.2.4-2.7-1.8-1.8 2.5-.5z" fill="url(#qg6a)"/>
    </g>
  </svg>
);

export const ReactIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#20232a"/>
    <g transform="translate(16,16)">
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.3" fill="none"/>
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.3" fill="none" transform="rotate(60)"/>
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.3" fill="none" transform="rotate(120)"/>
      <circle cx="0" cy="0" r="2" fill="#61dafb"/>
    </g>
  </svg>
);

export const JSIcon = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#f7df1e"/>
    <text x="16" y="23" textAnchor="middle" fontSize="16" fontWeight="900" fill="#222" fontFamily="monospace">JS</text>
  </svg>
);

export const TSIcon = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#3178c6"/>
    <text x="16" y="23" textAnchor="middle" fontSize="15" fontWeight="900" fill="#fff" fontFamily="monospace">TS</text>
  </svg>
);

export const NodeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#1a3324"/>
    <polygon points="16,5 27,11 27,21 16,27 5,21 5,11" fill="none" stroke="#68a063" strokeWidth="1.5"/>
    <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="900" fill="#68a063" fontFamily="monospace">node</text>
  </svg>
);

export const PythonIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#1a2535"/>
    <path d="M16 7c-3 0-5 1.2-5 3v2h5v1H9c-1.5 0-3 1-3 4s1.2 4 3 4h2v-2.5c0-2 1-3 4-3h4c2 0 3-1 3-3V10c0-2-1.5-3-6-3zm-1 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776ab"/>
    <path d="M16 25c3 0 5-1.2 5-3v-2h-5v-1h7c1.5 0 3-1 3-4s-1.2-4-3-4h-2v2.5c0 2-1 3-4 3h-4c-2 0-3 1-3 3v3c0 2 1.5 3 6 3zm1-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#ffd43b"/>
  </svg>
);

export const HTMLIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#1a1010"/>
    <polygon points="6,4 8.5,27 16,29.5 23.5,27 26,4" fill="#e34f26"/>
    <polygon points="16,7 16,27.2 22,25.3 24,7" fill="#ef652a"/>
    <path d="M10 11h12M10.5 16.5h8l-.5 4.5L16 22l-2-.5-.1-2H11l.3 4 4.7 1.5 4.7-1.5.6-7H10.8z" fill="#fff" stroke="none"/>
  </svg>
);

export const PostgresIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#0d1b2a"/>
    <ellipse cx="16" cy="11" rx="8" ry="4" fill="#336791"/>
    <path d="M8 11v8c0 2.2 3.6 4 8 4s8-1.8 8-4V11" stroke="#336791" strokeWidth="0" fill="#336791" opacity="0.5"/>
    <ellipse cx="16" cy="19" rx="8" ry="4" fill="none" stroke="#4a90d0" strokeWidth="1.5"/>
    <ellipse cx="16" cy="15" rx="8" ry="4" fill="none" stroke="#4a90d0" strokeWidth="1.5"/>
    <ellipse cx="16" cy="11" rx="8" ry="4" fill="none" stroke="#4a90d0" strokeWidth="1.5"/>
  </svg>
);

export const GitIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#1b1b1b"/>
    <path d="M29 15l-12-12a2 2 0 0 0-2.8 0l-2.8 2.8 3.5 3.5a2.4 2.4 0 0 1 3 3l3.4 3.4a2.4 2.4 0 1 1-1.4 1.4l-3.2-3.2v8.3a2.4 2.4 0 1 1-2 0V13.7a2.4 2.4 0 0 1-1.3-3.1L7.9 7.1 3 12a2 2 0 0 0 0 2.8l12 12a2 2 0 0 0 2.8 0l11.2-11.2a2 2 0 0 0 0-2.6z" fill="#f05133"/>
  </svg>
);
export const NextJSIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="16" fill="#000"/>
    <path d="M23.5 24l-9-13.5V24h-2V8h2l8.5 12.5V8h2v16h-1.5z" fill="#fff"/>
    <circle cx="16" cy="16" r="15.5" stroke="#333" strokeOpacity="0.5"/>
  </svg>
);

export const TailwindIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#0f172a"/>
    <path d="M16 11c-2.4 0-3.6 1.2-3.6 3.6 1.2-1.2 2.4-1.2 3.6 0s2.4 3.6 1.2 4.8c1.2-1.2 1.2-2.4 0-3.6S13.6 14.6 12.4 15.8c-1.2 1.2-1.2 2.4 0 3.6 2.4 0 3.6-1.2 3.6-3.6-1.2 1.2-2.4 1.2-3.6 0z" fill="#38bdf8"/>
    <path d="M10 17c-2.4 0-3.6 1.2-3.6 3.6 1.2-1.2 2.4-1.2 3.6 0s2.4 3.6 1.2 4.8c1.2-1.2 1.2-2.4 0-3.6S7.6 20.6 6.4 21.8c-1.2 1.2-1.2 2.4 0 3.6 2.4 0 3.6-1.2 3.6-3.6-1.2 1.2-2.4 1.2-3.6 0z" fill="#38bdf8" transform="translate(6,-6)"/>
  </svg>
);

export const FramerIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#000"/>
    <path d="M8 8h16v8l-8 8v8l-8-8z" fill="#00aaff"/>
    <path d="M24 16v8h-8z" fill="#00aaff" opacity="0.6"/>
  </svg>
);

export const ViteIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#1e1e20"/>
    <path d="M25.5 7L16 26 6.5 7" fill="url(#vite-g)"/>
    <path d="M19 4l-3 6.5 6 1-9 12.5 1-9.5-5-1z" fill="#ffcf33"/>
    <defs>
      <linearGradient id="vite-g" x1="6.5" y1="7" x2="25.5" y2="7">
        <stop stopColor="#41d1ff"/><stop offset="1" stopColor="#bd34fe"/>
      </linearGradient>
    </defs>
  </svg>
);

export const PWAIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="4" fill="#5a0fc8"/>
    <path d="M7 8h8a4 4 0 0 1 0 8H7V8zM17 16h6a4 4 0 0 1 0 8h-6v-8z" fill="#fff" opacity="0.8"/>
    <path d="M12 14v10M20 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
