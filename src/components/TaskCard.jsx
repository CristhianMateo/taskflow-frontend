function TaskCard({ id, title, status, onCambiarEstado, onEliminar }) {
  const siguiente = {
    pendiente: 'en_progreso',
    en_progreso: 'completada',
    completada: null,
  };

  return (
    <div className={`task-card ${status}`}>
      <h4>{title}</h4>
      <span className={`badge ${status}`}>{status}</span>
      {siguiente[status] && (
        <button onClick={() => onCambiarEstado(id, siguiente[status])}>
          ➡️ Avanzar
        </button>
      )}
      <button onClick={() => onEliminar(id)} className="btn-eliminar">🗑</button>
    </div>
  );
}

export default TaskCard;
