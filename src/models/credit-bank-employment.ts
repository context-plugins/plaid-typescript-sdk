import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankEmployerSchema, type CreditBankEmployer } from "./credit-bank-employer.js";

export type CreditBankEmployment = {
  bankEmploymentId: string;
  accountId: string;
  employer: CreditBankEmployer;
  latestDepositDate: string;
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
