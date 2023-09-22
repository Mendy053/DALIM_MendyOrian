import { COUNTER_ACTIONS_TYPES } from "./actions_type";

export function decrementAction() {
   return {
      type: COUNTER_ACTIONS_TYPES.DECREMENT,
   };
}

export function incrementAction() {
   return {
      type: COUNTER_ACTIONS_TYPES.INCREMENT,
   };
}

export function resetAction() {
   return {
      type: COUNTER_ACTIONS_TYPES.RESET,
   };
}

export function addToCounterAction(data) {
   return {
      type: COUNTER_ACTIONS_TYPES.ADD_TO_COUNTER,
      payload: data,
   };
}
