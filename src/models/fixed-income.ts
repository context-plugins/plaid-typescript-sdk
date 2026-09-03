import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { yieldRateSchema, type YieldRate } from "./yield-rate.js";

export type FixedIncome = {
  yieldRate: YieldRate | null;
  maturityDate: string | null;
  issueDate: string | null;
  faceValue: number | null;
};

export const fixedIncomeSchema: Schema<FixedIncome> = s.object<FixedIncome>({
  yieldRate: s.nullable(s.lazy(() => yieldRateSchema)),
  maturityDate: s.nullable(s.dateOnly()),
  issueDate: s.nullable(s.dateOnly()),
  faceValue: s.nullable(s.number()),
  _keysMap: {
    yieldRate: "yield_rate",
    maturityDate: "maturity_date",
    issueDate: "issue_date",
    faceValue: "face_value",
  },
});
