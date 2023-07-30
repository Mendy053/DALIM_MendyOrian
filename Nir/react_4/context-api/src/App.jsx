import { useContext, useState } from 'react';
import NewActionForm from './components/NewActionForm';
import { Actions } from './contexts/Actions.js';

function App() {
  const [actions, setActions] = useState([]);


  return (
    <>
      <Actions.Provider value={{ actions, setActions }}>
        <NewActionForm />
      </Actions.Provider>
    </>
  );
}

export default App;
