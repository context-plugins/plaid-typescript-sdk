import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type StudentLoanStatus = {
  endDate: string | null;
  type: Type2 | null;
};

export const studentLoanStatusSchema: Schema<StudentLoanStatus> = s.object<StudentLoanStatus>({
  endDate: s.nullable(s.dateOnly()),
  type: s.nullable(s.lazy(() => type2Schema)),
  _keysMap: {
    endDate: "end_date",
  },
});
