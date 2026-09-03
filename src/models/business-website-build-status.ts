import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessWebsiteBuildStatus = {
  ComingSoon: "coming_soon",
  Active: "active",
  Inactive: "inactive",
} as const;
export type BusinessWebsiteBuildStatus =
  | (typeof BusinessWebsiteBuildStatus)[keyof typeof BusinessWebsiteBuildStatus]
  | (string & {});

export const businessWebsiteBuildStatusSchema: EnumSchema<BusinessWebsiteBuildStatus> =
  s.enumOf<BusinessWebsiteBuildStatus>(BusinessWebsiteBuildStatus);
