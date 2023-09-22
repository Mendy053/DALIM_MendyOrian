import { useActions } from "../../Contexts/Actions";
import TrashIcon from "../TrashIcon";

export default function Item(props) {
    const [actions, setActions] = useActions();

    function deleteAction(e) {
        setActions([...actions.filter(action => action.id !== props.action.id)]);
    }
    return (<div>
        <h3>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.action.sum)}</h3>
        <p>{props.action.date}</p>
        <div onClick={(e) => deleteAction(e)}>
            <TrashIcon />
        </div>
    </div>
    );
}
