export default function ParMusPage() {
  return (
    <>
      <header className="bg-navy py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold">Par vietni</h1>
          <p className="mt-2 text-white/70">Olimpiādes matemātika</p>
        </div>
      </header>

      <section className="bg-cream py-10">
        <div className="mx-auto max-w-3xl px-4">
          <article className="mb-6 rounded-xl bg-sand p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-navy">Par vietni</h2>
            <p className="text-navy">
              Olimpiādes matemātika ir bezmaksas mācību resurss latviešu valodā matemātikas olimpiāžu
              dalībniekiem. Vietne piedāvā teorijas materiālus, atrisinātus piemērus, testus un uzdevumus
              dažādiem klašu līmeņiem.
            </p>
          </article>

          <article className="mb-6 rounded-xl bg-sand p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-navy">Pateicības un autortiesības</h2>
            <p className="text-navy">
              Visi teorijas materiāli un uzdevumi ir pieejami:{' '}
              <a
                href="https://nms.lu.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline transition-opacity hover:opacity-80"
              >
                nms.lu.lv
              </a>
            </p>
          </article>

          <article className="mb-6 rounded-xl bg-sand p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-navy">Saziņa</h2>
            <p className="text-navy">
              Ja pamanījāt kļūdu vai vēlaties sazināties, rakstiet uz:{' '}
              <span className="font-mono text-teal">67emailgmail</span>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
