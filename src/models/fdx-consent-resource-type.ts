import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FdxConsentResourceType = {
  Account: "ACCOUNT",
  Customer: "CUSTOMER",
  Document: "DOCUMENT",
} as const;
export type FdxConsentResourceType =
  | (typeof FdxConsentResourceType)[keyof typeof FdxConsentResourceType]
  | (string & {});

export const fdxConsentResourceTypeSchema: EnumSchema<FdxConsentResourceType> =
  s.enumOf<FdxConsentResourceType>(FdxConsentResourceType);
