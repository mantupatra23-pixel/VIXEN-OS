'use client';
import React, { useState, useEffect } from 'react';

export default function VixenUniversalBridge() {
  const [stats, setStats] = useState({ sent: 1842, profit: 12450, slots: 5 });
  const [terminalLog, setTerminalLog] = useState("Initializing VIXEN Core...");
  const [showProof, setShowProof] = useState(false);
  const [activeProof, setActiveProof] = useState("");

  const logs = [
    "Targeting: KuCoin_Whales_Group...",
    "User Match: Michael_UK detected.",
    "Injecting Groq-Llama3 closing logic...",
    "Scanning high-intent leads in SaaS_USA...",
    "Connection Secured: AES-256 Protocol.",
    "AI status: Generating high-ticket pitch...",
    "Lead Scraped: Retro_Alpha_UK...",
    "Status: Delivering Sniper Message..."
  ];

  const proofs = [
    "Retro_UK just earned $150 commission",
    "Founder_Ind just cloned the engine",
    "Sarah_USA reached $1k milestone today",
    "Crypto_King successfully integrated API",
    "New license activated in London (UK)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        sent: prev.sent + Math.floor(Math.random() * 5),
        profit: prev.profit + (Math.random() > 0.95 ? 150 : 0),
        slots: prev.slots > 1 && Math.random() > 0.98 ? prev.slots - 1 : prev.slots
      }));
      setTerminalLog(logs[Math.floor(Math.random() * logs.length)]);
      if (Math.random() > 0.8) {
        setActiveProof(proofs[Math.floor(Math.random() * proofs.length)]);
        setShowProof(true);
        setTimeout(() => setShowProof(false), 4000);
      }
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const AFFILIATE_LINK = "https://systeme.io/?sa=sa026984945780d4279e42aa7f2fb45eb698a43702"; 

  return (
    <main style={styles.main}>
      <div style={styles.bgGlow}></div>

      {/* Social Proof Notification */}
      <div style={{...styles.proofPopup, transform: showProof ? 'translateX(0)' : 'translateX(400px)', opacity: showProof ? 1 : 0}}>
         <span style={{color: '#4ade80', marginRight: '8px'}}>●</span> {activeProof}
      </div>

      <div style={styles.container}>
        {/* Left Side: Info & Headline */}
        <div style={styles.infoSection}>
          <div style={styles.badge}>MANTU AI // ELITE_CORE_V3</div>
          <h1 style={styles.title}>
            Autonomous <span style={styles.blueText}>Revenue</span><br/> 
            At Scale
          </h1>
          <p style={styles.subtitle}>
            VIXEN OS neural infrastructure is currently hunting high-ticket whales in USA/UK markets. Join the elite 1% of AI Automators.
          </p>
          
          <div style={styles.desktopOnlyCta}>
             <a href={AFFILIATE_LINK} style={styles.cta}>CLONE SYSTEM NOW 🚀</a>
          </div>
        </div>

        {/* Right Side: Terminal & Stats */}
        <div style={styles.visualSection}>
          <div style={styles.terminal}>
            <div style={styles.terminalHeader}>
               <div style={{display:'flex', gap:5}}><div style={styles.dot}></div><div style={styles.dot}></div><div style={styles.dot}></div></div>
               <span style={{fontSize:9, fontWeight:'bold', color:'#333'}}>VIXEN_ENGINE_LOGS</span>
            </div>
            <div style={styles.terminalBody}>{terminalLog}</div>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statBoxFull}>
               <span style={styles.statLabel}>TOTAL NETWORK PROFIT</span>
               <span style={styles.profitValue}>${stats.profit.toLocaleString()}</span>
            </div>
            <div style={styles.statBox}>
               <span style={styles.statLabel}>MESSAGES</span>
               <span style={styles.statVal}>{stats.sent.toLocaleString()}</span>
            </div>
            <div style={styles.statBox}>
               <span style={styles.statLabel}>SLOTS_LEFT</span>
               <span style={{...styles.statVal, color: '#ff4b2b'}}>{stats.slots}</span>
            </div>
          </div>

          <div style={styles.mobileOnlyCta}>
             <a href={AFFILIATE_LINK} style={styles.cta}>CLONE SYSTEM NOW 🚀</a>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <span>USA_UK_TERMINAL</span> <span>|</span> <span>SECURE_V3</span> <span>|</span> <span>BY MANTU AI</span>
      </footer>
    </main>
  );
}

const styles = {
  main: { background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', fontFamily: '"JetBrains Mono", monospace', color: '#fff', position: 'relative', overflowX: 'hidden' },
  bgGlow: { position: 'absolute', top: '10%', left: '50%', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', transform: 'translateX(-50%)', pointerEvents: 'none' },
  proofPopup: { position: 'fixed', top: '40px', right: '40px', background: '#080808', border: '1px solid #111', padding: '15px 25px', borderRadius: '15px', fontSize: '12px', transition: '0.6s ease', zIndex: 100, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' },
  container: { width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '50px', alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  infoSection: { flex: '1 1 450px', textAlign: 'left' },
  visualSection: { flex: '1 1 400px', maxWidth: '450px', background: 'rgba(5,5,5,0.8)', padding: '30px', borderRadius: '40px', border: '1px solid #111', backdropFilter: 'blur(20px)' },
  badge: { fontSize: '10px', letterSpacing: '4px', color: '#333', fontWeight: '900', marginBottom: '20px' },
  title: { fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: '900', lineHeight: '1', marginBottom: '25px', letterSpacing: '-3px' },
  blueText: { color: '#3b82f6', textShadow: '0 0 30px rgba(59,130,246,0.4)' },
  subtitle: { fontSize: '16px', color: '#555', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px' },
  terminal: { background: '#000', border: '1px solid #111', borderRadius: '15px', overflow: 'hidden', marginBottom: '25px' },
  terminalHeader: { background: '#080808', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #111' },
  dot: { width: 6, height: 6, borderRadius: '50%', background: '#222' },
  terminalBody: { padding: '20px', fontSize: '12px', color: '#4ade80', minHeight: '40px' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' },
  statBoxFull: { gridColumn: 'span 2', background: '#000', border: '1px solid #111', padding: '20px', borderRadius: '20px' },
  statBox: { background: '#000', border: '1px solid #111', padding: '15px', borderRadius: '15px' },
  statLabel: { display: 'block', fontSize: '8px', color: '#222', fontWeight: 'bold', marginBottom: '10px' },
  profitValue: { fontSize: '36px', fontWeight: '900', color: '#4ade80' },
  statVal: { fontSize: '22px', fontWeight: 'bold' },
  cta: { display: 'inline-block', background: '#fff', color: '#000', padding: '20px 40px', borderRadius: '18px', textDecoration: 'none', fontWeight: '900', fontSize: '16px', width: '100%', textAlign: 'center' },
  desktopOnlyCta: { display: 'block', marginTop: '20px' },
  mobileOnlyCta: { display: 'none' },
  footer: { position: 'absolute', bottom: '40px', fontSize: '10px', color: '#111', display: 'flex', gap: '15px', fontWeight: '900' },

  // Responsive Styles for Mobile
  '@media (max-width: 900px)': {
    container: { flexDirection: 'column', textAlign: 'center', gap: '40px' },
    infoSection: { textAlign: 'center' },
    desktopOnlyCta: { display: 'none' },
    mobileOnlyCta: { display: 'block' },
    footer: { position: 'relative', marginTop: '50px', bottom: 'auto' }
  }
};
