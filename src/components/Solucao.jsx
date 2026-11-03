import alertaIcon from '../assets/icons/alerta.svg'
import brilhoIcon from '../assets/icons/brilho.svg'
import checkIcon from '../assets/icons/check.svg'
import pastaIcon from '../assets/icons/pasta.svg'
import scannerIcon from '../assets/icons/scanner.svg'
import xIcon from '../assets/icons/x.svg'
import SectionTitle from './SectionTitle'

const problemas = [
  'Câmeras com 17+ modos manuais confusos.',
  'Descontinuação de ferramentas vitais como Microsoft Lens.',
  'Organização caótica de fotos de estudos e recibos na galeria pessoal.',
]

const solucoes = [
  { icone: brilhoIcon, titulo: 'IA Contextual:', texto: 'Detecta automaticamente o que você está fotografando.' },
  { icone: scannerIcon, titulo: 'Scanner Inteligente:', texto: 'OCR integrado, exportação para PDF e texto instantânea.' },
  { icone: pastaIcon, titulo: 'Organização Automática:', texto: 'Separa suas fotos de trabalho/estudo da galeria pessoal.' },
]

function Solucao() {
  return (
    <section
      id="solucao"
      className="flex min-h-[90vh] scroll-mt-20 flex-col justify-center bg-surface px-[5%] py-20 md:py-25"
    >
      <SectionTitle titulo="O Problema vs" destaque="A Solução JOVI" centralizado={false} />

      <div className="mt-14 flex flex-col gap-10 lg:flex-row">
        {/* card do problema */}
        <div className="flex-1 rounded-xl border border-line bg-white px-6 py-8 shadow-sm md:px-10 md:py-14">
          <div className="mb-8 flex items-center gap-4">
            <img src={alertaIcon} alt="Alerta" className="size-8" />
            <h3 className="text-2xl text-muted">O Problema Atual</h3>
          </div>
          <ul className="space-y-6">
            {problemas.map((problema) => (
              <li key={problema} className="flex items-start gap-4 text-[1.05rem] text-muted">
                <img src={xIcon} alt="X" className="mt-0.5 size-5.5 shrink-0" />
                {problema}
              </li>
            ))}
          </ul>
        </div>

        {/* card da solucao */}
        <div className="flex-1 rounded-xl border border-[#C7D2FE] bg-linear-145 from-[#F0F4FF] to-[#E0E7FF] px-6 py-8 shadow-sm md:px-10 md:py-14">
          <div className="mb-8 flex items-center gap-4">
            <img src={checkIcon} alt="Check" className="size-8" />
            <h3 className="text-2xl">A Solução JOVI</h3>
          </div>
          <ul className="space-y-6">
            {solucoes.map((solucao) => (
              <li key={solucao.titulo} className="flex items-start gap-4 text-[1.05rem]">
                <img src={solucao.icone} alt="" className="mt-0.5 size-5.5 shrink-0" />
                <p>
                  <strong className="text-secondary">{solucao.titulo}</strong> {solucao.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Solucao
