'use client';
import React, { useState, useEffect } from 'react';

export default function VixenEliteBridge() {
  // --- FAKE DATA LOGIC (For Social Proof) ---
  const [stats, setStats] = useState({ 
    sent: 1842, 
    replies: 142, 
    profit: 12450 
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        sent: prev.sent + Math.floor(Math.random() * 3) + 1,
        replies: prev.replies + (Math.random() > 0.8 ? 1 : 0),
        profit: prev.profit + (Math.random() > 0.95 ? 150 : 0)
      }));
    }, 30000); // Har 30 sec mein data thoda badhega
    return () => clearInterval(timer);
  }, []);

  const AFFILIATE_LINK = "https://systeme.io/?sa=sa026984945780d4279e42aa7f2fb45eb698a43702"; 

  return (
    <main style={styles.main}>
      <div style={styles.glowTop}></div>
      <div style={styles.card}>
        <div style={styles.badge}>MANTU AI // ELITE TERMINAL</div>
        
        <h1 style={styles.title}>
          Automate <span style={styles.gradientText}>$1,200/Day</span><br/> 
          With Neural Engines
        </h1>

        <p style={styles.subtitle}>
          VIXEN OS is active. Sniper-targeting USA/UK whales with autonomous high-ticket closing logic.
        </p>

        {/* --- PROFIT & STATS SECTION --- */}
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
            <span style={styles.statLabel}>AI CLOSURES</span>
            <span style={{...styles.statValue, color: '#3b82f6'}}>{stats.replies}</span>
          </div>
        </div>

        <div style={styles.statusLine}>
          <span style={styles.pulseDot}></span>
          <span style={styles.statusText}>ENGINE: <span style={{color: '#4ade80'}}>HUNTING_LEADS</span></span>
        </div>

        <a href={AFFILIATE_LINK} style={styles.cta}>
          CLONE THIS SYSTEM NOW
          <span style={styles.ctaSub}>Join the elite 1% of AI Automators</span>
        </a>

        <div style={styles.footer}>
          <span>USA_UK_MARKET</span>
          <span style={{opacity: 0.2}}>|</span>
          <span>SECURE_V2</span>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: { background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: '"Inter", sans-serif', color: '#fff', overflow: 'hidden', position: 'relative' },
  glowTop: { position: 'absolute', top: '-10%', left: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', transform: 'translateX(-50%)' },
  card: { background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px 30px', borderRadius: '40px', width: '100%', maxWidth: '420px', textAlign: 'center', zIndex: 1, boxShadow: '0 40px 100px rgba(0,0,0,0.5)' },
  badge: { fontSize: '9px', letterSpacing: '4px', color: '#444', fontWeight: '900', marginBottom: '25px' },
  title: { fontSize: '30px', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' },
  gradientText: { color: '#3b82f6', textShadow: '0 0 20px rgba(59,130,246,0.4)' },
  subtitle: { fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '35px' },
  statsContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '30px' },
  statBoxFull: { gridColumn: 'span 2', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '5px' },
  statBox: { background: 'rgba(255,255,255,0.01)', padding: '15px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)' },
  statLabel: { display: 'block', fontSize: '8px', color: '#333', fontWeight: '800', letterSpacing: '1px', marginBottom: '8px' },
  profitValue: { fontSize: '32px', fontWeight: '900', color: '#4ade80', fontFamily: 'monospace' },
  statValue: { fontSize: '20px', fontWeight: '900', fontFamily: 'monospace' },
  statusLine: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '35px' },
  pulseDot: { width: '7px', height: '7px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' },
  statusText: { fontSize: '10px', fontWeight: '900', color: '#222', letterSpacing: '1px' },
  cta: { display: 'block', background: '#fff', color: '#000', padding: '20px', borderRadius: '22px', textDecoration: 'none', fontWeight: '900', fontSize: '16px' },
  ctaSub: { display: 'block', fontSize: '9px', fontWeight: '400', marginTop: '4px', opacity: 0.4 },
  footer: { marginTop: '35px', fontSize: '8px', color: '#1a1a1a', display: 'flex', justifyContent: 'center', gap: '10px', fontWeight: '900' }
};
