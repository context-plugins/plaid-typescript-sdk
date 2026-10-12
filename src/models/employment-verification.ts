import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employerVerificationSchema, type EmployerVerification } from "./employer-verification.js";
import {
  employmentVerificationStatusSchema,
  type EmploymentVerificationStatus,
} from "./employment-verification-status.js";
import { platformIdsSchema, type PlatformIds } from "./platform-ids.js";

/** An object containing proof of employment data for an individual */
export type EmploymentVerification = {
  /** Current employment status. */
  status?: EmploymentVerificationStatus | null;
  /** Start of employment in ISO 8601 format (YYYY-MM-DD). */
  startDate?: string | null;
  /** End of employment, if applicable. Provided in ISO 8601 format (YYY-MM-DD). */
  endDate?: string | null;
  /** An object containing employer data. */
  employer?: EmployerVerification;
  /** Current title of employee. */
  title?: string | null;
  /** An object containing a set of ids related to an employee */
  platformIds?: PlatformIds;
};

export const employmentVerificationSchema: Schema<EmploymentVerification> = s.object<EmploymentVerification>({
  status: s.optionalNullable(s.lazy(() => employmentVerificationStatusSchema)),
  startDate: s.optionalNullable(s.dateOnly()),
  endDate: s.optionalNullable(s.dateOnly()),
  employer: s.optional(s.lazy(() => employerVerificationSchema)),
  title: s.optionalNullable(s.string()),
  platformIds: s.optional(s.lazy(() => platformIdsSchema)),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
    platformIds: "platform_ids",
  },
});
