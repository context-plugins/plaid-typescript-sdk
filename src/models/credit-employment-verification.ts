import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditEmployerVerificationSchema,
  type CreditEmployerVerification,
} from "./credit-employer-verification.js";
import { creditPlatformIdsSchema, type CreditPlatformIds } from "./credit-platform-ids.js";

/** The object containing proof of employment data for an individual. */
export type CreditEmploymentVerification = {
  /** ID of the payroll provider account. */
  accountId: string | null;
  /** Current employment status. */
  status: string | null;
  /** Start of employment in ISO 8601 format (YYYY-MM-DD). */
  startDate: string | null;
  /** End of employment, if applicable. Provided in ISO 8601 format (YYY-MM-DD). */
  endDate: string | null;
  /** An object containing employer data. */
  employer: CreditEmployerVerification;
  /** Current title of employee. */
  title: string | null;
  /** The object containing a set of ids related to an employee. */
  platformIds: CreditPlatformIds;
  /**
   * The type of employment for the individual. `"FULL_TIME"`: A full-time employee. `"PART_TIME"`:
   * A part-time employee. `"CONTRACTOR"`: An employee typically hired externally through a
   * contracting group. `"TEMPORARY"`: A temporary employee. `"OTHER"`: The employee type is not one
   * of the above defined types.
   */
  employeeType: string | null;
  /** The date of the employee's most recent paystub in ISO 8601 format (YYYY-MM-DD). */
  lastPaystubDate: string | null;
};

export const creditEmploymentVerificationSchema: Schema<CreditEmploymentVerification> =
  s.object<CreditEmploymentVerification>({
    accountId: s.nullable(s.string()),
    status: s.nullable(s.string()),
    startDate: s.nullable(s.dateOnly()),
    endDate: s.nullable(s.dateOnly()),
    employer: creditEmployerVerificationSchema,
    title: s.nullable(s.string()),
    platformIds: creditPlatformIdsSchema,
    employeeType: s.nullable(s.string()),
    lastPaystubDate: s.nullable(s.dateOnly()),
    _keysMap: {
      accountId: "account_id",
      startDate: "start_date",
      endDate: "end_date",
      platformIds: "platform_ids",
      employeeType: "employee_type",
      lastPaystubDate: "last_paystub_date",
    },
  });
