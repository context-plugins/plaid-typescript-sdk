import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditEmployerVerificationSchema,
  type CreditEmployerVerification,
} from "./credit-employer-verification.js";
import { creditPlatformIdsSchema, type CreditPlatformIds } from "./credit-platform-ids.js";

export type CreditEmploymentVerification = {
  accountId: string | null;
  status: string | null;
  startDate: string | null;
  endDate: string | null;
  employer: CreditEmployerVerification;
  title: string | null;
  platformIds: CreditPlatformIds;
  employeeType: string | null;
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
