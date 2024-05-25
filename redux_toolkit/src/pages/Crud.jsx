import React, { useState } from "react";
import { Button, ButtonGroup, Container, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import crudReducer, { deleteTask } from "./../redux/slices/crudSlice";
import counterReducer from "./../redux/slices/counterSlice";
const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  const { isDarkTheme } = useSelector((store) => store.counterReducer);

  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end mt-5 mb-4">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <Table
          variant={isDarkTheme ? "dark" : "light"}
          responsive
          striped
          hover
          bordered
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Görev</th>
              <th>Yazan</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button
                      onClick={() => {
                        setEditItem(task);
                        setIsOpen(true);
                      }}
                    >
                      Düzenle
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteTask(task.id))}
                      variant="danger"
                    >
                      Sil
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <FormModal
        editItem={editItem}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      />
    </div>
  );
};

export default Crud;
