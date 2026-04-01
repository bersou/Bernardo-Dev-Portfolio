'use client';

import { motion } from 'framer-motion';

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto font-mono text-[13px] leading-relaxed group hover:border-brand-orange/30 transition-colors"
    >
      {/* TOPBAR */}
      <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border-bottom border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
        </div>
        <div className="ml-auto text-[10px] text-white/30 uppercase tracking-widest font-bold">perfil.ts</div>
      </div>

      {/* BODY */}
      <div className="p-8 space-y-1">
        <div><span className="text-white/40 italic">// Perfil profissional</span></div>
        <div className="h-2" />
        <div>
          <span className="text-[#c792ea]">const</span> <span className="text-[#00ff94]">dev</span> = {'{'}
        </div>
        <div className="pl-6">
          <span className="text-white/70">nome:</span> <span className="text-[#00e5ff]">"José Bernardo"</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">alias:</span> <span className="text-[#00e5ff]">"bersou"</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">local:</span> <span className="text-[#00e5ff]">"Gravataí · RS 🇧🇷"</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">formação:</span> <span className="text-[#00e5ff]">"Ciências da Computação"</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">stack:</span> [
          <span className="text-[#00e5ff]">"React"</span>, <span className="text-[#00e5ff]">"Next.js"</span>,
        </div>
        <div className="pl-14">
          <span className="text-[#00e5ff]">"TypeScript"</span>, <span className="text-[#00e5ff]">"Node"</span>],
        </div>
        <div className="pl-6">
          <span className="text-white/70">qualidade:</span> <span className="text-[#00e5ff]">"Lean Six Sigma"</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">status:</span> <span className="text-[#f78c6c]">open_to_work</span>,
        </div>
        <div className="pl-6">
          <span className="text-white/70">missão:</span> <span className="text-[#00e5ff]">"Código + Qualidade"</span>
        </div>
        <div>{'}'}</div>
      </div>
      
      {/* DECORATIVE GRADIENT */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
