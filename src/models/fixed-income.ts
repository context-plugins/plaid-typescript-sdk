import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { yieldRateSchema, type YieldRate } from "./yield-rate.js";

/** Details about the fixed income security. */
export type FixedIncome = {
  /** Details about a fixed income security's expected rate of return. */
  yieldRate: YieldRate | null;
  /**
   * The maturity date for this fixed income security, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  maturityDate: string | null;
  /**
   * The issue date for this fixed income security, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  issueDate: string | null;
  /**
   * The face value that is paid upon maturity of the fixed income security, per unit of security.
   */
  faceValue: number | null;
};

export const fixedIncomeSchema: Schema<FixedIncome> = s.object<FixedIncome>({
  yieldRate: s.nullable(s.lazy(() => yieldRateSchema)),
  maturityDate: s.nullable(s.dateOnly()),
  issueDate: s.nullable(s.dateOnly()),
  faceValue: s.nullable(s.float64()),
  _keysMap: {
    yieldRate: "yield_rate",
    maturityDate: "maturity_date",
    issueDate: "issue_date",
    faceValue: "face_value",
  },
});
