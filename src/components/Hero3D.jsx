import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#08080c]">
      {/* Atmospheric gradient accents (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-[35%] bg-[radial-gradient(circle_at_20%_20%,rgba(91,33,182,0.35),transparent_55%),_radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_50%)] blur-2xl" />
      </div>

      {/* Spline Canvas with dark, futuristic topographic map */}
      <div className="relative h-[72vh] sm:h-[84vh] w-full">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        {/* Dark gradient veil to ensure contrast over bright Spline elements */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#08080c]" />
        <div className="relative max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-violet-200 via-white to-violet-300 drop-shadow-[0_0_24px_rgba(139,92,246,0.45)]">
            Program Sains Data
          </h1>
          <p className="mt-5 text-base sm:text-lg text-violet-100/85">
            Website elegan bertema ungu–hitam dengan visual 3D interaktif untuk menampilkan profil, statistik, dan tim pengajar.
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
