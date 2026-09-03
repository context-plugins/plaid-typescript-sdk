import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessCheckBooleanStatus = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type BusinessCheckBooleanStatus =
  | (typeof BusinessCheckBooleanStatus)[keyof typeof BusinessCheckBooleanStatus]
  | (string & {});

export const businessCheckBooleanStatusSchema: EnumSchema<BusinessCheckBooleanStatus> =
  s.enumOf<BusinessCheckBooleanStatus>(BusinessCheckBooleanStatus);
