import { connect} from "react-redux";
import { TodoType } from "../state/todo/Actions/ActionsTypes";
import List from "./Home/List";
import { RootState } from "../state";
import { useState } from "react";

type GroupedTodosType = { [status: string]: TodoType[]; };

interface TrashPropsType {
    Todos: TodoType[]
}

const Trash: React.FC<TrashPropsType> = ({ Todos }) => {
    const [clicked, setClicked] = useState<number | null>(null)
    const GroupedTodos: GroupedTodosType = Todos.reduce((GroupedTodos, item) => {
        if (!GroupedTodos[item.status]) {
            GroupedTodos[item.status] = [];
        }
        GroupedTodos[item.status].push(item);
        return GroupedTodos;
    }, {} as GroupedTodosType);

    return (<>
        <div className="list-container deleted-list">
            <List listName={"deleted"} listData={GroupedTodos["deleted"] ? GroupedTodos["deleted"] : []} clicked={clicked} setClicked={setClicked}></List>
        </div >
    </>
    );
};

export const TrashConnected = connect((state: RootState) => ({ Todos: state.todos }))(Trash)