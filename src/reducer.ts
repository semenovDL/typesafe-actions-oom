import { createReducer } from "typesafe-actions";
import actions from "./actions/1-10";

const reducer1 = createReducer(0)
  .handleAction(actions.a1, state => state)
  .handleAction(actions.a2, state => state)
  .handleAction(actions.a3, state => state)
  .handleAction(actions.a4, state => state)
  .handleAction(actions.a5, state => state)
  .handleAction(actions.a6, state => state)
  .handleAction(actions.a7, state => state)
  .handleAction(actions.a8, state => state)
  .handleAction(actions.a9, state => state)
  .handleAction(actions.a10, state => state);

export default reducer1;
