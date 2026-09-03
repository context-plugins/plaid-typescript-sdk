import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAccountSubtypeSchema, type CreditAccountSubtype } from "./credit-account-subtype.js";

export type CreditFilter = {
  accountSubtypes: CreditAccountSubtype[];
};

export const creditFilterSchema: Schema<CreditFilter> = s.object<CreditFilter>({
  accountSubtypes: s.array(s.lazy(() => creditAccountSubtypeSchema)),
  _keysMap: {
    accountSubtypes: "account_subtypes",
  },
});
