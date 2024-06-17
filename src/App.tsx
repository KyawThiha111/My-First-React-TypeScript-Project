import React, { FC, ChangeEvent } from "react";
import { useState } from "react";
import { TodoInterface } from "./todoInterface";
const App: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoNote, setTodoNote] = useState("");
  const [todoArr, setTodoArr] = useState<TodoInterface[]>([]);

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "todoInput") {
      setTodo(e.target.value);
    } else if (e.target.name === "noteInput") {
      setTodoNote(e.target.value);
    }
  };

  const AddTodo = ()=>{
    setTodoArr([...todoArr,{todoName:todo,todoNote:todoNote}]);
    console.log(todoArr)
  }
  return (
    <div>
      <div className="container">
        <h1>Your Todo List</h1>
        <div className="flex flex-col w-1/3 space-y-2 text-center">
          <input
            onChange={handleChangeTodo}
            name="todoInput"
            placeholder="Add your todo here"
            className="border border-black px-3 py-3 focus:outline-blue-500"
          />

          <input
            onChange={handleChangeTodo}
            name="noteInput"
            placeholder="Write a note"
            className="border border-black px-3 py-3 focus:outline-blue-500"
          />
          <p className="text-green-600 w-full">
            You must add a note for your todo list.
          </p>

          <button onClick={AddTodo} className="px-5 py-3 bg-blue-500 border border-blue-500">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
