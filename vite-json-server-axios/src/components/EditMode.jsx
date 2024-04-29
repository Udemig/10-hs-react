import React from "react";

const EditMode = ({ handleUpdate, setIsEdit, todo }) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="d-flex justify-content-between gap-3 align-items-center"
    >
      <select className="form-select shadow w-25">
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <input type="text" className="form-control w-50 shadow" />
      <div className="btn-group">
        <button type="submit" className="btn btn-sm btn-success">
          Onayla
        </button>
        <button
          type="button"
          className="btn btn-sm btn-secondary"
          onClick={() => setIsEdit(false)}
        >
          İptal
        </button>
      </div>
    </form>
  );
};

export default EditMode;
