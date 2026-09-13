import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post('/login', {
      email,
      password,
    });

    localStorage.setItem('taskflow_token', response.data.token);

    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />

        <button type="submit">Entrar</button>
      </form>

      <p>
        ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
      </p>
    </div>
  );
}

export default Login;