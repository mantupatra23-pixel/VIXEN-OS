'use client';
import React, { useState, useEffect } from 'react';

export default function VixenMasterFinal() {
  // --- 1. CONFIGURATION (Apne Links Update Karein) ---
  const AFFILIATE_LINK = "https://systeme.io/?sa=sa026984945780d4279e42aa7f2fb45eb698a43702"; 
  const BLUEPRINT_LINK = "https://systeme.io/vixen-blueprint"; // $19 Checkout Link
  const TELEGRAM_USER = "https://t.me/mantupatra"; // Aapka Telegram Handle

  // --- 2. STATES FOR PSYCHOLOGY & LIVE STATS ---
  const [stats, setStats] = useState({ sent: 1864, profit: 12600, slots: 5 });
  const [terminalLog, setTerminalLog] = useState("Initializing VIXEN Core...");
  const [showProof, setShowProof] = useState(false);
  const [activeProof, setActiveProof] = useState("");

  const logs = [
    "Targeting: KuCoin_Whales...", "Injecting Llama3 Logic...", 
    "User Match: Michael_UK detected.", "Redirecting to Vercel Bridge...", 
    "Connection Secured: AES-256", "AI Status: Generating Pitch...",
    "Scanning SaaS_Builders_USA...", "Payload Delivered Successfully."
  ];

  const proofs = [
    "Sarah just earned $450 commission", 
    "New system clone in London (UK)", 
    "Blueprint sold to Founder_X ($19)", 
    "Mantu AI Dashboard Sync: 100%",
    "Lead from NYC successfully closed"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        sent: prev.sent + Math.floor(Math.random() * 5) + 1,
        profit: prev.profit + (Math.random() > 0.96 ? 150 : 0),
        slots: prev.slots > 1 && Math.random() > 0.99 ? prev.slots - 1 : prev.slots
      }));
      setTerminalLog(logs[Math.floor(Math.random() * logs.length)]);
      
      if (Math.random() > 0.85) {
        setActiveProof(proofs[Math.floor(Math.random() * proofs.length)]);
        setShowProof(true);
        setTimeout(() => setShowProof(false), 4000);
      }
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="vixen-root">
      <style jsx global>{`
        body { margin: 0; background: #000; font-family: 'JetBrains Mono', monospace; color: #fff; overflow-x: hidden; }
        .vixen-root { min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; position: relative; }
        .bg-glow { position: absolute; top: 0; left: 50%; width: 100%; height: 100%; background: radial-gradient(circle at 50% 10%, rgba(59,130,246,0.12) 0%, transparent 60%); transform: translateX(-50%); pointer-events: none; z-index: 0; }
        
        .hero-container { width: 100%; max-width: 1100px; display: flex; flex-direction: row; flex-wrap: wrap; gap: 60px; z-index: 1; align-items: center; margin-bottom: 80px; }
        .info-side { flex: 1.2; min-width: 320px; }
        .card-side { flex: 1; min-width: 320px; max-width: 440px; background: rgba(10,10,10,0.8); padding: 40px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(30px); box-shadow: 0 40px 100px rgba(0,0,0,0.8); }

        .badge { font-size: 10px; letter-spacing: 4px; color: #333; font-weight: 900; margin-bottom: 20px; text-transform: uppercase; }
        .main-title { font-size: clamp(38px, 6vw, 65px); font-weight: 900; line-height: 1; margin: 0 0 25px 0; letter-spacing: -3px; }
        .blue-gradient { color: #3b82f6; text-shadow: 0 0 30px rgba(59,130,246,0.5); }
        .hero-desc { color: #666; font-size: 16px; line-height: 1.7; margin-bottom: 40px; max-width: 500px; }

        .terminal { background: #000; border: 1px solid #111; border-radius: 20px; overflow: hidden; margin-bottom: 25px; text-align: left; }
        .t-header { background: #080808; padding: 12px 15px; display: flex; justify-content: space-between; border-bottom: 1px solid #111; }
        .t-body { padding: 25px; font-size: 12px; color: #4ade80; min-height: 40px; font-family: 'Courier New', monospace; }

        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
        .stat-main { grid-column: span 2; background: #000; border: 1px solid #1a1a1a; padding: 25px; border-radius: 25px; text-align: center; }
        .stat-sub { background: #000; border: 1px solid #1a1a1a; padding: 18px; border-radius: 20px; text-align: center; }
        .label { font-size: 8px; color: #333; font-weight: bold; margin-bottom: 10px; display: block; letter-spacing: 1px; }

        .revenue-section { width: 100%; max-width: 1100px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; z-index: 1; }
        .product-card { background: #0a0a0a; border: 1px solid #111; padding: 35px; border-radius: 35px; border: 1px solid rgba(255,255,255,0.03); transition: 0.3s ease; }
        .product-card:hover { border-color: #3b82f6; transform: translateY(-5px); }
        .price-text { color: #4ade80; font-size: 32px; font-weight: 900; margin: 20px 0; display: block; }

        .btn-primary { display: block; background: #fff; color: #000; padding: 22px; border-radius: 22px; text-decoration: none; font-weight: 900; text-align: center; font-size: 18px; transition: 0.2s; }
        .btn-secondary { display: block; background: #111; color: #fff; padding: 18px; border-radius: 18px; text-decoration: none; text-align: center; font-weight: 800; font-size: 14px; margin-top: 20px; }
        .btn-blue { background: #3b82f6; color: #fff; }

        .notif-popup { position: fixed; bottom: 30px; left: 30px; background: #0d0d0d; border: 1px solid #222; padding: 15px 25px; border-radius: 15px; font-size: 12px; z-index: 1000; transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 20px 50px rgba(0,0,0,0.7); }

        @media (max-width: 900px) {
          .hero-container { flex-direction: column; text-align: center; margin-bottom: 50px; }
          .info-side { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .card-side { max-width: 100%; width: 100%; box-sizing: border-box; }
        }
      `}</style>

      <div className="bg-glow"></div>
      
      {/* --- Live Proof Notification --- */}
      <div className="notif-popup" style={{ opacity: showProof ? 1 : 0, transform: showProof ? 'translateY(0)' : 'translateY(100px)' }}>
        <span style={{ color: '#4ade80', marginRight: '10px' }}>●</span> {activeProof}
      </div>

      <div className="hero-container">
        {/* --- Information Side --- */}
        <div className="info-side">
          <div className="badge">Project Identity // VIXEN_OS_V4</div>
          <h1 className="main-title">Autonomous <br/><span className="blue-gradient">Revenue</span> Engine</h1>
          <p className="hero-desc">
            The elite AI infrastructure for high-ticket SaaS & Crypto closures. Currently sniper-targeting whales in USA/UK markets with 100% autonomy. Built for founders, by Mantu AI.
          </p>
          <div className="terminal" style={{width: '100%', maxWidth: '500px'}}>
            <div className="t-header">
              <div style={{display:'flex', gap:6}}>
                <div style={{width:7,height:7,background:'#ff5f56',borderRadius:'50%'}}></div>
                <div style={{width:7,height:7,background:'#ffbd2e',borderRadius:'50%'}}></div>
                <div style={{width:7,height:7,background:'#27c93f',borderRadius:'50%'}}></div>
              </div>
              <span style={{fontSize:9, color:'#444', fontWeight:'bold'}}>LIVE_CORE_FEED</span>
            </div>
            <div className="t-body">{terminalLog}</div>
          </div>
        </div>

        {/* --- Main Stats Card --- */}
        <div className="card-side">
          <div className="stats-grid">
            <div className="stat-main">
              <span className="label">TOTAL NETWORK PROFIT (USD)</span>
              <span style={{ fontSize: '42px', fontWeight: 900, color: '#4ade80' }}>${stats.profit.toLocaleString()}</span>
            </div>
            <div className="stat-sub">
              <span className="label">MESSAGES</span>
              <span style={{ fontSize: '22px', fontWeight: 800 }}>{stats.sent.toLocaleString()}</span>
            </div>
            <div className="stat-sub">
              <span className="label">FOUNDER SLOTS</span>
              <span style={{ fontSize: '22px', fontWeight: 800, color: '#ff4b2b' }}>{stats.slots}</span>
            </div>
          </div>
          <a href={AFFILIATE_LINK} className="btn-primary">CLONE THIS SYSTEM NOW 🚀</a>
        </div>
      </div>

      {/* --- Revenue Stream Options --- */}
      <div className="revenue-section">
        <div className="product-card">
          <div className="badge" style={{color:'#444'}}>Digital Guide</div>
          <h3 style={{margin:'10px 0', fontSize:24}}>The VIXEN Blueprint</h3>
          <p style={{fontSize:13, color:'#555', margin:'0'}}>Don't want to clone? Learn the exact AI-to-Telegram sniper logic behind this engine.</p>
          <span className="price-text">$19.00</span>
          <a href={BLUEPRINT_LINK} className="btn-secondary">GET THE BLUEPRINT</a>
        </div>

        <div className="product-card" style={{border: '1px solid rgba(59,130,246,0.2)'}}>
          <div className="badge" style={{color:'#3b82f6'}}>Managed SaaS</div>
          <h3 style={{margin:'10px 0', fontSize:24}}>Engine Hosting</h3>
          <p style={{fontSize:13, color:'#555', margin:'0'}}>We host your sniper and manage the Groq AI logic for you. You keep 100% of commissions.</p>
          <span className="price-text">$99/mo</span>
          <a href={TELEGRAM_USER} className="btn-secondary btn-blue">RESERVE MY SLOT</a>
        </div>
      </div>

      <footer style={{marginTop:100, fontSize:9, color:'#222', letterSpacing:4, textAlign:'center', textTransform:'uppercase'}}>
        USA_UK_TERMINAL // SECURE_V4 // MANTU AI FOUNDER EDITION
      </footer>
    </main>
  );
}
