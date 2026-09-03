import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanStatusSchema, type CraLoanStatus } from "./cra-loan-status.js";

export type CraLoanStatusHistoryUpdate = {
  status: CraLoanStatus;
  date: string;
};

export const craLoanStatusHistoryUpdateSchema: Schema<CraLoanStatusHistoryUpdate> =
  s.object<CraLoanStatusHistoryUpdate>({
    status: craLoanStatusSchema,
    date: s.dateOnly(),
  });
