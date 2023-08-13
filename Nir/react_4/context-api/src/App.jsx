import './App.css';
import Balance from './Components/Balance';
import ActionsList from './Components/List/ActionsList';
import NewActionForm from './Components/NewActionForm';
import { ActionsProvider } from './Contexts/Actions';

function App() {
  return (
    <>
      <ActionsProvider>
        <Balance />
        <hr />
        <NewActionForm />
        <hr />
        <hr />
        <ActionsList />
      </ActionsProvider>
    </>
  );
}

export default App;
