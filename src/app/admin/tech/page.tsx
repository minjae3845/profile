'use client'

export default function AdminTechPage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 12,
        background: '#0a0a0a',
        color: 'white',
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 600 }}>Admin panel is not available in DB-less mode.</p>
      <p style={{ fontSize: 13, color: '#666' }}>Database connection has been removed.</p>
    </div>
  )
}
