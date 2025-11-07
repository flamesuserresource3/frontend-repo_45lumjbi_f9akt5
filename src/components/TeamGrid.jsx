import { useState } from 'react';

const sampleTeam = [
  { name: 'Dr. A. Pratama', role: 'Ketua Prodi', type: 'dosen', photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. B. Wibowo', role: 'Dosen Tetap', type: 'dosen', photo: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop' },
  { name: 'C. Lestari, M.Sc', role: 'Dosen', type: 'dosen', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'D. Siregar, M.Kom', role: 'Dosen', type: 'dosen', photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
  { name: 'E. Putri', role: 'Staf Akademik', type: 'staf', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'F. Ramadhan', role: 'Staf Administrasi', type: 'staf', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'G. Nugraha', role: 'Laboran', type: 'staf', photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
  { name: 'H. Santoso', role: 'Dosen', type: 'dosen', photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop' },
];

function TeamCard({ person }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur-sm transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-violet-600/20">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-xl ring-1 ring-white/15">
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-white font-semibold leading-tight">{person.name}</h3>
          <p className="text-sm text-violet-200/70">{person.role}</p>
          <span className="mt-2 inline-flex w-fit rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200">
            {person.type === 'dosen' ? 'Dosen' : 'Staf'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TeamGrid() {
  const [filter, setFilter] = useState('all');
  const filtered = sampleTeam.filter(p => filter === 'all' ? true : p.type === filter);

  return (
    <section id="team" className="relative w-full bg-[#0a0a0f] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-0 top-0 h-72 w-[60%] bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Dosen & Staf</h2>
            <p className="mt-2 text-violet-200/70">Data ringkas anggota Prodi Sains Data</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setFilter('all')} className={`rounded-full px-4 py-2 text-sm transition border ${filter==='all' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-violet-200/80 border-white/10 hover:bg-white/10'}`}>Semua</button>
            <button onClick={() => setFilter('dosen')} className={`rounded-full px-4 py-2 text-sm transition border ${filter==='dosen' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-violet-200/80 border-white/10 hover:bg-white/10'}`}>Dosen</button>
            <button onClick={() => setFilter('staf')} className={`rounded-full px-4 py-2 text-sm transition border ${filter==='staf' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-violet-200/80 border-white/10 hover:bg-white/10'}`}>Staf</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <TeamCard key={i} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
