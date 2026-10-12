import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAccountSchema, type CreditAccount } from "./credit-account.js";
import { depositoryAccountSchema, type DepositoryAccount } from "./depository-account.js";
import {
  investmentAccountSubtype1Schema,
  type InvestmentAccountSubtype1,
} from "./investment-account-subtype1.js";
import { loanAccountSchema, type LoanAccount } from "./loan-account.js";
import { payrollAccountSchema, type PayrollAccount } from "./payroll-account.js";

/**
 * The schema below describes the various `types` and corresponding `subtypes` that Plaid recognizes
 * and reports for financial institution accounts. For a mapping of supported types and subtypes to
 * Plaid products, see the [Account type / product support
 * matrix](https://plaid.com/docs/api/accounts/#account-type--product-support-matrix).
 */
export type StandaloneAccountType = {
  /** An account type holding cash, in which funds are deposited. */
  depository: DepositoryAccount;
  /** A credit card type account. */
  credit: CreditAccount;
  /** A loan type account. */
  loan: LoanAccount;
  /**
   * An investment account. In API versions 2018-05-22 and earlier, this type is called `brokerage`.
   */
  investment: InvestmentAccountSubtype1;
  /** A payroll account. */
  payroll?: PayrollAccount;
  /** Other or unknown account type. */
  other: string;
};

export const standaloneAccountTypeSchema: Schema<StandaloneAccountType> = s.object<StandaloneAccountType>({
  depository: depositoryAccountSchema,
  credit: creditAccountSchema,
  loan: loanAccountSchema,
  investment: investmentAccountSubtype1Schema,
  payroll: s.optional(s.lazy(() => payrollAccountSchema)),
  other: s.string(),
});
