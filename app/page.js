'use client';
import React, { useState, useEffect } from 'react';

export default function VixenUniversalMaster() {
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
    <main className="vixen-root">
      <style jsx global>{`
        body { margin: 0; padding: 0; background: #000; overflow-x: hidden; }
        .vixen-root {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 20px; font-family: 'JetBrains Mono', monospace; color: #fff; position: relative;
        }
        .bg-glow {
          position: absolute; top: 10%; left: 50%; width: 80%; height: 60%;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          transform: translateX(-50%); pointer-events: none; z-index: 0;
        }
        .main-container {
          width: 100%; max-width: 1100px; display: flex; flex-direction: row;
          align-items: center; gap: 60px; z-index: 1;
        }
        .text-content { flex: 1; text-align: left; }
        .card-content { 
          flex: 1; max-width: 440px; background: rgba(8,8,8,0.9); padding: 35px;
          border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(25px);
          box-shadow: 0 50px 100px rgba(0,0,0,0.8);
        }
        .badge { font-size: 10px; letter-spacing: 4px; color: #333; font-weight: 900; margin-bottom: 25px; }
        .hero-title { font-size: 56px; font-weight: 800; line-height: 1; margin-bottom: 25px; letter-spacing: -3px; }
        .accent { color: #3b82f6; text-shadow: 0 0 30px rgba(59,130,246,0.4); }
        .hero-desc { font-size: 16px; color: #555; lineHeight: 1.6; margin-bottom: 40px; max-width: 480px; }
        
        .terminal-box { background: #000; border: 1px solid #111; border-radius: 15px; overflow: hidden; margin-bottom: 25px; }
        .terminal-header { background: #080808; padding: 12px; display: flex; justify-content: space-between; border-bottom: 1px solid #111; }
        .t-dot { width: 6px; height: 6px; border-radius: 50%; background: #222; margin-right: 5px; }
        .terminal-body { padding: 18px; font-size: 11px; color: #4ade80; min-height: 38px; }

        .stats-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 25px; }
        .s-full { grid-column: span 2; background: #050505; border: 1px solid #111; padding: 22px; border-radius: 20px; }
        .s-box { background: #050505; border: 1px solid #111; padding: 18px; border-radius: 18px; }
        .s-label { font-size: 8px; color: #222; font-weight: bold; margin-bottom: 8px; display: block; letter-spacing: 1px; }
        .s-val-big { font-size: 34px; font-weight: 900; color: #4ade80; }
        .s-val-small { font-size: 20px; font-weight: bold; }

        .cta-btn { 
          display: block; background: #fff; color: #000; padding: 22px; border-radius: 20px;
          text-decoration: none; font-weight: 900; text-align: center; font-size: 16px;
          box-shadow: 0 15px 30px rgba(255,255,255,0.1); transition: 0.3s;
        }
        .cta-btn:hover { transform: translateY(-3px); }

        .notification {
          position: fixed; top: 30px; right: 30px; background: #0a0a0a; border: 1px solid #1a1a1a;
          padding: 15px 25px; border-radius: 15px; font-size: 12px; z-index: 1000; transition: 0.6s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        @media (max-width: 900px) {
          .main-container { flex-direction: column; text-align: center; gap: 40px; padding-top: 50px; }
          .hero-title { font-size: 40px; }
          .hero-desc { margin: 0 auto 30px; }
          .text-content { text-align: center; }
          .cta-hide-mobile { display: none; }
          .card-content { width: 100%; max-width: 100%; box-sizing: border-box; }
        }
        @media (min-width: 901px) {
          .cta-hide-desktop { display: none; }
        }
      `}</style>

      <div className="bg-glow"></div>

      <div className="notification" style={{ opacity: showProof ? 1 : 0, transform: showProof ? 'translateX(0)' : 'translateX(50px)' }}>
        <span style={{ color: '#4ade80', marginRight: '10px' }}>●</span> {activeProof}
      </div>

      <div className="main-container">
        <div className="text-content">
          <div className="badge">MANTU AI // ELITE_CORE_V3</div>
          <h1 className="hero-title">Autonomous <span className="accent">Revenue</span> At Scale</h1>
          <p className="hero-desc">VIXEN OS neural infrastructure is currently hunting high-ticket whales in USA/UK markets. Automated, Scalable, Elite.</p>
          <div className="cta-hide-mobile">
            <a href={AFFILIATE_LINK} className="cta-btn">CLONE SYSTEM NOW 🚀</a>
          </div>
        </div>

        <div className="card-content">
          <div className="terminal-box">
            <div className="terminal-header">
              <div style={{ display: 'flex' }}><div className="t-dot"></div><div className="t-dot"></div></div>
              <span style={{ fontSize: 8, color: '#333' }}>VIXEN_LOG</span>
            </div>
            <div className="terminal-body">{terminalLog}</div>
          </div>

          <div className="stats-wrap">
            <div className="s-full">
              <span className="s-label">TOTAL NETWORK PROFIT</span>
              <span className="s-val-big">${stats.profit.toLocaleString()}</span>
            </div>
            <div className="s-box">
              <span className="s-label">MESSAGES</span>
              <span className="s-val-small">{stats.sent.toLocaleString()}</span>
            </div>
            <div className="s-box">
              <span className="s-label">SLOTS_LEFT</span>
              <span className="s-val-small" style={{ color: '#ff4b2b' }}>{stats.slots}</span>
            </div>
          </div>

          <div className="cta-hide-desktop">
            <a href={AFFILIATE_LINK} className="cta-btn">CLONE SYSTEM NOW 🚀</a>
          </div>
        </div>
      </div>
    </main>
  );
}
