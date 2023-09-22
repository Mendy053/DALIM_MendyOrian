import { USERS_ACTIONS_TYPES } from "./actions_types";

const USERS_INITIAL_STATE = {
   users: [],
};

export function usersReducer(state = USERS_INITIAL_STATE, action) {
   switch (action.type) {
      case USERS_ACTIONS_TYPES.GET_USERS:
         return {
            users: action.payload,
         };

      default:
         return state;
   }
}
