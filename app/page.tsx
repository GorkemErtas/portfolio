"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Server, BrainCircuit, PanelsTopLeft, Database, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { copy, details, type Language } from "@/i18n/dictionaries";
import { useEffect, useState } from "react";







const eksperSlideImages = [
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/home.jpeg",
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/ai-assistant.jpeg",
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/tracking.jpeg",
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/analyses.jpeg",
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/ai-analysis.jpeg",
 "https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/report.jpeg",
];

function EksperProjectPanel({ language }: { language: Language }){
 const [page,setPage]=useState<"preview"|"system">("preview");
 const [active,setActive]=useState(0);
 const [direction,setDirection]=useState(1);
 const slides=details[language].slides.map((slide,index)=>({...slide,image:eksperSlideImages[index]}));
 const slide=slides[active];
 useEffect(()=>{
  eksperSlideImages.forEach((image)=>{const img=new Image();img.decoding="async";img.src=image;});
 },[]);
 const changeSlide=(step:number)=>{setDirection(step);setActive(v=>(v+step+slides.length)%slides.length)};
 return <div className="projectSidePanel">
  <div className="sidePanelTabs">
   <button className={page==="preview"?"active":""} onClick={()=>setPage("preview")}>{details[language].labels.preview}</button>
   <button className={page==="system"?"active":""} onClick={()=>setPage("system")}>{details[language].labels.systemDesign}</button>
  </div>
  <div className="sidePanelBody">
   {page==="preview" ? <motion.div className="miniShowcase" key="preview" initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{duration:.25}}>
    <div className="miniCopy"><span>{slide.eyebrow}</span><h4>{slide.title}</h4><p>{slide.text}</p></div>
    <div className="miniDevice"><motion.img key={slide.image} src={slide.image} alt={slide.title} decoding="async" initial={{opacity:0,x:direction*42,scale:.985}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.38,ease:[.22,.7,.2,1]}}/></div>
    <div className="miniNav"><button onClick={()=>changeSlide(-1)} aria-label={details[language].labels.previous}>←</button><span>{String(active+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span><button onClick={()=>changeSlide(1)} aria-label={details[language].labels.next}>→</button></div>
   </motion.div> :
   <motion.div className="architecture embeddedArchitecture" key="system" initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{duration:.25}}>
    <div className="archTitle">{details[language].system}</div><div className="archFlow"><div className="archNode"><Smartphone/><span><strong>Flutter</strong><small>{details[language].architecture[0]}</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>Spring Boot</strong><small>{details[language].architecture[1]}</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>PostgreSQL + pgvector</strong><small>{details[language].architecture[2]}</small></span></div></div><div className="archConnector"><span>{details[language].backendIntegrations}</span></div><div className="archServiceGrid"><div className="archNode"><BrainCircuit/><span><strong>FastAPI + YOLO</strong><small>{details[language].architecture[3]}</small></span></div><div className="archNode"><Code2/><span><strong>LLM Integration</strong><small>{details[language].architecture[4]}</small></span></div><div className="archNode"><Code2/><span><strong>External Services</strong><small>{details[language].architecture[5]}</small></span></div></div><div className="pipeline"><strong>{details[language].aiFlow}</strong><span>{details[language].pipelines[0]}</span></div><div className="pipeline"><strong>{details[language].assistantFlow}</strong><span>{details[language].pipelines[1]}</span></div>
   </motion.div>}
  </div>
 </div>
}

export default function Home(){
 const [language,setLanguage]=useState<Language>("tr"); const t=copy[language];
 useEffect(()=>{document.documentElement.lang=language;document.title=t.metaTitle;const description=document.querySelector('meta[name="description"]');if(description)description.setAttribute("content",t.metaDescription);},[language,t.metaTitle,t.metaDescription]); const techGroups=details[language].techGroups.map((title,i)=>({title,items:details[language].techItems[i]})); const focusCards=details[language].focusCards.map((item,i)=>({...item,icon:[Server,BrainCircuit,PanelsTopLeft][i]})); const anchors=["#about","#projects","#stack","#experience","#contact"];
 useEffect(()=>{
  const root=document.documentElement;
  const move=(e:PointerEvent)=>{root.style.setProperty("--mouse-x",e.clientX+"px");root.style.setProperty("--mouse-y",e.clientY+"px")};
  window.addEventListener("pointermove",move,{passive:true});

  const targets=Array.from(document.querySelectorAll(".sectionLabel,.sectionHead,.aboutGrid,.projectCard,.stackGrid,.stackNote,.timelineItem"));
  targets.forEach((el,i)=>{el.classList.add("revealOnView");(el as HTMLElement).style.setProperty("--reveal-delay",String((i%3)*55)+"ms")});
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("isVisible")});
  },{rootMargin:"-7% 0px -7% 0px",threshold:.08});
  targets.forEach(el=>observer.observe(el));

  return()=>{window.removeEventListener("pointermove",move);observer.disconnect()};
 },[]);
 return <main className="shell"><div className="cursorGlow" aria-hidden="true"/>
  <div className="ambient"/>
  <nav className="nav"><a className="mark" href="#top">GE<span>.</span></a><div className="navLinks">{t.nav.map((x,i)=><a href={anchors[i]} key={x}>{x}</a>)}<button className="languageToggle" type="button" onClick={()=>setLanguage(value=>value==="tr"?"en":"tr")} aria-label={language==="tr"?details[language].labels.switchToEnglish:details[language].labels.switchToTurkish}>{language==="tr"?"EN":"TR"}</button></div></nav>
  <section id="top" className="hero">
   <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><div className="eyebrow"><span>01</span>{t.role}</div><h1><span>GÖRKEM</span><span className="outline">ERTAŞ</span></h1><div className="focus">{t.focus}</div><p className="intro">{t.intro}</p><div className="actions"><a className="primary" href="#projects">{t.work}<ArrowDown size={17}/></a><a className="secondary" href="mailto:gorkemertas2002@hotmail.com?subject=Portfolio%20Contact">{t.contact}<Mail size={17}/></a></div></motion.div>
   <div className="heroPortrait"><div className="portraitFrame"><img src="https://raw.githubusercontent.com/GorkemErtas/portfolio/main/pp/portfolio.jpeg" alt="Görkem Ertaş" /></div><div className="portraitAccent" aria-hidden="true"/></div>
   <div className="availability"><i/><div><strong>{t.status}</strong><span>{t.location}</span></div></div><a className="scroll" href="#about">{t.scroll}<ArrowDown size={15}/></a>
  </section>

  <section id="about" className="section"><div className="sectionLabel"><span>02</span>{t.about}</div><div className="aboutGrid"><div><h2>{t.aboutTitle}</h2><p className="lead">{t.aboutText}</p></div><div className="focusGrid">{focusCards.map(({icon:Icon,title,text},i)=><motion.div className="focusCard" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><Icon size={23}/><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></motion.div>)}</div></div></section>

  <section id="projects" className="section work"><div className="sectionLabel"><span>03</span>{t.selected}</div><div className="sectionHead"><h2>{t.workTitle}</h2><p>{t.workText}</p></div>
   <article className="projectCard eksperCard"><div className="projectInfo"><div className="projectMeta"><span>{details[language].projectMeta[0]}</span><i/><span>{details[language].projectMeta[1]}</span><i/><span>{details[language].projectMeta[2]}</span><i/><time>2026 — {details[language].labels.present}</time></div><h3>EksperSiz</h3><p>{details[language].eksperDescription}</p><div className="projectHighlights">{details[language].projectHighlights[0].map(item=><span key={item}>{item}</span>)}</div><div className="tags">{["Flutter","Dart","Java 21","Spring Boot","Spring Security","PostgreSQL","pgvector","FastAPI","Python","YOLO","RAG","LLM APIs","Firebase FCM","RevenueCat","Google Maps & Places","Brevo","Docker","Railway"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks"><a className="repoLink" href="https://github.com/GorkemErtas/ekspersiz" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>{details[language].labels.github}</small><strong>{details[language].labels.source}</strong></span><ArrowUpRight className="repoArrow" size={16}/></a><div className="storeBadge" aria-label={details[language].labels.releasePending}><span className="playIcon">▶</span><span><small>{details[language].labels.googlePlay}</small><strong>{details[language].labels.comingSoon}</strong></span></div></div></div><EksperProjectPanel language={language} /></article>
   <article className="projectCard projectSecondary"><div className="projectInfo"><div className="projectMeta"><span>{details[language].projectMeta[0]}</span><i/><span>{details[language].projectMeta[6]}</span><i/><time>2026</time></div><h3>Lead Sales Automation</h3><p>{details[language].leadDescription}</p><div className="projectHighlights">{details[language].projectHighlights[1].map(item=><span key={item}>{item}</span>)}</div><div className="tags">{["Python","FastAPI","PostgreSQL","SQLAlchemy","n8n","Google Sheets","Docker","Railway","Pytest"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks"><a className="repoLink" href="https://github.com/GorkemErtas/lead-sales-automation" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>{details[language].labels.github}</small><strong>{details[language].labels.source}</strong></span><ArrowUpRight className="repoArrow" size={16}/></a><a className="repoLink" href="https://lead-sales-automation-production.up.railway.app/dashboard" target="_blank" rel="noreferrer"><span className="repoIcon"><ArrowUpRight size={17}/></span><span><small>{details[language].labels.liveDemo}</small><strong>{details[language].labels.dashboard}</strong></span><ArrowUpRight className="repoArrow" size={16}/></a></div></div><div className="architecture"><div className="archTitle">{details[language].architectureExtra.leadTitle}</div><div className="archFlow"><div className="archNode"><Code2/><span><strong>n8n</strong><small>{details[language].architectureExtra.webhooks}</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>FastAPI</strong><small>{details[language].architectureExtra.leadStats}</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>PostgreSQL</strong><small>{details[language].architectureExtra.appData}</small></span></div></div><div className="archConnector"><span>{details[language].architectureExtra.leadReporting}</span></div><div className="archServiceGrid two"><div className="archNode"><Code2/><span><strong>Google Sheets</strong><small>{details[language].architectureExtra.sheets}</small></span></div><div className="archNode"><PanelsTopLeft/><span><strong>{details[language].architectureExtra.dashboard}</strong><small>{details[language].architectureExtra.roi}</small></span></div></div><div className="pipeline"><strong>{details[language].architectureExtra.demoTitle}</strong><span>{details[language].architectureExtra.demoText}</span></div></div></article>
   <article className="projectCard projectSecondary"><div className="projectInfo"><div className="projectMeta"><span>{details[language].projectMeta[3]}</span><i/><span>{details[language].projectMeta[4]}</span><i/><span>{details[language].projectMeta[5]}</span><i/><time>2024 — 2025</time></div><h3>Investing Hub</h3><p>{details[language].investingDescription}</p><div className="contribution"><strong>{details[language].labels.myContribution}</strong><p>{details[language].contribution}</p></div><div className="tags">{["React Native","Expo","TypeScript","Node.js","Express","MongoDB","JWT","Firebase FCM","ONNX Runtime","Docker","REST APIs"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks singleAction"><a className="repoLink" href="https://github.com/GorkemErtas/Investing-Hub" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>GITHUB</small><strong>{details[language].labels.source}</strong></span><ArrowUpRight className="repoArrow" size={16}/></a></div></div><div className="architecture"><div className="archTitle">{details[language].architectureExtra.investingTitle}</div><div className="archFlow"><div className="archNode"><Smartphone/><span><strong>React Native + Expo</strong><small>{details[language].architectureExtra.mobileClient}</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>Node.js + Express</strong><small>{details[language].architectureExtra.restApi}</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>MongoDB</strong><small>{details[language].architectureExtra.portfolioData}</small></span></div></div><div className="archConnector"><span>{details[language].architectureExtra.integrations}</span></div><div className="archServiceGrid two"><div className="archNode"><BrainCircuit/><span><strong>ONNX Models</strong><small>{details[language].architectureExtra.mlPrediction}</small></span></div><div className="archNode"><Code2/><span><strong>Market APIs + FCM</strong><small>{details[language].architectureExtra.marketData}</small></span></div></div></div></article>
  </section>

  <section id="stack" className="section stackSection"><div className="sectionLabel"><span>04</span>{t.stack}</div><div className="sectionHead"><h2>{t.stackTitle}</h2></div><div className="stackGrid">{techGroups.map((g,i)=><div className="stackGroup" key={g.title}><span>0{i+1}</span><h3>{g.title}</h3><div>{g.items.map(x=><em key={x}>{x}</em>)}</div></div>)}</div><div className="stackNote"><Code2 size={17}/> {details[language].stackNote}</div></section>

  <section id="experience" className="section experience"><div className="sectionLabel"><span>05</span>{t.exp}</div><div className="timeline"><div className="timelineItem"><span>2024</span><div><h3>{details[language].timeline.internTitle}</h3><p>{details[language].timeline.intern}</p></div></div><div className="timelineItem"><span>2020 — 2025</span><div><h3>{details[language].timeline.degreeTitle}</h3><p>{details[language].timeline.degree}</p></div></div></div></section>
  <section id="contact" className="contactSection"><div><span className="contactKicker">{t.contactKicker}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contactLinks"><a href="mailto:gorkemertas2002@hotmail.com?subject=Portfolio%20Contact"><Mail size={18}/><span><strong>{t.email}</strong></span><ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/gorkem-ertas/" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn<ArrowUpRight size={15}/></a><a href="https://github.com/GorkemErtas" target="_blank" rel="noreferrer"><Github size={18}/>GitHub<ArrowUpRight size={15}/></a></div></section><footer><span>{details[language].labels.footerTitle}</span><span>{t.locationFooter}</span></footer>
 </main>
}
