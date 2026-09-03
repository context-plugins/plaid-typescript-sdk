import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";

export type InstitutionsSearchAccountFilter = {
  loan?: (AccountSubtype | null)[];
  depository?: (AccountSubtype | null)[];
  credit?: (AccountSubtype | null)[];
  investment?: (AccountSubtype | null)[];
};

export const institutionsSearchAccountFilterSchema: Schema<InstitutionsSearchAccountFilter> =
  s.object<InstitutionsSearchAccountFilter>({
    loan: s.optional(s.array(s.nullable(s.lazy(() => accountSubtypeSchema)))),
    depository: s.optional(s.array(s.nullable(s.lazy(() => accountSubtypeSchema)))),
    credit: s.optional(s.array(s.nullable(s.lazy(() => accountSubtypeSchema)))),
    investment: s.optional(s.array(s.nullable(s.lazy(() => accountSubtypeSchema)))),
  });
