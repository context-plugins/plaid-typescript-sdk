import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employerVerificationSchema, type EmployerVerification } from "./employer-verification.js";
import {
  employmentVerificationStatusSchema,
  type EmploymentVerificationStatus,
} from "./employment-verification-status.js";
import { platformIdsSchema, type PlatformIds } from "./platform-ids.js";

export type EmploymentVerification = {
  status?: EmploymentVerificationStatus | null;
  startDate?: string | null;
  endDate?: string | null;
  employer?: EmployerVerification;
  title?: string | null;
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
