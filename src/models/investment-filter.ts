import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentAccountSubtypeSchema,
  type InvestmentAccountSubtype,
} from "./investment-account-subtype.js";

export type InvestmentFilter = {
  accountSubtypes: InvestmentAccountSubtype[];
};

export const investmentFilterSchema: Schema<InvestmentFilter> = s.object<InvestmentFilter>({
  accountSubtypes: s.array(s.lazy(() => investmentAccountSubtypeSchema)),
  _keysMap: {
    accountSubtypes: "account_subtypes",
  },
});
