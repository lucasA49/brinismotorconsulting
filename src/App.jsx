function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <span className="text-xl font-bold tracking-tight">
          Brinis <span className="text-brand">Motors</span> Consulting
        </span>
        <nav className="hidden gap-6 text-sm text-neutral-300 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">À propos</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl font-extrabold sm:text-6xl">
          Votre expert <span className="text-brand">automobile</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
          React + Tailwind CSS sont prêts. Modifiez <code>src/App.jsx</code> pour commencer.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg bg-brand px-6 py-3 font-semibold hover:bg-brand-dark"
        >
          Nous contacter
        </a>
      </main>
    </div>
  )
}

export default App
