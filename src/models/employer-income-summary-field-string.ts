import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type EmployerIncomeSummaryFieldString = {
  value: string;
  verificationStatus: VerificationStatus;
};

export const employerIncomeSummaryFieldStringSchema: Schema<EmployerIncomeSummaryFieldString> =
  s.object<EmployerIncomeSummaryFieldString>({
    value: s.string(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
