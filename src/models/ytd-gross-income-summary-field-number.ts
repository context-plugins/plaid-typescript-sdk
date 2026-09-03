import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type YtdGrossIncomeSummaryFieldNumber = {
  value: number;
  verificationStatus: VerificationStatus;
};

export const ytdGrossIncomeSummaryFieldNumberSchema: Schema<YtdGrossIncomeSummaryFieldNumber> =
  s.object<YtdGrossIncomeSummaryFieldNumber>({
    value: s.number(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
