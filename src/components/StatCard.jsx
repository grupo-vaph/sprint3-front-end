function StatCard({ valor, texto }) {
  return (
    <div className="hover-flutuar rounded-xl border border-line bg-white px-6 py-8 text-center shadow-sm md:px-8 md:py-14">
      <h2 className="mb-5 text-5xl leading-none text-primary md:text-[3.5rem]">{valor}</h2>
      <p className="text-lg text-muted">{texto}</p>
    </div>
  )
}

export default StatCard
