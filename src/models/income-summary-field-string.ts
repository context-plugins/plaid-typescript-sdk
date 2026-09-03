import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type IncomeSummaryFieldString = {
  value: string;
  verificationStatus: VerificationStatus;
};

export const incomeSummaryFieldStringSchema: Schema<IncomeSummaryFieldString> =
  s.object<IncomeSummaryFieldString>({
    value: s.string(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
