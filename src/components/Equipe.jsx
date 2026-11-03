import enzoFoto from '../assets/img/equipe/enzo.jpeg'
import henriqueFoto from '../assets/img/equipe/henrique.png'
import pedroFoto from '../assets/img/equipe/pedro.png'
import pietroFoto from '../assets/img/equipe/pietro.png'
import victorFoto from '../assets/img/equipe/victor.jpeg'
import MembroCard from './MembroCard'
import SectionTitle from './SectionTitle'

const equipe = [
  { nome: 'Enzo G. Pereira', rm: '570659', foto: enzoFoto },
  { nome: 'Victor Ulisses', rm: '572634', foto: victorFoto },
  { nome: 'Henrique Giusti', rm: '570766', foto: henriqueFoto },
  { nome: 'Pietro Alexandre', rm: '571232', foto: pietroFoto },
  { nome: 'Pedro Moura', rm: '570715', foto: pedroFoto },
]

function Equipe() {
  return (
    <section
      id="equipe"
      className="flex min-h-[90vh] scroll-mt-20 flex-col justify-center px-[5%] py-20 md:py-25"
    >
      <SectionTitle
        titulo="Nossa Equipe"
        subtitulo="Os talentos por trás da inteligência da câmera JOVI."
      />

      <div className="flex flex-wrap justify-center gap-7">
        {equipe.map((membro) => (
          <MembroCard key={membro.rm} nome={membro.nome} rm={membro.rm} foto={membro.foto} />
        ))}
      </div>
    </section>
  )
}

export default Equipe
