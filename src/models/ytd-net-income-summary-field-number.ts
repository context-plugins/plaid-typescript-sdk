import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type YtdNetIncomeSummaryFieldNumber = {
  value: number;
  verificationStatus: VerificationStatus;
};

export const ytdNetIncomeSummaryFieldNumberSchema: Schema<YtdNetIncomeSummaryFieldNumber> =
  s.object<YtdNetIncomeSummaryFieldNumber>({
    value: s.number(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
