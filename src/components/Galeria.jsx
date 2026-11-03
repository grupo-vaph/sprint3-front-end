import iaIcon from '../assets/icons/ia.svg'
import pastaIcon from '../assets/icons/pasta.svg'
import scannerIcon from '../assets/icons/scanner.svg'
import iaImg from '../assets/img/galeria/ia-contextual.png'
import organizacaoImg from '../assets/img/galeria/organizacao.png'
import scannerImg from '../assets/img/galeria/scanner.png'
import { useGaleria } from '../hooks/useGaleria'
import SectionTitle from './SectionTitle'

const recursos = [
  {
    icone: scannerIcon,
    titulo: 'Scanner & OCR',
    texto: 'Transforme documentos borrados em PDFs nítidos com extração de texto instantânea.',
    imagem: scannerImg,
  },
  {
    icone: iaIcon,
    titulo: 'IA Contextual',
    texto: 'A interface se adapta ao que você está fotografando. Modo de estudo detectado automaticamente.',
    imagem: iaImg,
  },
  {
    icone: pastaIcon,
    titulo: 'Organização Inteligente',
    texto: 'Fotos separadas por contexto. Diga adeus à mistura de anotações com fotos pessoais.',
    imagem: organizacaoImg,
  },
]

function Galeria() {
  const { ativo, imagem, trocando, selecionar } = useGaleria(recursos)

  return (
    <section
      id="galeria"
      className="flex min-h-[90vh] scroll-mt-20 flex-col justify-center bg-surface px-[5%] py-20 md:py-25"
    >
      <SectionTitle
        titulo="Galeria de Recursos"
        subtitulo="Explore as funcionalidades que tornam o JOVI a câmera mais inteligente."
      />

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col justify-center gap-5 lg:flex-1">
          {recursos.map((recurso, index) => (
            <button
              key={recurso.titulo}
              onClick={() => selecionar(index)}
              className={`flex gap-5 rounded-xl border-2 bg-white p-6 text-left transition-all duration-300 md:p-7 ${
                ativo === index ? 'border-primary shadow-md' : 'border-transparent hover:border-line'
              }`}
            >
              <img src={recurso.icone} alt="" className="mt-1 size-9 shrink-0" />
              <div>
                <h3 className="mb-2 text-xl text-ink">{recurso.titulo}</h3>
                <p className="text-muted">{recurso.texto}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="h-[460px] overflow-hidden rounded-3xl bg-slate-200 lg:h-[600px] lg:flex-[1.2]">
          <img
            src={imagem}
            alt="Demonstração do recurso selecionado na interface"
            className={`size-full object-contain p-6 transition-opacity duration-300 ${
              trocando ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export default Galeria
