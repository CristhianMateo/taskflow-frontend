import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Paso 5: borra la línea de abajo y descomenta handleSubmit() completo
  // (hace POST a /login, guarda el token real y navega al tablero).
  // const handleSubmit = (e) => { e.preventDefault(); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/login', { email, password });
    localStorage.setItem('taskflow_token', response.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="brand">📋 TaskFlow</p>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
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
    </div>
  );
}

export default Login;
