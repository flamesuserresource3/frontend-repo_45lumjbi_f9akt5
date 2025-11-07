import { Users, GraduationCap, BookOpenCheck, BarChart3 } from 'lucide-react';

function DashCard({ icon: Icon, title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-700/30">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-violet-200/70 text-sm">{title}</p>
          <p className="text-white text-xl font-bold">{value}</p>
        </div>
      </div>
      {sub && <p className="mt-3 text-xs text-violet-300/70">{sub}</p>}
    </div>
  );
}

export default function DashboardCards() {
  return (
    <section id="dashboard" className="relative w-full bg-[#0b0b12] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 mx-auto h-24 w-[90%] bg-gradient-to-b from-indigo-500/20 to-transparent blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Dasbor Prodi</h2>
            <p className="mt-2 text-violet-200/70">Ringkasan indikator utama Sains Data</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashCard icon={Users} title="Dosen Aktif" value="24" sub="Tetap & Luar Biasa" />
          <DashCard icon={GraduationCap} title="Mahasiswa" value="420" sub="Semua angkatan" />
          <DashCard icon={BookOpenCheck} title="Publikasi 2024" value="78" sub="Scopus & Sinta" />
          <DashCard icon={BarChart3} title="Rasio Dosen:Staf" value="24:12" sub="Efisiensi layanan" />
        </div>
      </div>
    </section>
  );
}
