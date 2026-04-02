"use client";
import { useState, useEffect, useRef } from "react";

// NOIR — "Shadow Luxury" aesthetic
// Palette: near-black / warm sand / muted plum / cream / silver
const C = {
  base:    "#0B0A0C", surface: "#13111A", panel: "#1A1722",
  border:  "rgba(242,231,216,0.07)", sand: "#D2B98B",
  sandDim: "rgba(210,185,139,0.15)", plum: "#4D3947",
  plumGlow:"rgba(77,57,71,0.3)", cream: "#F2E7D8",
  muted:   "rgba(242,231,216,0.45)", dim: "rgba(242,231,216,0.22)",
  silver:  "#A6A3A0",
};
const F = { serif: "'Cormorant Garamond','Playfair Display',Georgia,serif", sans: "'DM Sans',system-ui,sans-serif", mono: "'DM Mono',monospace" };

const TICKETS = [
  { date: "May 17, 2026",  url: "https://huglife.vercel.app/tickets" },
  { date: "Jul 19, 2026",  url: "https://huglife.vercel.app/tickets" },
  { date: "Sep 6, 2026",   url: "https://huglife.vercel.app/tickets" },
];

function useInView(t=0.1){const ref=useRef(null

      {/* VENUE */}
      <div style={{padding:"48px 24px", textAlign:"center", borderTop:"1px solid rgba(255,255,255,0.07)"}}>
        <p style={{fontSize:"10px", letterSpacing:"4px", color:"#C9A84C", textTransform:"uppercase", marginBottom:"12px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>Location</p>
        <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:300, color:"#fff", marginBottom:"8px"}}>
          The Gallery Complex
        </h3>
        <p style={{color:"#666", fontSize:"13px", letterSpacing:"1px", marginBottom:"20px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          245 Ted Turner Drive SW, Atlanta, GA 30303
        </p>
        <a href="https://maps.google.com/?q=245+Ted+Turner+Drive+SW+Atlanta+GA+30303" target="_blank" rel="noopener noreferrer"
          style={{display:"inline-block", padding:"11px 26px", border:"1px solid rgba(201,168,76,0.35)", color:"#C9A84C", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", textDecoration:"none", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          Get Directions →
        </a>
      </div>
);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.035,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;

function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}>
<style>{`@media(max-width:768px){
  .dg,.DG,[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
  .nl,.desktop-nav{display:none!important}
  .fg,.stat-grid,.feature-grid{grid-template-columns:1fr!important}
  .eg{grid-template-columns:1fr!important}
  h1,h2,.hero-title{word-break:break-word}
  nav{padding:16px!important}
  section{padding-left:16px!important;padding-right:16px!important}
}`}</style>

<div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.sand,marginBottom:"2px"}}>A KHG Experience</div><span style={{fontFamily:F.serif,fontSize:"22px",fontWeight:400,fontStyle:"italic",color:C.cream,letterSpacing:"0.04em"}}>NOIR</span></div>
<div className="nl" style={{display:"flex",gap:"clamp(16px,2vw,32px)",alignItems:"center"}}>
{["Experience","Gallery"].map(n=><a key={n} href={`#${n.toLowerCase()}`} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.2em",textTransform:"uppercase",color:C.muted,textDecoration:"none",transition:"color 0.3s"}} onMouseEnter={e=>(e.target as HTMLAnchorElement).style.color=C.cream} onMouseLeave={e=>(e.target as HTMLAnchorElement).style.color=C.muted}>{n}</a>)}
<a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.sand,padding:"10px 24px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
</div></nav>);}

function Hero(){const[ld,setLd]=useState(false);useEffect(()=>{setTimeout(()=>setLd(true),100)},[]);
return(<section style={{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:C.base,display:"flex",alignItems:"flex-end"}}>
<div style={{position:"absolute",inset:0}}>
  {/* BG photo — luxury nightlife atmosphere */}
  <img src="/images/noir-atmosphere.jpg" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.18,filter:"brightness(0.5) saturate(0.6)"}}/>
  <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 60%, ${C.plumGlow} 0%, transparent 55%)`}}/>
  <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 30%, ${C.sandDim} 0%, transparent 50%)`}}/>
  <Grain/>
</div>
<div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(11,10,12,0.98) 0%, rgba(11,10,12,0.5) 50%, transparent 100%)"}}/>
{/* NOIR watermark */}
<div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontFamily:F.serif,fontSize:"clamp(120px,22vw,320px)",fontWeight:400,fontStyle:"italic",color:"rgba(242,231,216,0.025)",letterSpacing:"-0.05em",whiteSpace:"nowrap",pointerEvents:"none"}}>NOIR</div>

<div style={{position:"relative",zIndex:2,width:"100%",padding:"0 clamp(32px,5vw,80px) clamp(60px,7vh,96px)",maxWidth:"1400px",margin:"0 auto"}}>
  <div style={{opacity:ld?1:0,transition:"opacity 0.8s ease 0.3s",fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.sand,marginBottom:"20px"}}>Atlanta · A KHG Experience · 2026</div>
  <div style={{overflow:"hidden",marginBottom:"8px"}}><h1 style={{fontFamily:F.serif,fontSize:"clamp(72px,14vw,200px)",fontWeight:400,fontStyle:"italic",lineHeight:0.85,color:C.cream,margin:0,opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(100%)",transition:"all 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s"}}>NOIR</h1></div>
  <p style={{fontFamily:F.serif,fontSize:"clamp(16px,2vw,26px)",fontStyle:"italic",color:C.sand,marginBottom:"40px",opacity:ld?1:0,transition:"opacity 1s ease 0.9s"}}>Where the night begins.</p>
  <p style={{fontFamily:F.sans,fontSize:"clamp(13px,1.1vw,16px)",lineHeight:1.85,color:C.muted,maxWidth:"420px",marginBottom:"44px",opacity:ld?1:0,transition:"opacity 1s ease 1.1s"}}>Atlanta&apos;s premier luxury nightlife experience. Dark energy, elevated aesthetics, an atmosphere built for those who move differently.</p>
  <div style={{display:"flex",gap:"14px",flexWrap:"wrap",opacity:ld?1:0,transition:"opacity 1s ease 1.4s"}}>
    <a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:C.base,background:C.sand,padding:"15px 48px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
    <a href="mailto:thekollectiveworldwide@gmail.com?subject=NOIR VIP Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"15px 36px",textDecoration:"none",display:"inline-block"}}>Reserve VIP Table</a>
  </div>
</div></section>);}

function Experience(){
const pillars=[{t:"The Atmosphere",d:"Dark, deliberate, and cinematic. Every detail from lighting to music is engineered for a specific feeling.",n:"01"},{t:"The Sound",d:"A DJ experience built for movement. Deep house, Afrobeats, R&B, and hip-hop curated by Atlanta's finest.",n:"02"},{t:"The Crowd",d:"Stylish, social, intentional. NOIR attracts people who value ambiance as much as the night itself.",n:"03"},{t:"The Aesthetic",d:"Fashion-forward dress code. Dark elegance is the standard. Come dressed for the moment.",n:"04"}];
return(<section id="experience" style={{background:C.base,padding:"120px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
{/* BG photo — crowd energy */}
<img src="/images/noir-crowd.jpg" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.12,filter:"brightness(0.45) saturate(0.5)",pointerEvents:"none"}}/>
<div style={{maxWidth:"1400px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.sand,marginBottom:"16px"}}>The Experience</div>
<h2 style={{fontFamily:F.serif,fontSize:"clamp(36px,5.5vw,76px)",fontWeight:400,fontStyle:"italic",color:C.cream,lineHeight:0.95,marginBottom:"64px"}}>More than a party.<br/><em style={{color:C.sand}}>An atmosphere.</em></h2></Reveal>
<div className="dg" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"2px",background:C.border}}>
{pillars.map((p,i)=><Reveal key={p.t} d={i*0.08}>
<div style={{background:C.surface,padding:"48px 40px",position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:0,left:0,width:"2px",height:"100%",background:`linear-gradient(180deg,${C.sand},transparent)`}}/>
  <div style={{fontFamily:F.mono,fontSize:"10px",color:C.sand,opacity:0.5,marginBottom:"16px"}}>{p.n}</div>
  <div style={{fontFamily:F.serif,fontSize:"clamp(20px,2.5vw,30px)",fontStyle:"italic",color:C.cream,marginBottom:"12px"}}>{p.t}</div>
  <p style={{fontFamily:F.sans,fontSize:"13px",lineHeight:1.75,color:C.muted}}>{p.d}</p>
</div></Reveal>)}
</div></div></section>);}

function Tickets(){const[sel,setSel]=useState(0);return(
<section id="tickets" style={{background:C.surface,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<img src="/images/noir-dj.jpg" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.1,filter:"brightness(0.4) saturate(0.5)",pointerEvents:"none"}}/>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.plumGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.sand,marginBottom:"16px"}}>Secure Your Entry</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"56px"}}>
<h2 style={{fontFamily:F.serif,fontSize:"clamp(36px,6vw,84px)",fontWeight:400,fontStyle:"italic",color:C.cream,lineHeight:0.9}}>Get Your Tickets</h2>
<p style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"320px",lineHeight:1.75}}>Limited capacity. Doors at 10PM. Dress code strictly enforced.</p>
</div></Reveal>
{/* Date cards */}
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px",background:`${C.sand}20`,marginBottom:"3px"}}>
{TICKETS.map((t,i)=><Reveal key={t.date} d={i*0.07}>
<div onClick={()=>setSel(i)} style={{background:sel===i?`linear-gradient(145deg,${C.panel},${C.surface})`:C.base,padding:"36px 28px",cursor:"pointer",borderTop:`2px solid ${sel===i?C.sand:"transparent"}`,transition:"all 0.3s"}}>
  <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"14px"}}>
    <div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 6px #4ADE80",animation:"pulse 2s infinite"}}/>
    <span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale</span>
  </div>
  <div style={{fontFamily:F.serif,fontSize:"clamp(18px,2vw,26px)",fontStyle:"italic",color:C.cream,marginBottom:"8px"}}>{t.date}</div>
  <div style={{fontFamily:F.sans,fontSize:"11px",color:sel===i?C.sand:C.muted,marginBottom:"20px"}}>Atlanta, GA</div>
  <a href={t.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:sel===i?C.base:C.cream,background:sel===i?C.sand:"transparent",border:sel===i?"none":`1px solid ${C.border}`,padding:"13px 28px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}}>Buy Tickets →</a>
</div></Reveal>)}
</div>
{/* Secondary */}
<Reveal d={0.2}><div style={{background:C.base,padding:"32px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px",borderLeft:`2px solid ${C.sand}40`}}>
<div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.sand,marginBottom:"8px"}}>Groups & VIP</div>
<div style={{fontFamily:F.serif,fontSize:"clamp(16px,2vw,22px)",fontStyle:"italic",color:C.cream}}>Private tables, group entry, and VIP access</div></div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=NOIR VIP Table Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.sand,padding:"12px 28px",textDecoration:"none",display:"inline-block"}}>Reserve VIP</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=NOIR Group Entry Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"12px 24px",textDecoration:"none",display:"inline-block"}}>Group Entry</a>
</div></div></Reveal>
<div style={{marginTop:"28px",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>
{["Powered by Eventbrite","Secure Checkout","21+ Event","Dress Code Enforced"].map(s=><div key={s} style={{fontFamily:F.mono,fontSize:"9px",color:"rgba(255,255,255,0.18)",letterSpacing:"0.2em"}}>{s}</div>)}
</div></div>
<style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}
</style>
</section>);}

function FAQ(){const[open,setOpen]=useState<number|null>(null);
const faqs=[{q:"What is the dress code?",a:"Dark elegance. Think fashion-forward black, jewel tones, and statement pieces. No athletic wear, sneakers, or overly casual attire."},{q:"What time do doors open?",a:"Doors open at 10PM. Last entry at 1AM. The experience runs until 3AM."},{q:"Is there a VIP option?",a:"Yes — private table reservations with bottle service available. Email for pricing and availability."},{q:"Age requirement?",a:"21+ with valid government-issued ID. No exceptions."},{q:"Where is NOIR held?",a:"Atlanta, GA. Venue announced 48 hours before each event. Confirmed guests receive location via email."},{q:"Can I get a refund?",a:"Tickets are non-refundable but transferable. Eventbrite refund policy applies for event cancellations."}];
return(<section style={{background:C.base,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<img src="/images/noir-fashion.jpg" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.08,filter:"brightness(0.4) saturate(0.4)",pointerEvents:"none"}}/>
<div style={{maxWidth:"780px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.serif,fontSize:"clamp(36px,5vw,64px)",fontWeight:400,fontStyle:"italic",color:C.cream,marginBottom:"48px"}}>FAQ</div></Reveal>
{faqs.map((f,i)=><div key={f.q} style={{borderBottom:`1px solid ${C.border}`}}>
<button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"22px 0",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",gap:"16px"}}>
<span style={{fontFamily:F.serif,fontSize:"clamp(15px,1.8vw,20px)",fontStyle:"italic",color:open===i?C.cream:C.muted,textAlign:"left",transition:"color 0.3s"}}>{f.q}</span>
<span style={{fontFamily:F.sans,fontSize:"20px",color:C.sand,flexShrink:0,transform:open===i?"rotate(45deg)":"rotate(0)",transition:"transform 0.3s"}}>+</span>
</button>
<div style={{maxHeight:open===i?"160px":"0",overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.16,1,0.3,1)"}}>
<p style={{fontFamily:F.sans,fontSize:"13px",lineHeight:1.8,color:C.dim,paddingBottom:"20px"}}>{f.a}</p>
</div></div>)}
</div></section>);}

function Footer(){return(<footer style={{background:"#070609",borderTop:`1px solid ${C.border}`,padding:"48px clamp(32px,5vw,80px) 32px"}}>
<div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"32px"}}>
<div><div style={{fontFamily:F.serif,fontSize:"28px",fontStyle:"italic",color:C.cream,marginBottom:"6px"}}>NOIR</div>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:C.sand}}>A KHG HUGLIFE EVENT</div>
<p style={{fontFamily:F.sans,fontSize:"12px",color:C.muted,marginTop:"10px",maxWidth:"240px",lineHeight:1.65}}>Atlanta&apos;s premier luxury nightlife experience.</p></div>
<div style={{display:"flex",gap:"48px",flexWrap:"wrap"}}>
{[{h:"Event",l:["Experience","Gallery","FAQ"]},{h:"Connect",l:["Get Tickets","Reserve VIP","@thekollectiveworldwide","thekollectiveworldwide@gmail.com"]}].map(col=><div key={col.h}>
<div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.sand,marginBottom:"14px"}}>{col.h}</div>
<ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"}}>{col.l.map(item=><li key={item} style={{fontFamily:F.sans,fontSize:"12px",color:C.muted}}>{item}</li>)}</ul>
</div>)}
</div></div>
<div style={{maxWidth:"1400px",margin:"28px auto 0",paddingTop:"20px",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"}}>
<div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>© 2026 NOIR. A KHG Enterprise.</div>
<div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>Privacy · Terms</div>
</div></footer>);}

export default function NOIRSite(){return(<div style={{background:C.base,overflowX:'hidden'}}><Nav/><Hero/><Experience/><Tickets/><FAQ/><Footer/></div>);}
