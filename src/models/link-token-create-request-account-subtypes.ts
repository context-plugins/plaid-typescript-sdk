import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkTokenCreateCreditFilterSchema,
  type LinkTokenCreateCreditFilter,
} from "./link-token-create-credit-filter.js";
import {
  linkTokenCreateDepositoryFilterSchema,
  type LinkTokenCreateDepositoryFilter,
} from "./link-token-create-depository-filter.js";
import {
  linkTokenCreateInvestmentFilterSchema,
  type LinkTokenCreateInvestmentFilter,
} from "./link-token-create-investment-filter.js";
import {
  linkTokenCreateLoanFilterSchema,
  type LinkTokenCreateLoanFilter,
} from "./link-token-create-loan-filter.js";

export type LinkTokenCreateRequestAccountSubtypes = {
  depository?: LinkTokenCreateDepositoryFilter;
  credit?: LinkTokenCreateCreditFilter;
  loan?: LinkTokenCreateLoanFilter;
  investment?: LinkTokenCreateInvestmentFilter;
};

export const linkTokenCreateRequestAccountSubtypesSchema: Schema<LinkTokenCreateRequestAccountSubtypes> =
  s.object<LinkTokenCreateRequestAccountSubtypes>({
    depository: s.optional(s.lazy(() => linkTokenCreateDepositoryFilterSchema)),
    credit: s.optional(s.lazy(() => linkTokenCreateCreditFilterSchema)),
    loan: s.optional(s.lazy(() => linkTokenCreateLoanFilterSchema)),
    investment: s.optional(s.lazy(() => linkTokenCreateInvestmentFilterSchema)),
  });
