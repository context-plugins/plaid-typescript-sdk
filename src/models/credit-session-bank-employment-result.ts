import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankEmploymentStatusSchema,
  type CreditSessionBankEmploymentStatus,
} from "./credit-session-bank-employment-status.js";

/** The details of a bank employment verification in Link. */
export type CreditSessionBankEmploymentResult = {
  /**
   * Status of the Bank Employment Link session.
   *
   * `APPROVED`: User has approved and verified their employment.
   *
   * `NO_EMPLOYERS_FOUND`: We attempted, but were unable to find any employment in the connected
   * account.
   *
   * `EMPLOYER_NOT_LISTED`: The user explicitly indicated that they did not see their current or
   * previous employer in the list of employer names found.
   *
   * `STARTED`: The user began the bank employment portion of the link flow.
   *
   * `INTERNAL_ERROR`: The user encountered an internal error.
   */
  status?: CreditSessionBankEmploymentStatus;
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId?: string;
  /** The Plaid Institution ID associated with the Item. */
  institutionId?: string;
};

export const creditSessionBankEmploymentResultSchema: Schema<CreditSessionBankEmploymentResult> =
  s.object<CreditSessionBankEmploymentResult>({
    status: s.optional(s.lazy(() => creditSessionBankEmploymentStatusSchema)),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
