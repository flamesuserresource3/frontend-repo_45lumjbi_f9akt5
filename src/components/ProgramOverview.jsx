import { Database, Cog, LineChart, Shield } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-700/30">
          <Icon size={20} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-violet-200/80">{desc}</p>
    </div>
  );
}

export default function ProgramOverview() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 top-0 h-72 w-[60%] bg-gradient-to-br from-violet-500/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Apa itu Sains Data?</h2>
          <p className="mt-3 text-violet-200/80">
            Sains Data adalah disiplin yang menggabungkan statistika, pemrograman, dan pengetahuan domain untuk mengekstraksi wawasan dari data.
            Mahasiswa mempelajari pengumpulan data, pembersihan, pemodelan machine learning, hingga visualisasi untuk pengambilan keputusan.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Database} title="Pengumpulan Data" desc="Akuisisi data dari API, sensor, survey, dan basis data; disertai manajemen kualitas." />
          <Feature icon={Cog} title="Pemrosesan" desc="Pembersihan, transformasi, dan rekayasa fitur untuk menyiapkan data siap analisis." />
          <Feature icon={LineChart} title="Pemodelan" desc="Statistika & machine learning untuk prediksi, klasifikasi, serta insight kuantitatif." />
          <Feature icon={Shield} title="Etika & Keamanan" desc="Privasi, etika AI, dan tata kelola data yang bertanggung jawab." />
        </div>
      </div>
    </section>
  );
}
