import { useNavigate } from 'react-router-dom';
import Board from '../components/Board';
import '../styles/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  // Paso 0 (Sesión 7): cierra sesión borrando el token guardado y vuelve al
  // login — sin el token, PrivateRoute no deja volver a entrar al tablero.
  const cerrarSesion = () => {
    localStorage.removeItem('taskflow_token');
    navigate('/login');
  };

  return (
    <div>
      <header className="app-header">
        <h1>📋 TaskFlow</h1>
        <button onClick={cerrarSesion} className="btn-logout">🚪 Cerrar sesión</button>
      </header>
      <Board />
    </div>
  );
}

export default Dashboard;
