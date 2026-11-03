import { useEffect } from 'react'
import { useLocation } from 'react-router'

// quando clica num link tipo /#galeria, rola ate a secao
// quando troca de pagina, volta pro topo
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const secao = document.getElementById(location.hash.replace('#', ''))
      if (secao) secao.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])
}
