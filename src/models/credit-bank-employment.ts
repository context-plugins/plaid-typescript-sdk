import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankEmployerSchema, type CreditBankEmployer } from "./credit-bank-employer.js";

/** Detailed information for the bank employment. */
export type CreditBankEmployment = {
  /** A unique identifier for the bank employment. */
  bankEmploymentId: string;
  /** Plaid's unique identifier for the account. */
  accountId: string;
  /** Object containing employer data. */
  employer: CreditBankEmployer;
  /** The date of the most recent deposit from this employer. */
  latestDepositDate: string;
  /**
   * The date of the earliest deposit from this employer from within the period of the days
   * requested.
   */
  earliestDepositDate: string;
};

export const creditBankEmploymentSchema: Schema<CreditBankEmployment> = s.object<CreditBankEmployment>({
  bankEmploymentId: s.string(),
  accountId: s.string(),
  employer: creditBankEmployerSchema,
  latestDepositDate: s.dateOnly(),
  earliestDepositDate: s.dateOnly(),
  _keysMap: {
    bankEmploymentId: "bank_employment_id",
    accountId: "account_id",
    latestDepositDate: "latest_deposit_date",
    earliestDepositDate: "earliest_deposit_date",
  },
});
