import { useEffect, useRef, useState } from 'react'

// logica da galeria: qual recurso esta ativo e a troca da imagem com fade
export function useGaleria(recursos) {
  const [ativo, setAtivo] = useState(0)
  const [imagem, setImagem] = useState(recursos[0].imagem)
  const [trocando, setTrocando] = useState(false)
  const timer = useRef(null)

  // limpa o timer se o componente sair da tela
  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [])

  function selecionar(index) {
    if (index === ativo) return

    setAtivo(index)
    setTrocando(true)

    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setImagem(recursos[index].imagem)
      setTrocando(false)
    }, 300)
  }

  return { ativo, imagem, trocando, selecionar }
}
