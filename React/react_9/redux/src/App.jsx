import { connect, useDispatch, useSelector } from "react-redux";
import { addToCounterAction, decrementAction, incrementAction, resetAction } from "./redux/counter/actions";
import { useState } from "react";
import { getUsersAsyncAction } from "./redux/users/actions";

function App(props) {
   const [num, setNum] = useState();
   const state = useSelector((state) => state.counterReducer);
   const dispatch = useDispatch();

   return (
      <>
         {state.count}

         <button onClick={() => dispatch(getUsersAsyncAction())}>GET USERS </button>
         <input type="number" value={num} onChange={(event) => setNum(+event.target.value)} />

         <button
            onClick={() => {
               dispatch(addToCounterAction(num));
            }}
         >
            ADD TO COUNT
         </button>

         <button
            onClick={() => {
               //  props.increment();
               dispatch(incrementAction());
            }}
         >
            INCREMENT
         </button>

         <button
            onClick={() => {
               dispatch(decrementAction());
            }}
         >
            DECREMENT
         </button>

         <button
            onClick={() => {
               dispatch(resetAction());
            }}
         >
            RESET
         </button>
      </>
   );
}

// function mapStateToProps(state) {
//    return {
//       counterState: state.counterReducer,
//    };
// }

// function mapDispatchToProps(dispatch) {
//    return {
//       increment: () => dispatch(incrementAction()),
//       decrement: () => dispatch(decrementAction()),
//    };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
