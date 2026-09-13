import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  // Paso 2 (Sesión 7): HashRouter (en vez de BrowserRouter) para que las
  // rutas funcionen en un hosting estático como GitHub Pages, que no sabe
  // devolver index.html ante una URL profunda (ej. /dashboard) recargada
  // directamente — con hash (#/dashboard) esa parte nunca llega al servidor.
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
