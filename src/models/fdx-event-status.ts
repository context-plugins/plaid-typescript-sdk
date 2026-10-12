import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current status of indicated entity after reported event change. Not all statuses will be
 * supported on all entity types by all data providers
 */
export const FdxEventStatus = {
  Active: "ACTIVE",
  Expired: "EXPIRED",
  Revoked: "REVOKED",
  Suspended: "SUSPENDED",
} as const;
export type FdxEventStatus = (typeof FdxEventStatus)[keyof typeof FdxEventStatus] | (string & {});

export const fdxEventStatusSchema: EnumSchema<FdxEventStatus> = s.enumOf<FdxEventStatus>(FdxEventStatus);
