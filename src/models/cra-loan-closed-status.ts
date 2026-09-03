import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanStatusSchema, type CraLoanStatus } from "./cra-loan-status.js";

export type CraLoanClosedStatus = {
  status: CraLoanStatus;
  date: string;
};

export const craLoanClosedStatusSchema: Schema<CraLoanClosedStatus> = s.object<CraLoanClosedStatus>({
  status: craLoanStatusSchema,
  date: s.dateOnly(),
});
