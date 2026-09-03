import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerifySmsDetailsStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type VerifySmsDetailsStatus =
  | (typeof VerifySmsDetailsStatus)[keyof typeof VerifySmsDetailsStatus]
  | (string & {});

export const verifySmsDetailsStatusSchema: EnumSchema<VerifySmsDetailsStatus> =
  s.enumOf<VerifySmsDetailsStatus>(VerifySmsDetailsStatus);
