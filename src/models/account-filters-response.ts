import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFilterSchema, type CreditFilter } from "./credit-filter.js";
import { depositoryFilterSchema, type DepositoryFilter } from "./depository-filter.js";
import { investmentFilterSchema, type InvestmentFilter } from "./investment-filter.js";
import { loanFilterSchema, type LoanFilter } from "./loan-filter.js";

/** The `account_filters` specified in the original call to `/link/token/create`. */
export type AccountFiltersResponse = {
  /** A filter to apply to `depository`-type accounts */
  depository?: DepositoryFilter;
  /** A filter to apply to `credit`-type accounts */
  credit?: CreditFilter;
  /** A filter to apply to `loan`-type accounts */
  loan?: LoanFilter;
  /**
   * A filter to apply to `investment`-type accounts (or `brokerage`-type accounts for API versions
   * 2018-05-22 and earlier).
   */
  investment?: InvestmentFilter;
};

export const accountFiltersResponseSchema: Schema<AccountFiltersResponse> = s.object<AccountFiltersResponse>({
  depository: s.optional(s.lazy(() => depositoryFilterSchema)),
  credit: s.optional(s.lazy(() => creditFilterSchema)),
  loan: s.optional(s.lazy(() => loanFilterSchema)),
  investment: s.optional(s.lazy(() => investmentFilterSchema)),
});
