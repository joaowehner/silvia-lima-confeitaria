export default function CakeFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0ea 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Top Tier */}
        <div
          style={{
            width: '100px',
            height: '55px',
            background: 'linear-gradient(180deg, #dbb896 0%, #faf8f5 25%, #faf8f5 100%)',
            borderRadius: '8px 8px 0 0',
            boxShadow: 'inset 0 -8px 16px rgba(0,0,0,0.04)',
            zIndex: 3,
          }}
        />
        {/* Middle Tier */}
        <div
          style={{
            width: '140px',
            height: '65px',
            background: 'linear-gradient(180deg, #c4956a 0%, #faf8f5 20%, #faf8f5 100%)',
            borderRadius: '4px 4px 0 0',
            boxShadow: 'inset 0 -8px 16px rgba(0,0,0,0.04)',
            zIndex: 2,
            marginTop: '-2px',
          }}
        />
        {/* Bottom Tier */}
        <div
          style={{
            width: '180px',
            height: '75px',
            background: 'linear-gradient(180deg, #dbb896 0%, #faf8f5 20%, #faf8f5 100%)',
            borderRadius: '4px 4px 0 0',
            boxShadow: 'inset 0 -8px 16px rgba(0,0,0,0.04)',
            zIndex: 1,
            marginTop: '-2px',
          }}
        />
        {/* Cake Board */}
        <div
          style={{
            width: '210px',
            height: '12px',
            background: 'linear-gradient(180deg, #6b5b52, #3b2f2a)',
            borderRadius: '16px',
            marginTop: '2px',
            zIndex: 0,
          }}
        />
        {/* Gold accent dot */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #daa520, #b8860b)',
            zIndex: 4,
          }}
        />
      </div>
    </div>
  )
}
