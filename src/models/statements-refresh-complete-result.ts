import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatementsRefreshCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type StatementsRefreshCompleteResult =
  | (typeof StatementsRefreshCompleteResult)[keyof typeof StatementsRefreshCompleteResult]
  | (string & {});

export const statementsRefreshCompleteResultSchema: EnumSchema<StatementsRefreshCompleteResult> =
  s.enumOf<StatementsRefreshCompleteResult>(StatementsRefreshCompleteResult);
