import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SelfieCheckStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieCheckStatus = (typeof SelfieCheckStatus)[keyof typeof SelfieCheckStatus] | (string & {});

export const selfieCheckStatusSchema: EnumSchema<SelfieCheckStatus> =
  s.enumOf<SelfieCheckStatus>(SelfieCheckStatus);
