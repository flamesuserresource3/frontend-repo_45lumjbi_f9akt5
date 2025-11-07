import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0a0f]">
      {/* Background grainy gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.35),transparent_50%),_radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.25),transparent_45%)] blur-2xl" />
      </div>

      {/* Spline Canvas with DNA animation */}
      <div className="relative h-[70vh] sm:h-[80vh] w-full">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/10 via-transparent to-[#0a0a0f]" />
        <div className="relative max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-violet-300 via-white to-violet-200 drop-shadow-[0_2px_8px_rgba(124,58,237,0.25)]">
            Statistika Prodi Sains Data
          </h1>
          <p className="mt-5 text-base sm:text-lg text-violet-200/80">
            Dasbor elegan bertema ungu gelap untuk menampilkan data dosen dan staf. Interaktif, futuristik, dan siap presentasi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#stats"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 transition-colors"
            >
              Lihat Statistik
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-violet-100 hover:bg-white/10 transition-colors"
            >
              Dosen & Staf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
