function SectionTitle({ titulo, destaque, subtitulo, centralizado = true }) {
  return (
    <div className={centralizado ? 'text-center' : ''}>
      <h2 className="mb-5 text-3xl md:text-[2.6rem]">
        {titulo} <span className="text-primary">{destaque}</span>
      </h2>

      {subtitulo && (
        <p className="mx-auto mb-14 max-w-3xl text-lg text-muted">{subtitulo}</p>
      )}
    </div>
  )
}

export default SectionTitle
