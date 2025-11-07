import { useEffect, useState } from 'react';

function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-sm">
      <p className="text-sm text-violet-200/70">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {sub && <p className="mt-1 text-xs text-violet-300/70">{sub}</p>}
    </div>
  );
}

export default function StatsOverview() {
  const [stats, setStats] = useState({ dosen: 0, staf: 0, rasio: '0:0', penelitian: 0 });

  useEffect(() => {
    // Mock data for now; can be wired to backend later
    const dosen = 24;
    const staf = 12;
    const rasio = `${dosen}:${staf}`;
    const penelitian = 78;
    setStats({ dosen, staf, rasio, penelitian });
  }, []);

  return (
    <section id="stats" className="relative w-full bg-[#0b0b12] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 h-56 w-[90%] -translate-x-1/2 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ringkasan</h2>
        <p className="mt-2 text-violet-200/70">Gambaran singkat Prodi Sains Data</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Jumlah Dosen" value={stats.dosen} />
          <StatCard label="Jumlah Staf" value={stats.staf} />
          <StatCard label="Rasio Dosen:Staf" value={stats.rasio} />
          <StatCard label="Publikasi/Tahun" value={stats.penelitian} sub="Estimasi 2024" />
        </div>
      </div>
    </section>
  );
}
