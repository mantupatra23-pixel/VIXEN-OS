import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function VixenBridgeFinal() {
  const [stats, setStats] = useState({ sent: '1,240+', replies: '89' });
  
  // Aapka Updated Affiliate Link
  const AFFILIATE_LINK = "https://systeme.io/?sa=sa026984945780d4279e42aa7f2fb45eb698a43702"; 

  // Backend URL for Live Proof
  const API_URL = "https://vixen-nkjh.onrender.com/api/stats";

  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        if(json.messages_sent) {
            setStats({ 
              sent: json.messages_sent.toLocaleString(), 
              replies: json.ai_replies.toLocaleString() 
            });
        }
      } catch (e) { console.log("Syncing with VIXEN Engine..."); }
    };
    fetchLiveStats();
    const interval = setInterval(fetchLiveStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>VIXEN OS | Founder Case Study</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="glass-card">
        <div className="badge">PRIVATE FOUNDER ACCESS</div>
        
        <h1 className="title">
          How I Automated <span className="blue-text">$1,200/Day</span> 
          with Autonomous AI
        </h1>

        <p className="subtitle">
          The VIXEN Engine is currently live, sniper-targeting high-ticket whales in USA/UK markets.
        </p>

        <div className="proof-box">
          <div className="proof-header">
            <span className="dot"></span>
            LIVE ENGINE STATUS: <span className="green-text">ACTIVE</span>
          </div>
          <div className="stat-row">
            <span>Network Messages:</span>
            <span className="white-text">{stats.sent}</span>
          </div>
          <div className="stat-row">
            <span>AI Sales Closures:</span>
            <span className="white-text">{stats.replies}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        <ul className="features">
          <li>✅ No Manual Outreach Required</li>
          <li>✅ Groq-Llama3 Sales Intelligence</li>
          <li>✅ 100% Mobile Managed (Termux)</li>
        </ul>

        <a href={AFFILIATE_LINK} className="cta-button">
          CLONE THIS SYSTEM NOW 🚀
          <span className="cta-sub">Instant Access to Mantu AI Infrastructure</span>
        </a>

        <p className="footer-note">
          *System limit: 5 new licenses per 24 hours.
        </p>
      </div>

      <style jsx>{`
        .container { min-height: 100vh; background: #000; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: sans-serif; color: #fff; }
        .glass-card { background: #080808; border: 1px solid #111; padding: 40px 25px; border-radius: 35px; max-width: 420px; width: 100%; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
        .badge { font-size: 10px; letter-spacing: 3px; color: #3b82f6; font-weight: 900; margin-bottom: 25px; }
        .title { font-size: 26px; font-weight: 800; line-height: 1.2; margin-bottom: 20px; }
        .blue-text { color: #3b82f6; }
        .subtitle { font-size: 14px; color: #555; line-height: 1.6; margin-bottom: 30px; }
        .proof-box { background: #000; border: 1px solid #1a1a1a; padding: 20px; border-radius: 20px; text-align: left; margin-bottom: 30px; }
        .proof-header { font-size: 11px; font-weight: 800; color: #333; display: flex; align-items: center; gap: 8px; margin-bottom: 15px; }
        .dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; box-shadow: 0 0 10px #4ade80; }
        .green-text { color: #4ade80; }
        .stat-row { display: flex; justify-content: space-between; font-size: 13px; color: #444; margin-bottom: 8px; }
        .white-text { color: #fff; font-weight: bold; font-family: monospace; }
        .progress-bar { width: 100%; height: 4px; background: #0a0a0a; border-radius: 10px; margin-top: 15px; overflow: hidden; }
        .progress-fill { width: 85%; height: 100%; background: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
        .features { text-align: left; margin-bottom: 35px; list-style: none; padding: 0; }
        .features li { font-size: 13px; color: #888; margin-bottom: 12px; }
        .cta-button { display: block; background: #fff; color: #000; padding: 18px; border-radius: 18px; text-decoration: none; font-weight: 900; }
        .cta-sub { display: block; font-size: 9px; font-weight: 400; opacity: 0.5; margin-top: 4px; }
        .footer-note { font-size: 9px; color: #1a1a1a; margin-top: 25px; font-weight: bold; letter-spacing: 1px; }
      `}</style>
    </div>
  );
}
