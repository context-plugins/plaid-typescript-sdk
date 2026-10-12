import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the statement refresh extraction
 *
 * `SUCCESS`: The statements were successfully extracted and can be listed via `/statements/list`
 * and downloaded via `/statements/download`.
 *
 * `FAILURE`: The statements failed to be extracted.
 */
export const StatementsRefreshCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type StatementsRefreshCompleteResult =
  | (typeof StatementsRefreshCompleteResult)[keyof typeof StatementsRefreshCompleteResult]
  | (string & {});

export const statementsRefreshCompleteResultSchema: EnumSchema<StatementsRefreshCompleteResult> =
  s.enumOf<StatementsRefreshCompleteResult>(StatementsRefreshCompleteResult);
