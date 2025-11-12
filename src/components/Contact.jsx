import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Mengirim...')

    try {
      // Dummy delay to simulate send
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Terkirim! Saya akan segera menghubungi Anda.')
      e.target.reset()
    } catch (e) {
      setStatus('Gagal mengirim. Coba lagi ya.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold">Kontak</h2>
          <p className="text-gray-600 mt-1">Ingin berdiskusi atau kolaborasi? Kirim pesan di bawah.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Nama</label>
            <input required name="name" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input required type="email" name="email" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Pesan</label>
            <textarea required name="message" rows="4" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-blue-700">Kirim</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
