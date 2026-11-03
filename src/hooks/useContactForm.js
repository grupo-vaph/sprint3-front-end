import { useState } from 'react'

const formVazio = { nome: '', email: '', assunto: '', mensagem: '' }

// logica do formulario de contato (valores, validacao e envio)
export function useContactForm() {
  const [form, setForm] = useState(formVazio)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const novosErros = {}

    if (form.nome.trim().length < 3) novosErros.nome = 'Digite seu nome completo.'
    if (!form.email.includes('@') || !form.email.includes('.')) novosErros.email = 'Digite um email válido.'
    if (!form.assunto.trim()) novosErros.assunto = 'Digite o assunto.'
    if (form.mensagem.trim().length < 10) novosErros.mensagem = 'A mensagem precisa ter pelo menos 10 letras.'

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault() // nao deixa recarregar a pagina
    if (!validar()) return

    setForm(formVazio)
    setEnviado(true)

    // volta o botao ao normal depois de 3s
    setTimeout(() => setEnviado(false), 3000)
  }

  return { form, erros, enviado, handleChange, handleSubmit }
}
