import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="bg-dark vh-100 text-white vw-100">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
