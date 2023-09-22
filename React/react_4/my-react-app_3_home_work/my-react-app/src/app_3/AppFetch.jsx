import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import TodosList from "./components/TodosList";

export default function AppFetch() {
  const [data, setData] = useState([]);

  const typeRef = useRef("");

  const divRef = useRef();

  function getType(currentType) {
    typeRef.current = currentType;
    console.log(typeRef);
    getData(currentType);
  }

  function getData(type) {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        setData(result);
      });
  }

  useEffect(() => {
    typeRef.current = "users";

    getData("users");
  }, []);

  useEffect(() => {
    console.log("TYPE CHANGE");
  }, [typeRef.current]);

  console.log(data);

  return (
    <>
      <div className="buttons">
        <Button onGetData={() => getType("users")}>Users</Button>
        <Button onGetData={() => getType("posts")}>Posts</Button>
        <Button onGetData={() => getType("todos")}>Todos</Button>
      </div>

      {typeRef.current === "users" && <UsersList users={data} />}
      {typeRef.current === "posts" && <PostsList posts={data} />}
      {typeRef.current === "todos" && <TodosList todos={data} />}
    </>
  );
}
