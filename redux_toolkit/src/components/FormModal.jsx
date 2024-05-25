import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  console.log(editItem);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    // FormData örneği oluşturur
    const formData = new FormData(e.target);
    console.log(formData);
    // Inputlardaki bilgileri nesneye çevirir
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // reducera yeni task eklenileceğini haber ver
      dispatch(addTask(taskData));
    }

    // modalı kapat
    handleClose();
  };

  //   const entries = [
  //     ["name", "Ali"],
  //     ["age", 30],
  //     ["city", "istanbul"],
  //   ];
  //   console.log(entries);
  //   console.log(Object.fromEntries(entries));

  return (
    <Modal centered show={isOpen} className="text-black">
      <Modal.Header>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbarı Düzenle"
              required
              defaultValue={editItem?.title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz:</Form.Label>
            <Form.Control
              name="author"
              required
              defaultValue={editItem?.author}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanılacak Kişi:</Form.Label>
            <Form.Control
              name="assigned_to"
              required
              defaultValue={editItem?.assigned_to}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi:</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              required
              defaultValue={editItem?.end_date}
            />
          </Form.Group>
          {/* Butonlar */}
          <Modal.Footer>
            <Button onClick={handleClose} type="button" variant="secondary">
              İptal
            </Button>
            <Button type="submit">{editItem ? "Kaydet" : "Oluştur"}</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
