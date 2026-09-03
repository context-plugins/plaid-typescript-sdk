import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanStatusSchema, type CraLoanStatus } from "./cra-loan-status.js";

export type CraLoanOpenedStatus = {
  status: CraLoanStatus;
  date: string;
};

export const craLoanOpenedStatusSchema: Schema<CraLoanOpenedStatus> = s.object<CraLoanOpenedStatus>({
  status: craLoanStatusSchema,
  date: s.dateOnly(),
});
