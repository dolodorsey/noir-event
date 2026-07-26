'use client';

import { useState } from 'react';

const WEBHOOK = 'https://dorsey.app.n8n.cloud/webhook/khg-form-submit';
const ACCENT = '#D4B87A';
const BG_IMG = '/images/forms-bg.png';

const initialForm = {
  full_name: '',
  email: '',
  phone: '',
  birthday_person: '',
  date_of_birth: '',
  celebration_date: '',
  guest_count: '4',
  package_interest: '',
  table_interest: 'Maybe',
  instagram: '',
  notes: '',
};

export default function NoirBirthdayForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brand_key: 'noir',
          form_type: 'birthday',
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          form_data: form,
          source: 'standalone_form',
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Page>
        <div style={styles.card}>
          <div style={styles.successIcon}>✓</div>
          <h1 style={styles.title}>Birthday request received</h1>
          <p style={styles.copy}>The NOIR team will follow up with availability, arrival instructions and package options.</p>
          <a href="/forms/birthday" style={styles.secondaryLink}>Submit another request</a>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <div style={styles.card}>
        <div style={styles.header}>
          <a href="/forms" style={styles.back}>← NOIR Forms</a>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎂</div>
          <h1 style={styles.title}>Birthday Celebration</h1>
          <p style={styles.copy}>Request birthday admission, a table, a section or a customized group celebration.</p>
        </div>

        <form onSubmit={submit}>
          <div style={styles.grid}>
            <Field label="Your full name"><input required value={form.full_name} onChange={(e) => update('full_name', e.target.value)} style={styles.input} /></Field>
            <Field label="Email"><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} style={styles.input} /></Field>
            <Field label="Mobile phone"><input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} style={styles.input} /></Field>
            <Field label="Birthday person"><input required value={form.birthday_person} onChange={(e) => update('birthday_person', e.target.value)} style={styles.input} /></Field>
            <Field label="Date of birth"><input type="date" value={form.date_of_birth} onChange={(e) => update('date_of_birth', e.target.value)} style={styles.input} /></Field>
            <Field label="Celebration date"><input required type="date" value={form.celebration_date} onChange={(e) => update('celebration_date', e.target.value)} style={styles.input} /></Field>
            <Field label="Guest count"><input required type="number" min="1" max="100" value={form.guest_count} onChange={(e) => update('guest_count', e.target.value)} style={styles.input} /></Field>
            <Field label="Package interest">
              <select required value={form.package_interest} onChange={(e) => update('package_interest', e.target.value)} style={styles.input}>
                <option value="">Select…</option>
                <option>Complimentary birthday RSVP</option>
                <option>Birthday table</option>
                <option>Birthday section</option>
                <option>Large group celebration</option>
                <option>Need recommendations</option>
              </select>
            </Field>
            <Field label="Table interest">
              <select value={form.table_interest} onChange={(e) => update('table_interest', e.target.value)} style={styles.input}>
                <option>No</option><option>Maybe</option><option>Yes</option>
              </select>
            </Field>
            <Field label="Instagram" optional><input value={form.instagram} onChange={(e) => update('instagram', e.target.value)} placeholder="@username" style={styles.input} /></Field>
          </div>

          <Field label="Additional notes" optional><textarea rows="4" value={form.notes} onChange={(e) => update('notes', e.target.value)} style={{ ...styles.input, resize: 'vertical' }} /></Field>

          {status === 'error' && <div style={styles.error}>Something went wrong. Please try again.</div>}
          <button type="submit" disabled={status === 'submitting'} style={styles.button}>{status === 'submitting' ? 'Submitting…' : 'Submit Birthday Request'}</button>
        </form>
      </div>
    </Page>
  );
}

function Page({ children }) {
  return (
    <main style={styles.page}>
      <div style={styles.background}><img src={BG_IMG} alt="" style={styles.backgroundImage} /><div style={styles.overlay} /></div>
      <div style={styles.shell}>{children}</div>
    </main>
  );
}

function Field({ label, optional = false, children }) {
  return <label style={styles.field}><span style={styles.label}>{label}{optional ? ' · optional' : ''}</span>{children}</label>;
}

const styles = {
  page: { minHeight: '100vh', position: 'relative', overflow: 'hidden', color: '#fff', fontFamily: "'DM Sans', sans-serif" },
  background: { position: 'fixed', inset: 0, zIndex: 0 },
  backgroundImage: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.76),rgba(0,0,0,.7),rgba(0,0,0,.88))' },
  shell: { position: 'relative', zIndex: 2, width: 'min(760px, calc(100% - 40px))', margin: '0 auto', padding: '80px 0' },
  card: { padding: 'clamp(28px,5vw,48px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 20, background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(24px)', boxShadow: '0 20px 80px rgba(0,0,0,.5)' },
  header: { textAlign: 'center', marginBottom: 34 },
  back: { display: 'inline-block', marginBottom: 18, color: ACCENT, textDecoration: 'none', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' },
  title: { margin: '0 0 10px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px,5vw,46px)' },
  copy: { color: 'rgba(255,255,255,.78)', lineHeight: 1.6, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 },
  field: { display: 'block', marginBottom: 16 },
  label: { display: 'block', marginBottom: 8, color: 'rgba(255,255,255,.9)', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 },
  input: { width: '100%', boxSizing: 'border-box', padding: '14px 16px', border: '1px solid rgba(255,255,255,.18)', borderRadius: 8, background: 'rgba(255,255,255,.1)', color: '#fff', font: 'inherit', outline: 'none' },
  button: { width: '100%', marginTop: 12, padding: '16px 24px', border: 0, borderRadius: 8, background: ACCENT, color: '#000', fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', cursor: 'pointer' },
  error: { marginTop: 12, padding: 12, borderRadius: 8, background: 'rgba(239,68,68,.14)', color: '#fecaca', textAlign: 'center' },
  successIcon: { display: 'grid', placeItems: 'center', width: 72, height: 72, margin: '0 auto 22px', border: `2px solid ${ACCENT}`, borderRadius: '50%', color: ACCENT, fontSize: 32 },
  secondaryLink: { display: 'inline-block', marginTop: 24, color: ACCENT, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1.5, fontSize: 11 },
};
