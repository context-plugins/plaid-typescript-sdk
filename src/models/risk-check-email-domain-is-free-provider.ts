import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the email address domain is a free provider such as Gmail or Hotmail if known.
 */
export const RiskCheckEmailDomainIsFreeProvider = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailDomainIsFreeProvider =
  | (typeof RiskCheckEmailDomainIsFreeProvider)[keyof typeof RiskCheckEmailDomainIsFreeProvider]
  | (string & {});

export const riskCheckEmailDomainIsFreeProviderSchema: EnumSchema<RiskCheckEmailDomainIsFreeProvider> =
  s.enumOf<RiskCheckEmailDomainIsFreeProvider>(RiskCheckEmailDomainIsFreeProvider);
