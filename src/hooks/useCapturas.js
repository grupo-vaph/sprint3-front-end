import { useEffect, useMemo, useState } from 'react';
import { buscarCapturas } from '../services/api';

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
};

export function useCapturas() {
  const [capturas, setCapturas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [pasta, setPasta] = useState('todas');
  const [busca, setBusca] = useState('');

  function pedirCapturas() {
    buscarCapturas()
      .then((dados) => setCapturas(dados))
      .catch((error) => setErro(error.message))
      .finally(() => setCarregando(false))
  }

  useEffect(() => {
    pedirCapturas();
  }, []);

  function tentarDeNovo() {
    setCarregando(true);
    setErro('');
    pedirCapturas();
  };

  const capturasFiltradas = useMemo(() => {
    return capturas
      .filter((captura) => pasta === 'todas' || captura.categoria === pasta)
      .filter((captura) =>
        normalizar(captura.titulo + ' ' + captura.textoExtraido).includes(normalizar(busca)),
      );
  }, [capturas, pasta, busca]);

  return {
    capturas: capturasFiltradas,
    total: capturas.length,
    carregando,
    erro,
    tentarDeNovo,
    pasta,
    setPasta,
    busca,
    setBusca,
  };
};