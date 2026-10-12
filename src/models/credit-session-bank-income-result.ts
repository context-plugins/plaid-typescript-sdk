import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankIncomeStatusSchema,
  type CreditSessionBankIncomeStatus,
} from "./credit-session-bank-income-status.js";

/** The details of a bank income verification in Link */
export type CreditSessionBankIncomeResult = {
  /**
   * Status of the Bank Income Link session.
   *
   * `APPROVED`: User has approved and verified their income
   *
   * `NO_DEPOSITS_FOUND`: We attempted, but were unable to find any income in the connected account.
   *
   * `USER_REPORTED_NO_INCOME`: The user explicitly indicated that they don't receive income in the
   * connected account.
   *
   * `STARTED`: The user began the bank income portion of the link flow.
   *
   * `INTERNAL_ERROR`: The user encountered an internal error.
   */
  status?: CreditSessionBankIncomeStatus;
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId?: string;
  /** The Plaid Institution ID associated with the Item. */
  institutionId?: string;
};

export const creditSessionBankIncomeResultSchema: Schema<CreditSessionBankIncomeResult> =
  s.object<CreditSessionBankIncomeResult>({
    status: s.optional(s.lazy(() => creditSessionBankIncomeStatusSchema)),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
