import { COUNTER_ACTIONS_TYPES } from "./actions_type";

const INITIAL_COUNTER_STATE = {
   count: 0,
};

export function counterReducer(state = INITIAL_COUNTER_STATE, action) {
   switch (action.type) {
      case COUNTER_ACTIONS_TYPES.INCREMENT:
         return {
            count: state.count + 1,
         };

      case COUNTER_ACTIONS_TYPES.DECREMENT:
         return {
            count: state.count - 1,
         };

      case COUNTER_ACTIONS_TYPES.RESET:
         return {
            count: 0,
         };

      case COUNTER_ACTIONS_TYPES.ADD_TO_COUNTER:
         return {
            count: state.count + action.payload,
         };
      default:
         return state;
   }
}
