import { useActions } from "../../Contexts/Actions";
import Item from "./Item";

export default function ActionsList() {
    const [actions, setActions] = useActions();

    return <>
        {
            actions.map(action => {
                return <Item key={action.id} action={action}></Item>;
            })
        }
    </>;

}
