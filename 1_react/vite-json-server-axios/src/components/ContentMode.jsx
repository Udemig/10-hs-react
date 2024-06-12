const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <span>{todo.status}</span>
      <span>{todo.title}</span>
      <div className="btn-group">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setIsEdit(true)}
        >
          Düzenle
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};

export default ContentMode;
