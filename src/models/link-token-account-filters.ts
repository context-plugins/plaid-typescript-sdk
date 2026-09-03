import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFilterSchema, type CreditFilter } from "./credit-filter.js";
import { depositoryFilterSchema, type DepositoryFilter } from "./depository-filter.js";
import { investmentFilterSchema, type InvestmentFilter } from "./investment-filter.js";
import { loanFilterSchema, type LoanFilter } from "./loan-filter.js";
import { otherFilterSchema, type OtherFilter } from "./other-filter.js";

export type LinkTokenAccountFilters = {
  depository?: DepositoryFilter;
  credit?: CreditFilter;
  loan?: LoanFilter;
  investment?: InvestmentFilter;
  other?: OtherFilter;
};

export const linkTokenAccountFiltersSchema: Schema<LinkTokenAccountFilters> =
  s.object<LinkTokenAccountFilters>({
    depository: s.optional(s.lazy(() => depositoryFilterSchema)),
    credit: s.optional(s.lazy(() => creditFilterSchema)),
    loan: s.optional(s.lazy(() => loanFilterSchema)),
    investment: s.optional(s.lazy(() => investmentFilterSchema)),
    other: s.optional(s.lazy(() => otherFilterSchema)),
  });
