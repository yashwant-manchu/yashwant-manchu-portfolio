import { ImageResponse } from 'next/og';

export const alt = 'Yashwant Manchu — Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const TECH = ['React.js', 'React Native', 'TypeScript', 'Next.js'];

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a1020',
        backgroundImage:
          'radial-gradient(circle at 50% 35%, rgba(52, 211, 153, 0.22) 0%, rgba(10, 16, 32, 0) 60%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 108,
          height: 108,
          borderRadius: 28,
          background: 'linear-gradient(135deg, #34d399, #10b981)',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontWeight: 800,
          color: '#0a1020',
          marginBottom: 36,
        }}
      >
        YM
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 72,
          fontWeight: 800,
          color: '#e8f0fe',
          letterSpacing: -1.5,
        }}
      >
        Yashwant Manchu
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 20,
          fontSize: 32,
          fontWeight: 600,
          color: '#34d399',
        }}
      >
        Frontend Engineer
      </div>
      <div style={{ display: 'flex', marginTop: 28, gap: 14 }}>
        {TECH.map((t) => (
          <div
            key={t}
            style={{
              display: 'flex',
              padding: '8px 20px',
              borderRadius: 999,
              border: '1px solid rgba(52, 211, 153, 0.3)',
              background: 'rgba(52, 211, 153, 0.08)',
              color: '#9ab0cc',
              fontSize: 22,
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
