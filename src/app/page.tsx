'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import * as Lucide from 'lucide-react';

// Defensive component for icons
const Icon = ({ name, size = 20 }: { name: string, size?: number }) => {
  // @ts-ignore
  const LucideIcon = Lucide[name] || Lucide.Code2 || Lucide.ChevronRight;
  return <LucideIcon size={size} />;
};

const LogoBadge = ({ name, color, icon }: { name: string, color: string, icon?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -2 }}
    className={`px-4 py-1.5 rounded-md text-[10px] font-bold tracking-widest border border-white/10 flex items-center gap-2 cursor-default shadow-lg shadow-black/50 ${color}`}
  >
    {icon && <img src={icon} alt="" className="w-3 h-3 opacity-80" />}
    {name.toUpperCase()}
  </motion.div>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const WhatsappIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

const GmailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 5.75c0-.966-.784-1.75-1.75-1.75H3.75c-.966 0-1.75.784-1.75 1.75v12.5c0 .966.784 1.75 1.75 1.75h16.5c.966 0 1.75-.784 1.75-1.75V5.75Z"/><path d="m22 5.75-10 6.75-10-6.75"/></svg>
);

const projects = [
  {
    title: "PPCI-Seguro",
    subtitle: "Gestão de Segurança",
    color: "bg-red-500/10 text-red-500",
    desc: "Plataforma avançada para monitoramento e gestão de Planos de Prevenção Contra Incêndio.",
    link: "https://github.com/bersou/PPCI-Seguro"
  },
  {
    title: "ImobLarApp",
    subtitle: "Real Estate Tech",
    color: "bg-brand-orange/10 text-brand-orange",
    desc: "Aplicação progressiva para busca e visualização inteligente de propriedades imobiliárias.",
    link: "https://github.com/bersou/ImobLarApp"
  },
  {
    title: "ColorSnap",
    subtitle: "AI Color Assistant",
    color: "bg-brand-gold/10 text-brand-gold",
    desc: "Identificação de cores via IA com sugestões de pintura e integração com lojas físicas para compra.",
    link: "https://github.com/bersou/ColorSnap"
  }
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
    }

    // Dynamic greeting logic
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let text = "BOM DIA";
      if (hour >= 12 && hour < 18) text = "BOA TARDE";
      if (hour >= 18 || hour < 5) text = "BOA NOITE";
      setGreeting(text);
    };

    updateGreeting();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-brand-gold/20 selection:text-brand-gold">
      
      {/* NOON WAVE + FIRE VIDEO BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          onEnded={(e) => { 
            const v = e.target as HTMLVideoElement;
            v.play(); 
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110 blur-[2px]"
        >
          <source src="https://assets.mixkit.co/videos/8470/8470-720.mp4" type="video/mp4" />
        </video>
        <div className="noon-wave" />
        <div className="fire-accent" />
        <div className="noon-line top-[45%]" />
        <div className="noon-line top-[55%] opacity-30" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 px-6 py-8 flex justify-end items-center max-w-7xl mx-auto">
        <div className="flex gap-4">
          <a href="#projects" className="glass-bento px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Projetos</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-24 pb-32 md:pt-40 md:pb-48 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* DYNAMIC GREETING BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 flex justify-center"
          >
            <div className="px-5 py-1.5 glass-bento rounded-full border border-brand-orange/20">
               <span className="text-[10px] font-black tracking-[0.4em] text-brand-orange">
                {greeting}, SEJA BEM-VINDO AO MEU ESPAÇO
               </span>
            </div>
          </motion.div>

          <motion.h1 
            whileHover={{ 
              scale: 1.02, 
              textShadow: "0 0 60px rgba(255,69,0,0.8)",
            }}
            className="text-huge opacity-95 drop-shadow-[0_0_40px_rgba(255,69,0,0.4)] cursor-default transition-all duration-500"
          >
            BERNARDO
          </motion.h1>
          <p className="mt-8 text-sm md:text-base text-white/50 font-light tracking-[0.4em] uppercase">
            Eficiência industrial através de web Sistem
          </p>
          
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4 max-w-sm md:max-w-none mx-auto px-4 overflow-hidden place-items-center">
            <motion.a whileHover={{ y: -5 }} href="https://github.com/bersou" target="_blank" className="p-4 rounded-full glass-bento hover:text-brand-gold transition-all flex items-center justify-center w-full" title="GitHub">
              <GithubIcon size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://linkedin.com/in/josemoraesbernardo" target="_blank" className="p-4 rounded-full glass-bento hover:text-brand-gold transition-all flex items-center justify-center w-full" title="LinkedIn">
              <LinkedinIcon size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.instagram.com/jose_bernardo._/" target="_blank" className="p-4 rounded-full glass-bento hover:text-[#E4405F] transition-all flex items-center justify-center w-full" title="Instagram">
              <InstagramIcon size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.facebook.com/profile.php?id=61587713060348" target="_blank" className="p-4 rounded-full glass-bento hover:text-[#1877F2] transition-all flex items-center justify-center w-full" title="Facebook">
              <FacebookIcon size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://wa.me/5551984648522" target="_blank" className="p-4 rounded-full glass-bento hover:text-[#25D366] transition-all flex items-center justify-center w-full" title="WhatsApp">
              <WhatsappIcon size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="mailto:josemoraesbernardo@gmail.com" className="p-4 rounded-full glass-bento hover:text-brand-gold transition-all flex items-center justify-center w-full" title="Email">
              <GmailIcon size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* BENTO PROJECTS CARDS */}
      <section id="projects" className="relative z-10 px-6 pb-40 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
                key={i}
                href={p.link}
                target="_blank"
                initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="glass-bento p-10 flex flex-col justify-between h-[350px] overflow-hidden group"
            >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{p.subtitle}</div>
                    <div className="text-3xl font-black">{p.title}</div>
                  </div>
                  <LogoBadge name="Case" color={p.color} />
                </div>
                <div className="mt-auto">
                  <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">{p.desc}</p>
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explorar Repo <Icon name="ChevronRight" size={14} />
                  </div>
                </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* QUALITY & PROFILE SECTION */}
      <section id="experience" className="relative z-10 px-6 pb-48 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl font-black mb-12 uppercase tracking-tighter"
            >
              TÉCNICA E<br/><span className="text-white/20">DEDICAÇÃO</span>
            </motion.h2>
            <div className="space-y-4">
              {[
                { title: "Identificação de Defeitos", desc: "Especialista em ensaios físicos e visuais para garantir conformidade total na liberação de produtos." },
                { title: "Garantia de Rastreabilidade", desc: "Gestão complexa de documentação e rastreamento de dados para padrões industriais rigorosos." },
                { title: "Otimização Sistêmica", desc: "Prevenção de gargalos em ciclos de acabamento e liberação automotiva via análise de dados em tempo real." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-bento p-8 flex items-start gap-6 group hover:bg-brand-orange/[0.05] transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-all">
                    <Icon name="ShieldCheck" size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-brand-orange/40 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-64 h-64 md:w-96 md:h-96 glass-bento rounded-4xl overflow-hidden p-2">
                <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dnymahpi7/image/upload/v1774924019/PSX_20260111_105950_l7ygas.jpg"
                    alt="Bernardo"
                    fill
                    sizes="(max-width: 768px) 256px, 384px"
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="flex flex-wrap justify-center gap-3 max-w-sm mx-auto">
                   <LogoBadge name="React" color="bg-[#20232a] text-[#61DAFB]" icon="https://img.icons8.com/color/48/000000/react-native.png" />
                   <LogoBadge name="Vite" color="bg-[#646CFF] text-white" icon="https://img.icons8.com/color/48/000000/vite.png" />
                   <LogoBadge name="Tailwind" color="bg-[#38B2AC] text-white" icon="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                   <LogoBadge name="JS" color="bg-[#323330] text-[#F7DF1E]" icon="https://img.icons8.com/color/48/000000/javascript.png" />
                   <LogoBadge name="Python" color="bg-blue-500/20 text-blue-400" icon="https://img.icons8.com/color/48/000000/python.png" />
                   <LogoBadge name="PWA" color="bg-purple-500/20 text-purple-400" icon="https://img.icons8.com/color/48/000000/pwa.png" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative z-10 px-6 pb-48 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">PRONTO PARA<br/><span className="text-brand-orange drop-shadow-[0_0_20px_rgba(255,69,0,0.5)]">DESENVOLVER?</span></h2>
          <a href="mailto:josemoraesbernardo@gmail.com" className="glass-bento px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] inline-block hover:bg-brand-orange hover:text-white transition-all shadow-2xl shadow-brand-orange/20">Entrar em Contato</a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center gap-6">
        <div className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase">© 2026 TÉCNICA E DEDICAÇÃO // QUALIDADE & DEV WEB</div>
        <div className="flex gap-6 opacity-30">
           <a href="https://github.com/bersou" target="_blank" className="hover:text-white transition-colors"><GithubIcon size={18} /></a>
           <a href="https://linkedin.com/in/josemoraesbernardo" target="_blank" className="hover:text-white transition-colors"><LinkedinIcon size={18} /></a>
           <a href="https://www.instagram.com/jose_bernardo._/" target="_blank" className="hover:text-white transition-colors"><InstagramIcon size={18} /></a>
           <a href="https://www.facebook.com/profile.php?id=61587713060348" target="_blank" className="hover:text-white transition-colors"><FacebookIcon size={18} /></a>
        </div>
      </footer>

    </main>
  );
}
