"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Server, BrainCircuit, PanelsTopLeft, Database, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techGroups = [
  { title:"Backend", items:["Java","Spring Boot","Node.js","FastAPI","REST APIs"] },
  { title:"AI / ML", items:["Python","YOLO","Computer Vision","RAG","LLM APIs"] },
  { title:"Mobile / Frontend", items:["Flutter","React Native","TypeScript","JavaScript","HTML","CSS"] },
  { title:"Data & Infrastructure", items:["PostgreSQL","MongoDB","MySQL","Docker","Firebase","Railway"] },
  { title:"Development Tools", items:["Git","GitHub","Postman","n8n","Jira","Confluence","Claude","Codex"] },
];

const copy = {
 en:{nav:["About","Projects","Stack","Experience","Contact"],role:"Software Engineer",focus:"FULL-STACK  ·  AI / ML  ·  MOBILE",intro:"I build production-oriented applications with a focus on backend engineering, AI/ML integration and end-to-end product development.",work:"Explore my projects",contact:"Contact",status:"OPEN TO SOFTWARE ENGINEERING ROLES",location:"İzmir, Türkiye · Open to relocation",scroll:"SCROLL TO EXPLORE",about:"ABOUT / FOCUS",aboutTitle:"I like building the part behind the interface.",aboutText:"Software Engineer focused on backend-heavy full-stack development, AI/ML integration and production-oriented applications. Currently focusing on Generative AI, LLMs and RAG.",stack:"TECHNOLOGY STACK",stackTitle:"Tools I use to turn ideas into working systems.",exp:"EXPERIENCE / EDUCATION",selected:"SELECTED PROJECTS",workTitle:"Building intelligent systems from backend to interface.",workText:"Selected projects where I designed and connected the backend, data, AI and mobile layers.",contactKicker:"06 / CONTACT",contactTitle:"Let's build what's next.",contactText:"I'm open to Software Engineering opportunities where I can contribute across backend, AI/ML and full-stack product development.",email:"Email",locationFooter:"İZMİR, TÜRKİYE · OPEN TO RELOCATION"},
};

const focusCards=[
 {icon:Server,title:"Backend Engineering",text:"REST APIs · Authentication · Databases · System Architecture · Docker"},
 {icon:BrainCircuit,title:"AI / ML",text:"Computer Vision · YOLO · AI integrations · Model APIs · Python / FastAPI"},
 {icon:PanelsTopLeft,title:"Product Development",text:"Flutter · React Native · Full-stack systems · Mobile apps · Deployment"}
];


const eksperSlides = [
 { image:"https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/home.jpeg", eyebrow:"AI VEHICLE ASSISTANT", title:"Manage your vehicle from one dashboard.", text:"Start a damage analysis, follow your vehicle and reach maintenance information from a single place." },
 { image:"https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/tracking.jpeg", eyebrow:"VEHICLE TRACKING", title:"Maintenance and reminders, kept together.", text:"Track maintenance history, upcoming reminders and the vehicle's latest visible-damage status." },
 { image:"https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/analyses.jpeg", eyebrow:"ANALYSIS HISTORY", title:"Completed inspections, always within reach.", text:"Review previous vehicle damage analyses and open their AI-generated reports from one organized history." },
 { image:"https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/ai-analysis.jpeg", eyebrow:"COMPUTER VISION", title:"Turn a vehicle photo into structured damage insight.", text:"The analysis flow detects visible damage and surfaces severity, affected areas and model confidence." },
 { image:"https://raw.githubusercontent.com/GorkemErtas/ekspersiz/master/docs/screenshots/report.jpeg", eyebrow:"AI REPORTING", title:"From detection to an actionable inspection report.", text:"AI-assisted reports summarize damage, repair recommendations and estimated repair-cost context." },
];

function EksperProjectPanel(){
 const [page,setPage]=useState<"preview"|"system">("preview");
 const [active,setActive]=useState(0);
 const [direction,setDirection]=useState(1);
 const slide=eksperSlides[active];
 useEffect(()=>{
  eksperSlides.forEach(({image})=>{const img=new Image();img.decoding="async";img.src=image;});
 },[]);
 const changeSlide=(step:number)=>{setDirection(step);setActive(v=>(v+step+eksperSlides.length)%eksperSlides.length)};
 return <div className="projectSidePanel">
  <div className="sidePanelTabs">
   <button className={page==="preview"?"active":""} onClick={()=>setPage("preview")}>APP PREVIEW</button>
   <button className={page==="system"?"active":""} onClick={()=>setPage("system")}>SYSTEM DESIGN</button>
  </div>
  <div className="sidePanelBody">
   {page==="preview" ? <motion.div className="miniShowcase" key="preview" initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{duration:.25}}>
    <div className="miniCopy"><span>{slide.eyebrow}</span><h4>{slide.title}</h4><p>{slide.text}</p></div>
    <div className="miniDevice"><motion.img key={slide.image} src={slide.image} alt={slide.title} decoding="async" initial={{opacity:0,x:direction*42,scale:.985}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.38,ease:[.22,.7,.2,1]}}/></div>
    <div className="miniNav"><button onClick={()=>changeSlide(-1)} aria-label="Previous screenshot">←</button><span>{String(active+1).padStart(2,"0")} / {String(eksperSlides.length).padStart(2,"0")}</span><button onClick={()=>changeSlide(1)} aria-label="Next screenshot">→</button></div>
   </motion.div> :
   <motion.div className="architecture embeddedArchitecture" key="system" initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{duration:.25}}>
    <div className="archTitle">SYSTEM ARCHITECTURE</div><div className="archFlow"><div className="archNode"><Smartphone/><span><strong>Flutter</strong><small>Android Client</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>Spring Boot</strong><small>REST API · Auth · Business Logic</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>PostgreSQL + pgvector</strong><small>App Data · Vector Search</small></span></div></div><div className="archConnector"><span>BACKEND INTEGRATIONS</span></div><div className="archServiceGrid"><div className="archNode"><BrainCircuit/><span><strong>FastAPI + YOLO</strong><small>Vehicle & Damage Detection</small></span></div><div className="archNode"><Code2/><span><strong>LLM Integration</strong><small>AI Reports · Assistant</small></span></div><div className="archNode"><Code2/><span><strong>External Services</strong><small>Maps · FCM · RevenueCat · Brevo</small></span></div></div><div className="pipeline"><strong>AI PROCESSING FLOW</strong><span>Photo → Validation → Vehicle Detection → Damage Detection → Part Matching → AI Report</span></div><div className="pipeline"><strong>AI ASSISTANT · IN DEVELOPMENT</strong><span>Question → Intent & Scope → RAG Retrieval / Authorized Tools → Evidence-grounded Answer</span></div>
   </motion.div>}
  </div>
 </div>
}

export default function Home(){
 const t=copy.en; const anchors=["#about","#projects","#stack","#experience","#contact"];
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
  <nav className="nav"><a className="mark" href="#top">GE<span>.</span></a><div className="navLinks">{t.nav.map((x,i)=><a href={anchors[i]} key={x}>{x}</a>)}</div></nav>
  <section id="top" className="hero">
   <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><div className="eyebrow"><span>01</span>{t.role}</div><h1><span>GÖRKEM</span><span className="outline">ERTAŞ</span></h1><div className="focus">{t.focus}</div><p className="intro">{t.intro}</p><div className="actions"><a className="primary" href="#projects">{t.work}<ArrowDown size={17}/></a><a className="secondary" href="mailto:gorkemertas2002@hotmail.com?subject=Portfolio%20Contact">{t.contact}<Mail size={17}/></a></div></motion.div>
   <div className="heroPortrait"><div className="portraitFrame"><img src="https://raw.githubusercontent.com/GorkemErtas/portfolio/main/pp/portfolio.jpeg" alt="Görkem Ertaş" /></div><div className="portraitAccent" aria-hidden="true"/></div>
   <div className="availability"><i/><div><strong>{t.status}</strong><span>{t.location}</span></div></div><a className="scroll" href="#about">{t.scroll}<ArrowDown size={15}/></a>
  </section>

  <section id="about" className="section"><div className="sectionLabel"><span>02</span>{t.about}</div><div className="aboutGrid"><div><h2>{t.aboutTitle}</h2><p className="lead">{t.aboutText}</p></div><div className="focusGrid">{focusCards.map(({icon:Icon,title,text},i)=><motion.div className="focusCard" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><Icon size={23}/><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></motion.div>)}</div></div></section>

  <section id="projects" className="section work"><div className="sectionLabel"><span>03</span>{t.selected}</div><div className="sectionHead"><h2>{t.workTitle}</h2><p>{t.workText}</p></div>
   <article className="projectCard eksperCard"><div className="projectInfo"><div className="projectMeta"><span>PERSONAL PROJECT</span><i/><span>FEATURED</span><i/><span>GOOGLE PLAY CLOSED TESTING</span><i/><time>2026 — PRESENT</time></div><h3>EksperSiz</h3><p>An Android app for vehicle management and AI-assisted damage inspections. It uses computer vision to identify visible damage and generate repair reports, with maintenance tracking, business accounts and finalized PDF damage records. A RAG-based vehicle assistant is also in development.</p><div className="projectHighlights"><span>AI vehicle inspection</span><span>Vehicle & maintenance tracking</span><span>Nearby automotive services</span><span>Business accounts & shared vehicles</span><span>Freemium billing & report credits</span><span>Finalized damage records & PDF export</span><span>RAG vehicle assistant (in development)</span><span>Notifications & inspection reminders</span></div><div className="tags">{["Flutter","Dart","Java 21","Spring Boot","Spring Security","PostgreSQL","pgvector","FastAPI","Python","YOLO","RAG","LLM APIs","Firebase FCM","RevenueCat","Google Maps & Places","Brevo","Docker","Railway"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks"><a className="repoLink" href="https://github.com/GorkemErtas/ekspersiz" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>GITHUB</small><strong>Source code</strong></span><ArrowUpRight className="repoArrow" size={16}/></a><div className="storeBadge" aria-label="Google Play release pending"><span className="playIcon">▶</span><span><small>GOOGLE PLAY</small><strong>Coming soon</strong></span></div></div></div><EksperProjectPanel /></article>
   <article className="projectCard projectSecondary"><div className="projectInfo"><div className="projectMeta"><span>PERSONAL PROJECT</span><i/><span>LIVE DEMO</span><i/><time>2026</time></div><h3>Lead Sales Automation</h3><p>A working sales automation demo that follows leads from intake to conversion and shows how advertising costs, revenue and profitability connect. Built around a practical reporting workflow, with an interactive dashboard to try it out.</p><div className="projectHighlights"><span>Lead intake & sales tracking</span><span>Automated reporting</span><span>Representative profitability & ROI</span><span>Interactive dashboard</span></div><div className="tags">{["Python","FastAPI","PostgreSQL","SQLAlchemy","n8n","Google Sheets","Docker","Railway","Pytest"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks"><a className="repoLink" href="https://github.com/GorkemErtas/lead-sales-automation" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>GITHUB</small><strong>Source code</strong></span><ArrowUpRight className="repoArrow" size={16}/></a><a className="repoLink" href="https://lead-sales-automation-production.up.railway.app/dashboard" target="_blank" rel="noreferrer"><span className="repoIcon"><ArrowUpRight size={17}/></span><span><small>LIVE DEMO</small><strong>Try dashboard</strong></span><ArrowUpRight className="repoArrow" size={16}/></a></div></div><div className="architecture"><div className="archTitle">AUTOMATION FLOW</div><div className="archFlow"><div className="archNode"><Code2/><span><strong>n8n</strong><small>Simulated Lead Webhooks</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>FastAPI</strong><small>Leads · Sales · Analytics</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>PostgreSQL</strong><small>Application Data</small></span></div></div><div className="archConnector"><span>REPORTING & INSIGHTS</span></div><div className="archServiceGrid two"><div className="archNode"><Code2/><span><strong>Google Sheets</strong><small>Automated Reports</small></span></div><div className="archNode"><PanelsTopLeft/><span><strong>Live Dashboard</strong><small>Conversion · Profit · ROI</small></span></div></div><div className="pipeline"><strong>DEMO DATA</strong><span>Uses simulated leads and synthetic sales data; no live Meta Ads connection.</span></div></div></article>
   <article className="projectCard projectSecondary"><div className="projectInfo"><div className="projectMeta"><span>UNIVERSITY CAPSTONE</span><i/><span>4-PERSON TEAM</span><i/><span>FULL-STACK CONTRIBUTOR</span><i/><time>2024 — 2025</time></div><h3>Investing Hub</h3><p>A cross-platform investment and learning platform built as a four-person university capstone. It combines live crypto-market tracking, portfolio management and trade simulation with educational content, price alerts, push notifications and ML-powered short-term price predictions.</p><div className="contribution"><strong>MY CONTRIBUTION</strong><p>Full-stack development across the React Native / Expo client and Node.js backend, with a stronger focus on backend engineering, API integration, authentication and data flows.</p></div><div className="tags">{["React Native","Expo","TypeScript","Node.js","Express","MongoDB","JWT","Firebase FCM","ONNX Runtime","Docker","REST APIs"].map(x=><span key={x}>{x}</span>)}</div><div className="projectLinks singleAction"><a className="repoLink" href="https://github.com/GorkemErtas/Investing-Hub" target="_blank" rel="noreferrer"><span className="repoIcon"><Github size={17}/></span><span><small>GITHUB</small><strong>Source code</strong></span><ArrowUpRight className="repoArrow" size={16}/></a></div></div><div className="architecture"><div className="archTitle">SYSTEM ARCHITECTURE</div><div className="archFlow"><div className="archNode"><Smartphone/><span><strong>React Native + Expo</strong><small>Mobile / Web Client</small></span></div><b>→</b><div className="archNode archNodePrimary"><Server/><span><strong>Node.js + Express</strong><small>REST API · Auth · Application Logic</small></span></div><b>→</b><div className="archNode"><Database/><span><strong>MongoDB</strong><small>Users · Portfolio Data</small></span></div></div><div className="archConnector"><span>BACKEND INTEGRATIONS</span></div><div className="archServiceGrid two"><div className="archNode"><BrainCircuit/><span><strong>ONNX Models</strong><small>ML Price Prediction</small></span></div><div className="archNode"><Code2/><span><strong>Market APIs + FCM</strong><small>Live Market Data · Alerts</small></span></div></div></div></article>
  </section>

  <section id="stack" className="section stackSection"><div className="sectionLabel"><span>04</span>{t.stack}</div><div className="sectionHead"><h2>{t.stackTitle}</h2></div><div className="stackGrid">{techGroups.map((g,i)=><div className="stackGroup" key={g.title}><span>0{i+1}</span><h3>{g.title}</h3><div>{g.items.map(x=><em key={x}>{x}</em>)}</div></div>)}</div><div className="stackNote"><Code2 size={17}/> No arbitrary skill percentages — technologies are grouped by where I use them.</div></section>

  <section id="experience" className="section experience"><div className="sectionLabel"><span>05</span>{t.exp}</div><div className="timeline"><div className="timelineItem"><span>2024</span><div><h3>IT Intern · GDZ Elektrik Dağıtım A.Ş.</h3><p>IT support analysis, operations and documentation; exposure to corporate infrastructure and software processes.</p></div></div><div className="timelineItem"><span>2020 — 2025</span><div><h3>B.Sc. Software Engineering · Yasar University</h3><p>Full scholarship.</p></div></div></div></section>
  <section id="contact" className="contactSection"><div><span className="contactKicker">{t.contactKicker}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contactLinks"><a href="mailto:gorkemertas2002@hotmail.com?subject=Portfolio%20Contact"><Mail size={18}/><span><strong>{t.email}</strong></span><ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/gorkem-ertas/" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn<ArrowUpRight size={15}/></a><a href="https://github.com/GorkemErtas" target="_blank" rel="noreferrer"><Github size={18}/>GitHub<ArrowUpRight size={15}/></a></div></section><footer><span>GÖRKEM ERTAŞ · SOFTWARE ENGINEER</span><span>{t.locationFooter}</span></footer>
 </main>
}
