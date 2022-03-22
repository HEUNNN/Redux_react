import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
  input, // input에 입력되는 텍스트
  todos, //할 일 목록이 들어 있는 객체
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => {
    dispatch(changeInput(input));
  },
  insert: (text) => {
    dispatch(insert(text));
  },
  toggle: (id) => {
    dispatch(toggle(id));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
