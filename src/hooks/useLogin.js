import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './useAuth';

export function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setErro('Preencha usuário e senha.');
      return;
    };

    setErro('');
    setCarregando(true);

    try {
      await login(username, password);
      navigate('/minhas-capturas');
    } catch (error) {
      setErro(error.message);
      setCarregando(false);
    };
  };

  return { username, setUsername, password, setPassword, erro, carregando, handleSubmit }
};