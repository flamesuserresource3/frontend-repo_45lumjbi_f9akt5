export default function Footer() {
  return (
    <footer className="relative w-full bg-[#08080c] py-10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 -top-10 mx-auto h-24 w-[90%] bg-gradient-to-b from-violet-500/15 to-transparent blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold">Statistika Prodi Sains Data</p>
          <p className="text-sm text-violet-200/70">Tema ungu-hitam, elegan, dan futuristik</p>
        </div>
        <p className="text-xs text-violet-300/60">© {new Date().getFullYear()} Prodi Sains Data. All rights reserved.</p>
      </div>
    </footer>
  );
}
