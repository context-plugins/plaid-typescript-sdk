import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the email address top level domain, which is the last part of the domain, is
 * fraudulent or risky if known. In most cases, a suspicious top level domain is also associated
 * with a disposable or high-risk domain.
 */
export const RiskCheckEmailTopLevelDomainIsSuspicious = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailTopLevelDomainIsSuspicious =
  | (typeof RiskCheckEmailTopLevelDomainIsSuspicious)[keyof typeof RiskCheckEmailTopLevelDomainIsSuspicious]
  | (string & {});

export const riskCheckEmailTopLevelDomainIsSuspiciousSchema: EnumSchema<RiskCheckEmailTopLevelDomainIsSuspicious> =
  s.enumOf<RiskCheckEmailTopLevelDomainIsSuspicious>(RiskCheckEmailTopLevelDomainIsSuspicious);
