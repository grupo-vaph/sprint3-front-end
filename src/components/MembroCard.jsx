function MembroCard({ nome, rm, foto }) {
  return (
    <div className="hover-flutuar w-full rounded-xl border border-line bg-white px-6 py-8 text-center shadow-sm sm:max-w-[300px] sm:flex-[1_1_220px] md:py-10">
      <img
        src={foto}
        alt={nome}
        loading="lazy"
        className="mx-auto mb-6 size-[130px] rounded-full bg-slate-200 object-cover"
      />
      <h3 className="mb-1 text-xl">{nome}</h3>
      <p className="mb-3 text-[0.95rem] font-medium text-primary">Software Engineering</p>
      <p className="text-sm text-muted">RM: {rm}</p>
    </div>
  )
}

export default MembroCard
