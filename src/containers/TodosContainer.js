import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import React from "react";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const onChangeInput = (input) => dispatch(changeInput(input));
  //Todos 컴포넌트에서 onChangeInput에 인풋 파라미터를 넣어준다.
  const onInsert = (text) => dispatch(insert(text));
  const onToggle = (id) => dispatch(toggle(id));
  const onRemove = (id) => dispatch(remove(id));
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
