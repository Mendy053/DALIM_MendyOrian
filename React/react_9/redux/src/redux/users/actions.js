import { USERS_ACTIONS_TYPES } from "./actions_types";

export function getUsersAsyncAction() {
   return async function (dispatch) {
      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
         const data = await response.json();

         dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS, payload: data });
      } catch (error) {}
   };
}
