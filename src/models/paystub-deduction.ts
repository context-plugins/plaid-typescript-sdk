import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubDeduction = {
  type: string | null;
  isPretax: boolean | null;
  total: number | null;
};

export const paystubDeductionSchema: Schema<PaystubDeduction> = s.object<PaystubDeduction>({
  type: s.nullable(s.string()),
  isPretax: s.nullable(s.boolean()),
  total: s.nullable(s.number()),
  _keysMap: {
    isPretax: "is_pretax",
  },
});
