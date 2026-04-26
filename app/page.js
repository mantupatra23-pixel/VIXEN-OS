'use client';
import React, { useState, useEffect } from 'react';

export default function VixenBridgeFinal() {
  const [stats, setStats] = useState({ sent: '1,240+', replies: '89' });
  
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
      } catch (e) {
        console.log("Syncing with VIXEN Engine...");
      }
    };
    fetchLiveStats();
  }, []);

  return (
    <main style={{ background: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px', color: '#fff' }}>
      <div style={{ background: '#080808', border: '1px solid #111', padding: '40px 25px', borderRadius: '30px', maxWidth: '400px', width: '100%', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
        
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#3b82f6', fontWeight: '900', marginBottom: '25px' }}>PRIVATE FOUNDER ACCESS</div>
        
        <h1 style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>
          Automate <span style={{ color: '#3b82f6' }}>$1,200/Day</span> with AI
        </h1>

        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
          The VIXEN Engine is currently live, sniper-targeting high-ticket whales in USA/UK markets.
        </p>

        <div style={{ background: '#000', border: '1px solid #1a1a1a', padding: '20px', borderRadius: '20px', textAlign: 'left', marginBottom: '30px' }}>
          <div style={{ fontSize: '11px', fontWeight: '800', color: '#333', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></span>
            LIVE ENGINE STATUS: <span style={{ color: '#4ade80' }}>ACTIVE</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#444', marginBottom: '8px' }}>
            <span>Network Messages:</span>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>{stats.sent}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#444' }}>
            <span>AI Sales Closures:</span>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>{stats.replies}</span>
          </div>
        </div>

        <a href={AFFILIATE_LINK} style={{ display: 'block', background: '#fff', color: '#000', padding: '18px', borderRadius: '15px', fontWeight: '900', textDecoration: 'none', transition: '0.3s' }}>
          CLONE THIS SYSTEM NOW 🚀
        </a>

        <p style={{ fontSize: '9px', color: '#1a1a1a', marginTop: '25px', fontWeight: 'bold', letterSpacing: '1px' }}>
          USA_UK_MARKET_TERMINAL // SECURE_V2
        </p>
      </div>
    </main>
  );
}
