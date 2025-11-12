const projects = [
  {
    title: 'Dashboard Analitik',
    desc: 'Dashboard interaktif untuk memantau metrik bisnis secara real-time.',
    stack: ['React', 'Tailwind', 'Chart.js'],
    link: '#'
  },
  {
    title: 'Landing Page Startup',
    desc: 'Halaman arahan dengan konversi tinggi dan performa optimal.',
    stack: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'E-Commerce UI',
    desc: 'Komponen UI e-commerce yang modular dan dapat digunakan ulang.',
    stack: ['React', 'Zustand', 'Tailwind'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Proyek Pilihan</h2>
            <p className="text-gray-600 mt-1">Beberapa pekerjaan terbaik yang pernah saya kerjakan.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-blue-600 hover:text-blue-700">Lihat Semua →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group p-5 bg-white rounded-xl border hover:shadow transition">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
