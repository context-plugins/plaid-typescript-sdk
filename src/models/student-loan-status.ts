import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

/** An object representing the status of the student loan */
export type StudentLoanStatus = {
  /**
   * The date until which the loan will be in its current status. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  endDate: string | null;
  /** The status type of the student loan */
  type: Type2 | null;
};

export const studentLoanStatusSchema: Schema<StudentLoanStatus> = s.object<StudentLoanStatus>({
  endDate: s.nullable(s.dateOnly()),
  type: s.nullable(s.lazy(() => type2Schema)),
  _keysMap: {
    endDate: "end_date",
  },
});
