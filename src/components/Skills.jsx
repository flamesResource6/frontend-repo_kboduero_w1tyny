const skills = [
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'TypeScript', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'Framer Motion', level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-6">Keahlian</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="p-5 border rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{s.name}</p>
                <p className="text-sm text-gray-600">{s.level}%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
