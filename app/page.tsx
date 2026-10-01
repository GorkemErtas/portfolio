"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const copy = {
  en: {
    nav: ["Work", "About", "Stack", "Experience"],
    role: "Software Engineer",
    focus: "AI / ML  ·  BACKEND  ·  FULL-STACK",
    intro: "I build production-oriented applications with a focus on backend engineering, AI/ML integration and end-to-end product development.",
    work: "Explore my work",
    contact: "Contact",
    status: "OPEN TO SOFTWARE ENGINEERING ROLES",
    location: "İzmir, Türkiye · Open to relocation",
    scroll: "SCROLL TO EXPLORE",
    selected: "SELECTED WORK",
    statement: "Building intelligent systems from backend to interface.",
  },
  tr: {
    nav: ["Projeler", "Hakkımda", "Teknolojiler", "Deneyim"],
    role: "Yazılım Mühendisi",
    focus: "AI / ML  ·  BACKEND  ·  FULL-STACK",
    intro: "Backend mühendisliği, AI/ML entegrasyonu ve uçtan uca ürün geliştirmeye odaklanan uygulamalar geliştiriyorum.",
    work: "Projelerimi incele",
    contact: "İletişim",
    status: "YAZILIM MÜHENDİSLİĞİ FIRSATLARINA AÇIK",
    location: "İzmir, Türkiye · Taşınmaya açık",
    scroll: "KEŞFETMEK İÇİN KAYDIR",
    selected: "SEÇİLİ PROJELER",
    statement: "Backend'den arayüze akıllı sistemler geliştiriyorum.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "tr">("en");
  const t = copy[lang];
  const anchors = ["#work", "#about", "#stack", "#experience"];

  return (
    <main className="shell">
      <div className="ambient" />
      <nav className="nav">
        <a className="mark" href="#top">GE<span>.</span></a>
        <div className="navLinks">{t.nav.map((item, i) => <a href={anchors[i]} key={item}>{item}</a>)}</div>
        <div className="navRight">
          <a aria-label="GitHub" href="https://github.com/GorkemErtas" target="_blank" rel="noreferrer"><Github size={18}/></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/gorkem-ertas/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
          <button className="lang" onClick={() => setLang(lang === "en" ? "tr" : "en")}><b>{lang.toUpperCase()}</b><span>/</span>{lang === "en" ? "TR" : "EN"}</button>
        </div>
      </nav>

      <section id="top" className="hero">
        <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><span>01</span>{t.role}</div>
          <h1><span>GÖRKEM</span><span className="outline">ERTAŞ</span></h1>
          <div className="focus">{t.focus}</div>
          <p className="intro">{t.intro}</p>
          <div className="actions">
            <a className="primary" href="#work">{t.work}<ArrowDown size={17}/></a>
            <a className="secondary" href="mailto:gorkemertas2002@hotmail.com">{t.contact}<Mail size={17}/></a>
          </div>
        </motion.div>

        <motion.div className="system" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}}>
          <div className="orbit orbit1"/><div className="orbit orbit2"/>
          <div className="line l1"/><div className="line l2"/><div className="line l3"/>
          {["AI / ML","FastAPI","BACKEND","Spring Boot","PostgreSQL","MOBILE","Flutter"].map((node,i) =>
            <div key={node} className={"node n"+i}><i/>{node}</div>
          )}
          <div className="core"><span>GE</span><small>ENGINEERING</small></div>
        </motion.div>

        <div className="availability"><i/><div><strong>{t.status}</strong><span>{t.location}</span></div></div>
        <a className="scroll" href="#work">{t.scroll}<ArrowDown size={15}/></a>
      </section>

      <section id="work" className="placeholder">
        <span>02 / {t.selected}</span>
        <h2>{t.statement}</h2>
        <a href="https://github.com/GorkemErtas/ekspersiz" target="_blank" rel="noreferrer">EksperSiz <ArrowUpRight size={18}/></a>
      </section>
    </main>
  );
}
