export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portofolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Halo, saya Hamz
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Frontend developer yang fokus membangun antarmuka modern, cepat, dan aksesibel. 
            Saya suka mengubah ide menjadi produk digital yang elegan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-blue-700 transition-colors">Lihat Proyek</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 text-gray-800 text-sm font-medium px-5 py-2.5 hover:bg-gray-50">Kontak</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 p-1">
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-6xl">🧑‍💻</div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow px-3 py-2 text-sm">
            Tersedia untuk freelance
          </div>
        </div>
      </div>
    </section>
  )
}
