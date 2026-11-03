import SectionTitle from './SectionTitle'
import StatCard from './StatCard'

function PublicoAlvo() {
  return (
    <section
      id="publico-alvo"
      className="flex min-h-[90vh] scroll-mt-20 flex-col justify-center px-[5%] py-20 md:py-25"
    >
      <SectionTitle
        titulo="Público-Alvo"
        subtitulo="Focado em estudantes universitários e jovens profissionais (20+ anos) que buscam eficiência máxima em sua rotina de aprendizado e trabalho."
      />

      <div className="mb-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <StatCard valor="87%" texto="dos alunos fotografam o conteúdo das aulas diariamente." />
        <StatCard valor="61%" texto="não fazem anotações manuais tradicionais e dependem das fotos." />
        <StatCard valor="72%" texto="usam o celular mais de 4 horas por dia em ambiente acadêmico/trabalho." />
      </div>

      <div className="rounded-xl bg-primary px-6 py-10 text-center text-white shadow-md md:px-12 md:py-16">
        <h3 className="mb-6 text-2xl text-white md:text-[2rem]">Por que o JOVI é essencial?</h3>
        <p className="mx-auto max-w-[900px] text-lg leading-[1.8] opacity-95">
          Reduzimos drasticamente a perda de conteúdo, eliminamos a necessidade de digitalização
          manual e organizamos seus estudos de forma totalmente automática, permitindo que você
          foque no que realmente importa: aprender.
        </p>
      </div>
    </section>
  )
}

export default PublicoAlvo
