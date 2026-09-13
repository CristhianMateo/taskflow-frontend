import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Paso 5: borra la línea de abajo y descomenta handleSubmit() completo
  // (hace POST a /register, guarda el token real y navega al tablero).
  // const handleSubmit = (e) => { e.preventDefault(); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/register', { name, email, password });
    localStorage.setItem('taskflow_token', response.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="brand">📋 TaskFlow</p>
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button type="submit">Crear cuenta</button>
        </form>
        <p>
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
