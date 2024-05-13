import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  /*
   * Store'da ki verilere abone olmak için useSelector kullanılır.
   * Direkt store'u return edersek uyarı verir.(Çok fazla render)
   * Genelde sadece ihtiyacımız olan reducer'a abone oluruz.
   */
  const storeState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
