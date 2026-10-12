import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of a consent grant. One of `ACTIVE`, `REVOKED`, `EXPIRED`. */
export const FdxConsentGrantStatus = {
  Active: "ACTIVE",
  Revoked: "REVOKED",
  Expired: "EXPIRED",
} as const;
export type FdxConsentGrantStatus =
  | (typeof FdxConsentGrantStatus)[keyof typeof FdxConsentGrantStatus]
  | (string & {});

export const fdxConsentGrantStatusSchema: EnumSchema<FdxConsentGrantStatus> =
  s.enumOf<FdxConsentGrantStatus>(FdxConsentGrantStatus);
