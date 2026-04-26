'use client';
import React, { useState, useEffect } from 'react';

export default function VixenEliteBridge() {
  const [stats, setStats] = useState({ sent: '0', replies: '0' });
  const AFFILIATE_LINK = "https://systeme.io/?sa=sa026984945780d4279e42aa7f2fb45eb698a43702"; 
  const API_URL = "https://vixen-nkjh.onrender.com/api/stats";

  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        if (json.messages_sent) {
          setStats({ 
            sent: json.messages_sent.toLocaleString(), 
            replies: json.ai_replies.toLocaleString() 
          });
        }
      } catch (e) { console.log("Engine Syncing..."); }
    };
    fetchLiveStats();
    const interval = setInterval(fetchLiveStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.main}>
      {/* Background Glows */}
      <div style={styles.glowTop}></div>
      <div style={styles.glowBottom}></div>

      <div style={styles.card}>
        <div style={styles.badge}>MANTU AI // FOUNDER ACCESS</div>
        
        <h1 style={styles.title}>
          Automate <span style={styles.gradientText}>$1,200/Day</span><br/> 
          With Neural Engines
        </h1>

        <p style={styles.subtitle}>
          The VIXEN OS is live. Sniper-targeting high-ticket whales in USA/UK markets with 100% autonomy.
        </p>

        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>NETWORK MESSAGES</span>
            <span style={styles.statValue}>{stats.sent}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>AI CLOSURES</span>
            <span style={styles.statValue} className="blue">{stats.replies}</span>
          </div>
        </div>

        <div style={styles.statusLine}>
          <span style={styles.pulseDot}></span>
          <span style={styles.statusText}>ENGINE STATUS: <span style={{color: '#4ade80'}}>ACTIVE_SNIPER</span></span>
        </div>

        <a href={AFFILIATE_LINK} style={styles.cta}>
          CLONE THIS SYSTEM NOW
          <span style={styles.ctaSub}>Join the elite 1% using VIXEN v2.0</span>
        </a>

        <div style={styles.footer}>
          <span>USA_UK_MARKET_TERMINAL</span>
          <span style={{opacity: 0.3}}>//</span>
          <span>SECURE_ACCESS_V2</span>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '20px', fontFamily: '"Inter", sans-serif', color: '#fff', overflow: 'hidden', position: 'relative'
  },
  glowTop: {
    position: 'absolute', top: '-10%', left: '50%', width: '400px', height: '400px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', transform: 'translateX(-50%)', pointerEvents: 'none'
  },
  glowBottom: {
    position: 'absolute', bottom: '-10%', right: '10%', width: '300px', height: '300px',
    background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)', pointerEvents: 'none'
  },
  card: {
    background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)',
    padding: '50px 30px', borderRadius: '40px', width: '100%', maxWidth: '420px', textAlign: 'center', zIndex: 1,
    boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
  },
  badge: { fontSize: '10px', letterSpacing: '4px', color: '#555', fontWeight: '900', marginBottom: '30px' },
  title: { fontSize: '32px', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' },
  gradientText: { color: '#3b82f6', textShadow: '0 0 20px rgba(59,130,246,0.5)' },
  subtitle: { fontSize: '15px', color: '#888', lineHeight: '1.6', marginBottom: '40px', maxWidth: '300px', margin: '0 auto 40px' },
  statsContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' },
  statBox: { background: 'rgba(255,255,255,0.02)', padding: '20px 10px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)' },
  statLabel: { display: 'block', fontSize: '9px', color: '#444', fontWeight: '800', letterSpacing: '1px', marginBottom: '10px' },
  statValue: { fontSize: '24px', fontWeight: '900', fontFamily: 'monospace' },
  statusLine: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '40px' },
  pulseDot: { width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 12px #4ade80' },
  statusText: { fontSize: '11px', fontWeight: '900', color: '#333', letterSpacing: '1px' },
  cta: {
    display: 'block', background: '#fff', color: '#000', padding: '22px', borderRadius: '24px',
    textDecoration: 'none', fontWeight: '900', fontSize: '16px', transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(255,255,255,0.1)'
  },
  ctaSub: { display: 'block', fontSize: '10px', fontWeight: '400', marginTop: '5px', opacity: 0.4 },
  footer: { marginTop: '40px', fontSize: '8px', color: '#222', display: 'flex', justifyContent: 'center', gap: '10px', fontWeight: '900', letterSpacing: '2px' }
};
