import { useState } from 'react';
import { fazerLogin } from '../services/api';
import { AuthContext } from './AuthContext';

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem('jovi-usuario');
    return salvo ? JSON.parse(salvo) : null
  });

  async function login(username, password) {
    const dados = await fazerLogin(username, password);
    localStorage.setItem('jovi-usuario', JSON.stringify(dados));
    setUsuario(dados);
  };

  function logout() {
    localStorage.removeItem('jovi-usuario');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;