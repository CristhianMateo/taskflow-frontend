import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pendiente');

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then((response) => {
        const tarea = response.data.data;

        setTask(tarea);
        setTitle(tarea.title);
        setStatus(tarea.status);
      });
  }, [id]);

  const guardarCambios = (e) => {
    e.preventDefault();

    api.patch(`/tasks/${id}`, {
      title,
      status,
    }).then((response) => {
      setTask(response.data.data);
      alert('Tarea actualizada correctamente');
    });
  };

  if (!task) {
    return <p>Cargando tarea...</p>;
  }

  return (
    <div>
      <h2>Detalle de tarea</h2>

      <p>
        <strong>ID:</strong> {task.id}
      </p>

      <form onSubmit={guardarCambios}>
        <div>
          <label>Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Estado</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>

        <button type="submit">
          Guardar cambios
        </button>

        <button
          type="button"
          onClick={() => navigate('/dashboard')}
        >
          Volver
        </button>
      </form>
    </div>
  );
}

export default TaskDetail;