import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountFilter = {
  depository?: string[];
  credit?: string[];
  loan?: string[];
  investment?: string[];
};

export const accountFilterSchema: Schema<AccountFilter> = s.object<AccountFilter>({
  depository: s.optional(s.array(s.string())),
  credit: s.optional(s.array(s.string())),
  loan: s.optional(s.array(s.string())),
  investment: s.optional(s.array(s.string())),
});
