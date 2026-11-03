import heroImg from '../assets/img/hero.png'

const numeros = [
  { valor: '< 500ms', texto: 'Detecção IA' },
  { valor: '100%', texto: 'Offline Capable' },
  { valor: '1', texto: 'Toque Necessário' },
]

function Hero() {
  return (
    <section
      id="comeco"
      className="flex min-h-[90vh] scroll-mt-20 flex-col items-center justify-between gap-14 px-[5%] py-20 lg:flex-row"
    >
      <div className="flex-1">
        <h1 className="mb-6 text-[2.4rem] leading-tight text-ink sm:text-[2.8rem] xl:text-[3.6rem]">
          A Câmera que Pensa com Você.
          <br />
          <span className="text-primary">Menos Modos, Mais Inteligência.</span>
        </h1>

        <p className="mb-12 max-w-[540px] text-lg text-muted">
          JOVI AI analisa o contexto da sua foto instantaneamente. Se é um documento, ele
          escaneia. Se é uma lousa, ele transcreve. Foco total no que importa.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {numeros.map((numero) => (
            <div key={numero.texto}>
              <h2 className="mb-1 text-[2.2rem] text-primary">{numero.valor}</h2>
              <p className="font-medium">{numero.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <img
          src={heroImg}
          alt="Interface da câmera JOVI no celular"
          width={1440}
          height={2560}
          className="w-[380px] max-w-full"
        />
      </div>
    </section>
  )
}

export default Hero
