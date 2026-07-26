'use client';

import { usePathname } from 'next/navigation';

const actions = [
  { label: 'Free RSVP', href: '/forms/rsvp' },
  { label: 'Celebrate a Birthday', href: '/forms/birthday' },
  { label: 'Become a Vendor', href: '/forms/vendor' },
];

export default function NoirDirectForms() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <section aria-label="NOIR direct forms" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.copy}>
          <span style={styles.eyebrow}>Direct Requests</span>
          <h2 style={styles.heading}>Your next move.</h2>
          <p style={styles.text}>Use the official NOIR forms for admission, birthday celebrations and vendor opportunities.</p>
        </div>
        <div style={styles.actions}>
          {actions.map((action) => (
            <a key={action.href} href={action.href} style={styles.link}>{action.label} <span style={{ color: '#D2B98B' }}>→</span></a>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { background: '#09080B', borderTop: '1px solid rgba(242,231,216,.08)', borderBottom: '1px solid rgba(242,231,216,.08)', padding: '42px clamp(24px,5vw,80px)' },
  inner: { maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' },
  copy: { maxWidth: 520 },
  eyebrow: { display: 'block', marginBottom: 8, fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: '.4em', textTransform: 'uppercase', color: '#D2B98B' },
  heading: { margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px,4vw,48px)', fontWeight: 400, fontStyle: 'italic', color: '#F2E7D8' },
  text: { margin: '8px 0 0', fontFamily: "'DM Sans', sans-serif", color: 'rgba(242,231,216,.5)', fontSize: 13, lineHeight: 1.6 },
  actions: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  link: { padding: '13px 18px', border: '1px solid rgba(210,185,139,.28)', color: '#F2E7D8', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', background: 'rgba(210,185,139,.04)' },
};
