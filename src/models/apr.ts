import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aprTypeSchema, type AprType } from "./apr-type.js";

/** Information about the APR on the account. */
export type Apr = {
  /** Annual Percentage Rate applied. */
  aprPercentage: number;
  /** The type of balance to which the APR applies. */
  aprType: AprType;
  /**
   * Amount of money that is subjected to the APR if a balance was carried beyond payment due date.
   * How it is calculated can vary by card issuer. It is often calculated as an average daily
   * balance.
   */
  balanceSubjectToApr: number | null;
  /** Amount of money charged due to interest from last statement. */
  interestChargeAmount: number | null;
};

export const aprSchema: Schema<Apr> = s.object<Apr>({
  aprPercentage: s.float64(),
  aprType: aprTypeSchema,
  balanceSubjectToApr: s.nullable(s.float64()),
  interestChargeAmount: s.nullable(s.float64()),
  _keysMap: {
    aprPercentage: "apr_percentage",
    aprType: "apr_type",
    balanceSubjectToApr: "balance_subject_to_apr",
    interestChargeAmount: "interest_charge_amount",
  },
});
