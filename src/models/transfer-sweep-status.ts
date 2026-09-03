import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferSweepStatus = {
  Unswept: "unswept",
  Swept: "swept",
  SweptSettled: "swept_settled",
  ReturnSwept: "return_swept",
} as const;
export type TransferSweepStatus =
  | (typeof TransferSweepStatus)[keyof typeof TransferSweepStatus]
  | (string & {});

export const transferSweepStatusSchema: EnumSchema<TransferSweepStatus> =
  s.enumOf<TransferSweepStatus>(TransferSweepStatus);
