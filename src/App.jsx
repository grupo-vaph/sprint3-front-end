import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import { useScrollToHash } from './hooks/useScrollToHash';
import Home from './pages/Home';
import Login from './pages/Login';
import MinhasCapturas from './pages/MinhasCapturas';
import NotFound from './pages/NotFound';

function App() {
  useScrollToHash();

  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* rotas publicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* rota privada (precisa estar logado) */}
            <Route
              path="/minhas-capturas"
              element={
                <PrivateRoute>
                  <MinhasCapturas />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;