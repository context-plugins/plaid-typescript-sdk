import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SelfieStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieStatus = (typeof SelfieStatus)[keyof typeof SelfieStatus] | (string & {});

export const selfieStatusSchema: EnumSchema<SelfieStatus> = s.enumOf<SelfieStatus>(SelfieStatus);
