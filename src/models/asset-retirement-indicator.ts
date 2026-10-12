import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the account is a retirement account (e.g., 401K, 403b, 457, thrift savings plans,
 * traditional and Roth, IRAs, SEP-IRA, SIMPLE-IRA, KEOGH, state retirement savings plans, other
 * independent and IRS-qualified employer retirement plans)
 */
export const AssetRetirementIndicator = {
  Yes: "Yes",
  No: "No",
} as const;
export type AssetRetirementIndicator =
  | (typeof AssetRetirementIndicator)[keyof typeof AssetRetirementIndicator]
  | (string & {});

export const assetRetirementIndicatorSchema: EnumSchema<AssetRetirementIndicator> =
  s.enumOf<AssetRetirementIndicator>(AssetRetirementIndicator);
