export default function PodcastSection() {
  const videos = [
    {
      title: 'Podcast: Pengenalan Prodi Sains Data',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Kuliah Tamu: Tren AI & Data 2025',
      src: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    },
  ];

  return (
    <section id="podcast" className="relative w-full bg-[#08080c] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-0 top-0 h-72 w-[60%] bg-gradient-to-bl from-indigo-500/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Video & Podcast</h2>
            <p className="mt-2 text-violet-200/70">Tonton rekaman kegiatan, podcast, dan materi bincang data.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-100 hover:bg-white/10">Lihat Semua</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((v, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg shadow-black/20">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={v.src}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-white font-medium">{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
