import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanStatusSchema, type CraLoanStatus } from "./cra-loan-status.js";

/** Contains the status and date information of the loan when unregistering. */
export type CraLoanClosedStatus = {
  /** The status of the loan. */
  status: CraLoanStatus;
  /**
   * The effective date for the status of the loan. The date should be in ISO 8601 format
   * (YYYY-MM-DD).
   */
  date: string;
};

export const craLoanClosedStatusSchema: Schema<CraLoanClosedStatus> = s.object<CraLoanClosedStatus>({
  status: craLoanStatusSchema,
  date: s.dateOnly(),
});
