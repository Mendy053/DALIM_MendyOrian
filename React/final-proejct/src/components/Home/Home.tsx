import { useSelector } from "react-redux";
import { TodoType } from "../../state/todo/Actions/ActionsTypes";
import List from "./List";

type GroupedTodosType = { [status: string]: TodoType[]; };

const Home: React.FC = () => {
    const Todos = useSelector((state: TodoType[]) => state);
    const GroupedTodos: GroupedTodosType = Todos.reduce((GroupedTodos, item) => {
        if (!GroupedTodos[item.status]) {
            GroupedTodos[item.status] = [];
        }
        GroupedTodos[item.status].push(item);
        return GroupedTodos;
    }, {} as GroupedTodosType);

    return (
        <div className="list-container">
            <List listName={"new"} listData={GroupedTodos["new"] ? GroupedTodos["new"] : []}></List>;
            <List listName={"process"} listData={GroupedTodos["process"] ? GroupedTodos["process"] : []}></List>;
            <List listName={"done"} listData={GroupedTodos["done"] ? GroupedTodos["done"] : []}></List>;
        </div>
    );
};

export default Home;