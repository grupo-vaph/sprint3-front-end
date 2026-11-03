import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-[5%] py-16 text-center">
      <p className="font-display text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-3xl">Página não encontrada</h1>
      <p className="mt-3 text-muted">Esse endereço não existe no site do JOVI.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-secondary"
      >
        Voltar para o início
      </Link>
    </section>
  );
};

export default NotFound;