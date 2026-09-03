import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentAccountSubtypeSchema,
  type InvestmentAccountSubtype,
} from "./investment-account-subtype.js";

export type LinkTokenCreateInvestmentFilter = {
  accountSubtypes?: InvestmentAccountSubtype[];
};

export const linkTokenCreateInvestmentFilterSchema: Schema<LinkTokenCreateInvestmentFilter> =
  s.object<LinkTokenCreateInvestmentFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => investmentAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
