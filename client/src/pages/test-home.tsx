import React from 'react';

export default function TestHome() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 CodeGX Portfolio</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>React + Vite + TypeScript</p>
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '1rem 2rem', 
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)'
      }}>
        ✅ Application is running successfully!
      </div>
    </div>
  );
}