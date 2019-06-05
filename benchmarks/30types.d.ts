import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
  export type RootAction = ActionType<
    | typeof import("../src/actions/1-10").default
    | typeof import("../src/actions/11-30").default
  >;
  export type RootState = StateType<typeof import("../src/reducer").default>;

  interface Types {
    RootAction: RootAction;
  }
}
