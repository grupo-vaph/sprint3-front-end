import codeIcon from '../assets/icons/code.svg'
import emailIcon from '../assets/icons/email.svg'
import { useContactForm } from '../hooks/useContactForm'
import Input from './Input'

function Contato() {
  const { form, erros, enviado, handleChange, handleSubmit } = useContactForm()

  return (
    <section
      id="contato"
      className="flex min-h-[90vh] scroll-mt-20 flex-col justify-center gap-12 bg-night px-[5%] py-20 text-white md:py-25 lg:flex-row lg:items-center lg:gap-20"
    >
      <div className="flex-1">
        <h2 className="mb-4 text-4xl text-white md:text-[2.8rem]">Entre em Contato</h2>
        <p className="mb-12 max-w-[480px] text-[1.05rem] text-gray-400">
          Tem alguma dúvida sobre o JOVI AI? Nossa equipe está pronta para ajudar. Acesse também
          nossa documentação e repositório.
        </p>

        <ul className="space-y-8">
          <li className="flex items-center gap-5">
            <img src={emailIcon} alt="Email" className="size-7" />
            <div>
              <span className="mb-1 block text-xs font-semibold text-gray-400">EMAIL INSTITUCIONAL</span>
              <a href="mailto:contato@joviai.fiap.com.br" className="text-lg font-medium break-all hover:text-blue-300">
                contato@joviai.fiap.com.br
              </a>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <img src={codeIcon} alt="Code" className="size-7" />
            <div>
              <span className="mb-1 block text-xs font-semibold text-gray-400">REPOSITÓRIO</span>
              <a
                href="https://github.com/grupo-vaph/sprint3-front-end"
                target="_blank"
                className="text-lg font-medium break-all hover:text-blue-300"
              >
                github.com/grupo-vaph
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-1 rounded-3xl bg-white p-6 text-ink md:p-12">
        <h3 className="mb-8 text-2xl text-ink">Envie uma Mensagem</h3>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row">
            <Input label="Nome" name="nome" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} erro={erros.nome} />
            <Input label="Email" name="email" type="email" placeholder="seu.email@exemplo.com" value={form.email} onChange={handleChange} erro={erros.email} />
          </div>
          <Input label="Assunto" name="assunto" placeholder="Como podemos ajudar?" value={form.assunto} onChange={handleChange} erro={erros.assunto} />
          <Input label="Mensagem" name="mensagem" textarea placeholder="Escreva sua mensagem aqui..." value={form.mensagem} onChange={handleChange} erro={erros.mensagem} />

          <button
            type="submit"
            className={`w-full rounded-lg py-4 text-[1.05rem] font-semibold text-white transition-colors duration-300 ${
              enviado ? 'bg-green-600' : 'bg-primary hover:bg-secondary'
            }`}
          >
            {enviado ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contato
