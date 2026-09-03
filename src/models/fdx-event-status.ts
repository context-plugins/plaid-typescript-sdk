import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FdxEventStatus = {
  Active: "ACTIVE",
  Expired: "EXPIRED",
  Revoked: "REVOKED",
  Suspended: "SUSPENDED",
} as const;
export type FdxEventStatus = (typeof FdxEventStatus)[keyof typeof FdxEventStatus] | (string & {});

export const fdxEventStatusSchema: EnumSchema<FdxEventStatus> = s.enumOf<FdxEventStatus>(FdxEventStatus);
