export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold">Tentang Saya</h2>
          <p className="mt-2 text-gray-600">Ringkasan singkat tentang siapa saya, nilai yang saya pegang, dan apa yang saya kerjakan.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="p-5 border rounded-xl">
            <p className="text-sm text-gray-500">Pengalaman</p>
            <p className="mt-1 font-semibold">3+ tahun membangun aplikasi web</p>
          </div>
          <div className="p-5 border rounded-xl">
            <p className="text-sm text-gray-500">Fokus</p>
            <p className="mt-1 font-semibold">React, Tailwind, UX, animasi halus</p>
          </div>
          <div className="p-5 border rounded-xl">
            <p className="text-sm text-gray-500">Kekuatan</p>
            <p className="mt-1 font-semibold">Detail-oriented, komunikatif, kolaboratif</p>
          </div>
          <div className="p-5 border rounded-xl">
            <p className="text-sm text-gray-500">Bahasa</p>
            <p className="mt-1 font-semibold">Indonesia, English</p>
          </div>
        </div>
      </div>
    </section>
  )
}
