import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Enumerates the account subtypes that the application wishes for the user to be able to select
 * from. For more details refer to Plaid documentation on account filters.
 */
export type AccountFilter = {
  /** A list of account subtypes to be filtered. */
  depository?: string[];
  /** A list of account subtypes to be filtered. */
  credit?: string[];
  /** A list of account subtypes to be filtered. */
  loan?: string[];
  /** A list of account subtypes to be filtered. */
  investment?: string[];
};

export const accountFilterSchema: Schema<AccountFilter> = s.object<AccountFilter>({
  depository: s.optional(s.array(s.string())),
  credit: s.optional(s.array(s.string())),
  loan: s.optional(s.array(s.string())),
  investment: s.optional(s.array(s.string())),
});
