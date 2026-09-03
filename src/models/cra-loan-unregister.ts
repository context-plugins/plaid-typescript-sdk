import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanClosedStatusSchema, type CraLoanClosedStatus } from "./cra-loan-closed-status.js";

export type CraLoanUnregister = {
  loanId: string;
  closedWithStatus: CraLoanClosedStatus;
};

export const craLoanUnregisterSchema: Schema<CraLoanUnregister> = s.object<CraLoanUnregister>({
  loanId: s.string(),
  closedWithStatus: craLoanClosedStatusSchema,
  _keysMap: {
    loanId: "loan_id",
    closedWithStatus: "closed_with_status",
  },
});
