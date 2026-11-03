import brilhoIcon from '../assets/icons/brilho.svg';
import pastaIcon from '../assets/icons/pasta.svg';
import scannerIcon from '../assets/icons/scanner.svg';

const tipos = {
  lousa: { nome: 'Lousa', icone: brilhoIcon },
  documento: { nome: 'Documento', icone: scannerIcon },
  recibo: { nome: 'Recibo', icone: pastaIcon },
};

const pastas = {
  estudo: 'Estudos',
  trabalho: 'Trabalho',
  financeiro: 'Financeiro',
};

function CapturaCard({ titulo, tipo, categoria, data, textoExtraido, confianca }) {
  return (
    <div className="hover-flutuar flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          <img src={tipos[tipo].icone} alt="" className="size-4" />
          {tipos[tipo].nome}
        </span>
        <span className="text-sm text-muted">{new Date(data).toLocaleDateString('pt-BR')}</span>
      </div>

      <h3 className="mb-2 text-lg leading-snug">{titulo}</h3>
      <p className="mb-5 line-clamp-3 flex-1 text-sm text-muted">{textoExtraido}</p>

      <div className="flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="font-medium">{pastas[categoria]}</span>
        <span className="text-muted">IA: {Math.round(confianca * 100)}% de confiança</span>
      </div>
    </div>
  );
};

export default CapturaCard;