import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Deduction on the paystub */
export type PaystubDeduction = {
  /**
   * The type of the deduction, as provided on the paystub. For example: `"401(k)"`, `"FICA MED
   * TAX"`.
   */
  type: string | null;
  /** `true` if the deduction is pre-tax; `false` otherwise. */
  isPretax: boolean | null;
  /** The amount of the deduction. */
  total: number | null;
};

export const paystubDeductionSchema: Schema<PaystubDeduction> = s.object<PaystubDeduction>({
  type: s.nullable(s.string()),
  isPretax: s.nullable(s.boolean()),
  total: s.nullable(s.float64()),
  _keysMap: {
    isPretax: "is_pretax",
  },
});
