'use client';
import React, { useState, useEffect } from 'react';

export default function VixenUltraFinal() {
  // --- STATES FOR PSYCHOLOGICAL TRIGGERS ---
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
      // Increment Stats
      setStats(prev => ({
        sent: prev.sent + Math.floor(Math.random() * 5),
        profit: prev.profit + (Math.random() > 0.95 ? 150 : 0),
        slots: prev.slots > 1 && Math.random() > 0.98 ? prev.slots - 1 : prev.slots
      }));
      
      // Rotate Terminal Logs
      setTerminalLog(logs[Math.floor(Math.random() * logs.length)]);
      
      // Social Proof Notification Logic
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
      <div style={styles.glowTop}></div>

      {/* --- Floating Social Proof --- */}
      <div style={{...styles.proofPopup, transform: showProof ? 'translateY(0)' : 'translateY(100px)', opacity: showProof ? 1 : 0}}>
         <span style={{color: '#4ade80', marginRight: '8px'}}>●</span> {activeProof}
      </div>

      <div style={styles.card}>
        <div style={styles.badge}>MANTU AI // ELITE_TERMINAL_V3</div>
        
        <h1 style={styles.title}>
          Autonomous <span style={styles.blueText}>Revenue</span><br/> 
          At Scale
        </h1>

        <p style={styles.subtitle}>
          VIXEN OS neural infrastructure is currently hunting high-ticket whales in USA/UK markets.
        </p>

        {/* --- AI Live Terminal --- */}
        <div style={styles.terminal}>
          <div style={styles.terminalHeader}>
            <div style={{display:'flex', gap:'5px'}}>
              <div style={{width:6, height:6, borderRadius:'50%', background:'#ff5f56'}}></div>
              <div style={{width:6, height:6, borderRadius:'50%', background:'#ffbd2e'}}></div>
              <div style={{width:6, height:6, borderRadius:'50%', background:'#27c93f'}}></div>
            </div>
            <span style={{fontSize:8, color:'#444', fontWeight: 'bold'}}>VIXEN_ENGINE_LOGS</span>
          </div>
          <div style={styles.terminalBody}>
            {terminalLog}
          </div>
        </div>

        {/* --- Profit & Stats Section --- */}
        <div style={styles.statsContainer}>
          <div style={styles.statBoxFull}>
            <span style={styles.statLabel}>TOTAL NETWORK PROFIT (USD)</span>
            <span style={styles.profitValue}>${stats.profit.toLocaleString()}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>MESSAGES</span>
            <span style={styles.statValue}>{stats.sent.toLocaleString()}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>SLOTS_LEFT</span>
            <span style={{...styles.statValue, color: '#ff4b2b'}}>{stats.slots}</span>
          </div>
        </div>

        <a href={AFFILIATE_LINK} style={styles.cta}>
          CLONE THIS SYSTEM NOW 🚀
          <span style={styles.ctaSub}>Join the elite 1% of AI Automators</span>
        </a>

        <div style={styles.footer}>
          <span>USA_UK_TERMINAL</span>
          <span style={{opacity: 0.1}}>|</span>
          <span>SECURE_V3</span>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: { background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: '"JetBrains Mono", monospace', color: '#fff', overflow: 'hidden', position: 'relative' },
  glowTop: { position: 'absolute', top: '-10%', left: '50%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', transform: 'translateX(-50%)' },
  proofPopup: { position: 'fixed', bottom: '30px', background: 'rgba(15,15,15,0.95)', border: '1px solid #222', padding: '15px 25px', borderRadius: '20px', fontSize: '11px', transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)', zIndex: 100, color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' },
  card: { background: 'rgba(5, 5, 5, 0.9)', backdropFilter: 'blur(30px)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px 25px', borderRadius: '40px', width: '100%', maxWidth: '410px', textAlign: 'center', zIndex: 1, boxShadow: '0 40px 100px rgba(0,0,0,0.8)' },
  badge: { fontSize: '8px', letterSpacing: '4px', color: '#333', fontWeight: '900', marginBottom: '25px' },
  title: { fontSize: '34px', fontWeight: '800', lineHeight: '1', marginBottom: '20px', letterSpacing: '-2px' },
  blueText: { color: '#3b82f6', textShadow: '0 0 25px rgba(59,130,246,0.5)' },
  subtitle: { fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '35px', maxWidth: '300px', margin: '0 auto 35px' },
  terminal: { background: '#000', border: '1px solid #111', borderRadius: '15px', overflow: 'hidden', marginBottom: '30px', textAlign: 'left' },
  terminalHeader: { background: '#080808', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #111' },
  terminalBody: { padding: '18px', fontSize: '11px', color: '#4ade80', minHeight: '35px', fontFamily: 'monospace' },
  statsContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '35px' },
  statBoxFull: { gridColumn: 'span 2', background: 'rgba(255,255,255,0.02)', padding: '22px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '5px' },
  statBox: { background: 'rgba(255,255,255,0.01)', padding: '15px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)' },
  statLabel: { display: 'block', fontSize: '7px', color: '#333', fontWeight: '800', letterSpacing: '1px', marginBottom: '8px' },
  profitValue: { fontSize: '36px', fontWeight: '900', color: '#4ade80', fontFamily: 'monospace' },
  statValue: { fontSize: '22px', fontWeight: '900', fontFamily: 'monospace' },
  cta: { display: 'block', background: '#fff', color: '#000', padding: '22px', borderRadius: '22px', textDecoration: 'none', fontWeight: '900', fontSize: '16px', transition: 'transform 0.2s ease' },
  ctaSub: { display: 'block', fontSize: '9px', fontWeight: '400', marginTop: '4px', opacity: 0.5 },
  footer: { marginTop: '35px', fontSize: '8px', color: '#111', display: 'flex', justifyContent: 'center', gap: '12px', fontWeight: '900', letterSpacing: '2px' }
};
