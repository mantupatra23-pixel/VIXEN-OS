'use client';
import React, { useState, useEffect } from 'react';

export default function VixenMasterFinal() {
  // --- STATES FOR SALES PSYCHOLOGY ---
  const [stats, setStats] = useState({ sent: 1842, profit: 12450, slots: 5 });
  const [terminalLog, setTerminalLog] = useState("Initializing VIXEN Core...");
  const [showProof, setShowProof] = useState(false);
  const [activeProof, setActiveProof] = useState("");

  const logs = [
    "Targeting: KuCoin_Whales...", "Injecting Llama3 Closing Logic...", 
    "User Match: Michael_UK detected.", "Redirecting to Vercel Bridge...", 
    "Connection Secured: AES-256", "AI Status: Generating Pitch..."
  ];

  const proofs = [
    "Retro_UK just earned $150 commission", 
    "New license activated in London", 
    "Blueprint sold to Founder_X ($19)", 
    "Sarah just cloned the engine"
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
    <main className="vixen-root">
      <style jsx global>{`
        body { margin: 0; background: #000; font-family: 'JetBrains Mono', monospace; color: #fff; overflow-x: hidden; }
        .vixen-root { min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; position: relative; }
        .bg-glow { position: absolute; top: 0; left: 50%; width: 100%; height: 100%; background: radial-gradient(circle at 50% 10%, rgba(59,130,246,0.15) 0%, transparent 60%); transform: translateX(-50%); pointer-events: none; }
        
        .main-container { width: 100%; max-width: 1100px; display: flex; flex-direction: row; flex-wrap: wrap; gap: 60px; z-index: 1; align-items: center; }
        .info-side { flex: 1; min-width: 320px; }
        .card-side { flex: 1; min-width: 320px; max-width: 440px; background: rgba(8,8,8,0.9); padding: 35px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(25px); }

        .title { font-size: clamp(38px, 5vw, 65px); font-weight: 900; line-height: 1; margin-bottom: 25px; letter-spacing: -3px; }
        .blue-glow { color: #3b82f6; text-shadow: 0 0 30px rgba(59,130,246,0.5); }
        .badge { font-size: 10px; letter-spacing: 4px; color: #333; font-weight: 900; margin-bottom: 20px; }

        .terminal { background: #000; border: 1px solid #111; border-radius: 15px; overflow: hidden; margin-bottom: 25px; text-align: left; }
        .t-header { background: #080808; padding: 10px 15px; display: flex; justify-content: space-between; border-bottom: 1px solid #111; }
        .t-body { padding: 20px; font-size: 11px; color: #4ade80; min-height: 38px; }

        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
        .stat-box-big { grid-column: span 2; background: #050505; border: 1px solid #111; padding: 25px; border-radius: 20px; }
        .stat-box-small { background: #050505; border: 1px solid #111; padding: 15px; border-radius: 18px; }
        .stat-label { font-size: 8px; color: #333; font-weight: bold; margin-bottom: 10px; display: block; }
        
        /* Product Cards Section */
        .products-row { width: 100%; max-width: 1100px; margin-top: 80px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; z-index: 1; }
        .product-card { background: #080808; border: 1px solid #111; padding: 30px; border-radius: 30px; transition: 0.3s; }
        .product-card:hover { border-color: #3b82f6; }
        .price { color: #4ade80; font-size: 28px; font-weight: 900; margin: 20px 0; display: block; }

        .main-cta { display: block; background: #fff; color: #000; padding: 22px; border-radius: 22px; text-decoration: none; font-weight: 900; text-align: center; font-size: 17px; box-shadow: 0 10px 30px rgba(255,255,255,0.1); }
        .secondary-cta { display: block; background: #111; color: #fff; padding: 15px; border-radius: 15px; text-decoration: none; text-align: center; font-weight: 800; font-size: 13px; }

        .notification { position: fixed; top: 30px; right: 30px; background: #0a0a0a; border: 1px solid #222; padding: 15px 25px; border-radius: 15px; font-size: 12px; z-index: 1000; transition: 0.6s; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }

        @media (max-width: 900px) {
          .main-container { flex-direction: column; text-align: center; }
          .info-side { text-align: center; }
          .card-side { max-width: 100%; }
          .vixen-root { padding-top: 80px; }
        }
      `}</style>

      <div className="bg-glow"></div>
      <div className="notification" style={{ opacity: showProof ? 1 : 0, transform: showProof ? 'translateX(0)' : 'translateX(50px)' }}>
        <span style={{ color: '#4ade80', marginRight: '10px' }}>●</span> {activeProof}
      </div>

      <div className="main-container">
        <div className="info-side">
          <div className="badge">SYSTEM IDENTITY: VIXEN_OS_V4</div>
          <h1 className="title">Autonomous <br/><span className="blue-glow">Revenue</span> Engine</h1>
          <p style={{ color: '#555', lineHeight: '1.7', maxWidth: '500px', marginBottom: '40px' }}>
            The elite AI infrastructure for high-ticket SaaS & Crypto closures. Currently hunting USA/UK whales with 100% autonomy.
          </p>
          <div className="terminal">
            <div className="t-header"><div style={{display:'flex', gap:5}}><div style={{width:6,height:6,background:'#222',borderRadius:'50%'}}></div><div style={{width:6,height:6,background:'#222',borderRadius:'50%'}}></div></div><span style={{fontSize:8, color:'#333'}}>VIXEN_CORE_LOGS</span></div>
            <div className="t-body">{terminalLog}</div>
          </div>
        </div>

        <div className="card-side">
          <div className="stats-grid">
            <div className="stat-box-big">
              <span className="stat-label">TOTAL NETWORK PROFIT (USD)</span>
              <span style={{ fontSize: '38px', fontWeight: 900, color: '#4ade80' }}>${stats.profit.toLocaleString()}</span>
            </div>
            <div className="stat-box-small">
              <span className="stat-label">MESSAGES</span>
              <span style={{ fontSize: '20px', fontWeight: 800 }}>{stats.sent.toLocaleString()}</span>
            </div>
            <div className="stat-box-small">
              <span className="stat-label">FOUNDER SLOTS</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ff4b2b' }}>{stats.slots}</span>
            </div>
          </div>
          <a href={AFFILIATE_LINK} className="main-cta">CLONE THIS SYSTEM NOW 🚀</a>
        </div>
      </div>

      {/* --- REVENUE STREAMS SECTION --- */}
      <div className="products-row">
        <div className="product-card">
          <div style={{fontSize:10, color:'#333', marginBottom:15}}>LOW-TICKET ASSET</div>
          <h3 style={{margin:0, fontSize:22}}>The VIXEN Blueprint</h3>
          <p style={{fontSize:13, color:'#555', margin:'15px 0'}}>Learn the exact AI-to-Telegram logic behind this engine. Start without cloning.</p>
          <span className="price">$19.00</span>
          <a href={AFFILIATE_LINK} className="secondary-cta">GET THE GUIDE</a>
        </div>

        <div className="product-card" style={{borderColor: 'rgba(59,130,246,0.3)'}}>
          <div style={{fontSize:10, color:'#3b82f6', marginBottom:15}}>MONTHLY RENTAL</div>
          <h3 style={{margin:0, fontSize:22}}>Engine Hosting (SaaS)</h3>
          <p style={{fontSize:13, color:'#555', margin:'15px 0'}}>We host your sniper. We manage the Groq AI. You keep 100% of the profits.</p>
          <span className="price">$99/mo</span>
          <a href="https://t.me/your_username" className="secondary-cta" style={{background:'#3b82f6'}}>RESERVE SLOT</a>
        </div>
      </div>

      <footer style={{marginTop:80, fontSize:10, color:'#111', letterSpacing:3}}>
        USA_UK_TERMINAL // SECURE_ACCESS_V4 // BY MANTU AI
      </footer>
    </main>
  );
}
